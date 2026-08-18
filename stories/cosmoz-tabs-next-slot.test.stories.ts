import { component } from "@pionjs/pion";
import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit-html";
import { expect, waitFor } from "storybook/test";

import "../src/next";
import { settle, sr } from "./overflow-helpers";

/**
 * wrapper components can project tabs through a slot.
 * auto-slotting must not steal that slot.
 */
if (!customElements.get("cosmoz-tabs-next-slot-wrapper")) {
	customElements.define(
		"cosmoz-tabs-next-slot-wrapper",
		component(
			() => html`
				<cosmoz-tabs-next variant="underline">
					<cosmoz-tab-next name="tab0" active>Tab0</cosmoz-tab-next>
					<slot></slot>
				</cosmoz-tabs-next>
			`
		)
	);
}

if (!customElements.get("cosmoz-tabs-next-dynamic-slot-wrapper")) {
	customElements.define(
		"cosmoz-tabs-next-dynamic-slot-wrapper",
		component(
			(host: HTMLElement) => {
				const dense = host.hasAttribute("dense");
				return html`
					<cosmoz-tabs-next variant="underline">
						<cosmoz-tab-next name="tab0" active>Tab0</cosmoz-tab-next>
						<slot></slot>
						${dense
							? html`
									<cosmoz-tab-next name="owned1">Owned 1</cosmoz-tab-next>
									<cosmoz-tab-next name="owned2">Owned 2</cosmoz-tab-next>
							  `
							: ""}
					</cosmoz-tabs-next>
				`;
			},
			{ observedAttributes: ["dense"] }
		)
	);
}

const meta: Meta = {
	title: "Tests/Tabs slot (next)",
};

export default meta;

type Story = StoryObj;

export const CollectsTabsThroughNestedSlot: Story = {
	render: () => html`
		<div class="box" style="width: 260px; overflow: hidden;">
			<cosmoz-tabs-next-slot-wrapper>
				<cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
				<cosmoz-tab-next name="tab3">Attachments</cosmoz-tab-next>
				<span class="notatab">x</span>
			</cosmoz-tabs-next-slot-wrapper>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const wrapper = canvasElement.querySelector(
			"cosmoz-tabs-next-slot-wrapper"
		) as HTMLElement;
		const bar = sr(wrapper).querySelector("cosmoz-tabs-next") as HTMLElement;
		const projected = () =>
			(
				sr(bar).querySelector(".items slot") as HTMLSlotElement
			).assignedElements({ flatten: true });

		await settle(20);

		await step("the projecting slot is left where it is", async () =>
			expect(
				[...bar.children]
					.find((el) => el.localName === "slot")
					?.hasAttribute("slot")
			).toBe(false)
		);

		await step("every tab reaches the clipping container", async () => {
			const tabs = projected().filter(
				(el) => el.localName === "cosmoz-tab-next"
			);
			expect(tabs.map((el) => el.getAttribute("name"))).toEqual([
				"tab0",
				"tab1",
				"tab2",
				"tab3",
			]);
		});

		await step(
			"projected tabs are styled like the direct one",
			async () =>
				await waitFor(() =>
					expect(
						wrapper.querySelector("[name=tab1]")?.getAttribute("variant")
					).toBe("underline")
				)
		);

		await step("and they take part in the overflow", async () => {
			await waitFor(() =>
				expect(
					sr(bar).querySelectorAll(".menu > cosmoz-tab-next").length
				).toBeGreaterThan(0)
			);
			/** non-tabs stay out of the overflow path. */
			expect(
				sr(bar).querySelectorAll(".menu > :not(cosmoz-tab-next)").length
			).toBe(0);
		});
	},
};

export const TracksDynamicNestedSlotChanges: Story = {
	render: () => html`
		<div class="box" style="width: 140px; overflow: hidden;">
			<cosmoz-tabs-next-dynamic-slot-wrapper>
				<cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
				<cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
			</cosmoz-tabs-next-dynamic-slot-wrapper>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const wrapper = canvasElement.querySelector(
			"cosmoz-tabs-next-dynamic-slot-wrapper"
		) as HTMLElement;
		const bar = sr(wrapper).querySelector("cosmoz-tabs-next") as HTMLElement;
		const rows = () => sr(bar).querySelectorAll(".menu > cosmoz-tab-next");

		await waitFor(() => expect(rows().length).toBeGreaterThan(0));

		await step("new projected tabs are picked up", async () => {
			wrapper.append(
				Object.assign(document.createElement("cosmoz-tab-next"), {
					textContent: "Attachments",
				})
			);
			wrapper.lastElementChild?.setAttribute("name", "tab3");
			await waitFor(() =>
				expect(
					[...rows()].some((row) => row.getAttribute("name") === "tab3")
				).toBe(true)
			);
		});

		await step("wrapper-owned tab changes are picked up", async () => {
			wrapper.setAttribute("dense", "");
			await waitFor(() =>
				expect(
					[...rows()].some((row) => row.getAttribute("name") === "owned2")
				).toBe(true)
			);
		});
	},
};
