[![Build Status](https://github.com/Neovici/cosmoz-tabs/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-tabs/actions?workflow=Github+CI)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Neovici/cosmoz-tabs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-tabs)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# &lt;cosmoz-tabs&gt;

`<cosmoz-tabs>` is a multi views (or pages) container element that allow navigation between the views using tabs or an accordion.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="cosmoz-tabs.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<cosmoz-tabs selected="0">
  <cosmoz-tab heading="First tab">
    <p>
     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
      maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
    </p>
  </cosmoz-tab>
  <cosmoz-tab heading="Second tab">
    <p>
      Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
      vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
    </p>
  </cosmoz-tab>
  <cosmoz-tab heading="Third tab">
    <p>
      Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
      sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
    </p>
  </cosmoz-tab>
</cosmoz-tabs>
```

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
