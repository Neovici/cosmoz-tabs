import { noChange, type ElementPart } from 'lit-html';
import { AsyncDirective, directive } from 'lit-html/async-directive.js';

/**
 * Classifies the placed slot's members against the band: a member whose
 * box lands past the first row is marked (`overflowing`, styled
 * `visibility: hidden` in `tab.css.ts`) and reported to `onOverflow`.
 * Placement is the configuration: the placed slot is the wrapping,
 * clipping track (the band) and its assignment is the membership.
 *
 * The band's height is a css constant per size/variant (the item box is
 * fully token-derived), so the classification is a pure read:
 * `intersectionRect.height === 0` against the band. The marks hide paint
 * only, so the layout never moves under the observer, and a member that
 * flows back into the band is reported as it happens - no
 * unmark-remeasure cycle.
 *
 * Every render re-arms: each member's observation is rebuilt
 * (unobserve/observe), which produces a fresh initial delivery that
 * re-derives its state from the live geometry - a hidden flip moves
 * nothing the observer would otherwise report, so it needs this.
 * Assignment changes report through the placed slot's own `slotchange`,
 * also for members it has not re-rendered.
 *
 * The per-target state accumulates in a map between deliveries; both the
 * marks and the report flush from it, never rebuilt from one batch.
 */
export interface OverflowConfig {
	/** Membership; unknown members stay unobserved and unmarked. */
	is: (el: Element) => boolean;
	/** Reports the marked members; invoked only when the set changes. */
	onOverflow: (overflowing: Set<HTMLElement>) => void;
}

const members = (slot: HTMLSlotElement, is: (el: Element) => boolean) =>
	slot.assignedElements({ flatten: true }).filter(is) as HTMLElement[];

const stable = (a?: Set<HTMLElement>, b?: Set<HTMLElement>) =>
	a != null &&
	b != null &&
	a.size === b.size &&
	[...b].every((el) => a.has(el));

class OverflowDirective extends AsyncDirective {
	_slot?: HTMLSlotElement;
	_is?: (el: Element) => boolean;
	_onOverflow?: (overflowing: Set<HTMLElement>) => void;

	#clipped = new Map<HTMLElement, boolean>();
	#last?: Set<HTMLElement>;
	#observer?: IntersectionObserver;

	#classify = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			const member = entry.target as HTMLElement;
			this.#clipped.set(
				member,
				entry.boundingClientRect.height > 0 &&
					entry.intersectionRect.height === 0,
			);
		});
		this.#flush();
	};

	#observe = (member: HTMLElement) => {
		// re-subscribed from a stale state: the map is preserved (it is
		// the accumulator), the fresh initial delivery re-derives the
		// member's state from the live geometry
		this.#observer?.unobserve(member);
		this.#observer?.observe(member);
	};

	#flush = () => {
		if (!this._slot || !this._is) {
			return;
		}
		const current = members(this._slot, this._is);

		current.forEach((member) => {
			const on = this.#clipped.get(member) === true;
			if (on === member.hasAttribute('overflowing')) {
				return;
			}
			if (on) {
				member.setAttribute('overflowing', '');
			} else {
				member.removeAttribute('overflowing');
			}
		});

		// a departed member is dropped outright - map, observer, mark:
		// nothing may retain it (the suite pins collection of removed
		// tabs)
		this.#clipped.forEach((_, member) => {
			if (current.includes(member)) {
				return;
			}
			this.#clipped.delete(member);
			this.#observer?.unobserve(member);
			if (member.hasAttribute('overflowing')) {
				member.removeAttribute('overflowing');
			}
		});

		const next = new Set(
			current.filter((member) => this.#clipped.get(member) === true),
		);
		if (stable(this.#last, next)) {
			return;
		}
		this.#last = next;
		this._onOverflow?.(next);
	};

	#onSlotChange = () => this.#arm();

	#arm = () => {
		if (!this.#observer || !this._slot || !this._is) {
			return;
		}
		for (const member of members(this._slot, this._is)) {
			this.#observe(member);
		}
		this.#flush();
	};

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	render(config: OverflowConfig) {
		return noChange;
	}

	update(part: ElementPart, [config]: [OverflowConfig]) {
		this._is = config.is;
		this._onOverflow = config.onOverflow;

		const slot = part.element as HTMLSlotElement;
		if (this._slot !== slot) {
			// the slot swap changes the observed assignment AND the band:
			// the observer is rebuilt on the new slot's own clipping box
			this._slot?.removeEventListener('slotchange', this.#onSlotChange);
			this.#observer?.disconnect();
			this.#observer = undefined;
			this._slot = slot;
			slot.addEventListener('slotchange', this.#onSlotChange);
		}

		this.#observer ??= new IntersectionObserver(this.#classify, {
			root: this._slot,
			threshold: [0, 1],
		});
		this.#arm();
		return noChange;
	}

	disconnected() {
		this._slot?.removeEventListener('slotchange', this.#onSlotChange);
		this._slot = undefined;
		this.#observer?.disconnect();
		this.#observer = undefined;
		this.#clipped.clear();
		this.#last = undefined;
	}
}

export const overflow = directive(OverflowDirective);
