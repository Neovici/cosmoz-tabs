[![Build Status](https://travis-ci.org/Neovici/cosmoz-tabs.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-tabs)
[![Code Climate](https://codeclimate.com/github/codeclimate/codeclimate/badges/gpa.svg)](https://codeclimate.com/github/Neovici/cosmoz-tabs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-tabs)

# &lt;cosmoz-tabs&gt;

`<cosmoz-tabs>` is a multi views (or pages) container element that allow navigation between the views using tabs or an accordion.

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="cosmoz-tab.html">
    <link rel="import" href="cosmoz-tabs.html">
    <cosmoz-tabs>
      <cosmoz-tab heading="First tab" tab-id="tab1">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
          maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
        </p>
      </cosmoz-tab>
      <cosmoz-tab heading="Second tab" tab-id="tab2">
        <p>Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
           vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
        </p>
      </cosmoz-tab>
      <cosmoz-tab heading="Third tab" tab-id="tab3">
        <p>Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
           sapien eu gravida consectetur, purus felis lobortis massa, id consequat eros lacus sit amet quam.
        </p>
      </cosmoz-tab>
    </cosmoz-tabs>
  </template>
</custom-element-demo>
```
-->
```html
<link rel="import" href="cosmoz-tab.html">
<link rel="import" href="cosmoz-tabs.html">
<cosmoz-tabs>
  <cosmoz-tab heading="First tab" tab-id="tab1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum massa ante,
      maximus in consectetur non, imperdiet ullamcorper risus. Donec vulputate justo nibh.
    </p>
  </cosmoz-tab>
  <cosmoz-tab heading="Second tab" tab-id="tab2">
    <p>Fusce consectetur nisi at felis finibus rutrum. Vestibulum fermentum pharetra sem,
       vitae tincidunt est mattis tristique. Donec blandit nulla non tellus tincidunt pretium.
    </p>
  </cosmoz-tab>
  <cosmoz-tab heading="Third tab" tab-id="tab3">
    <p>Etiam ante dolor, commodo non vestibulum vel, malesuada a nunc. Vestibulum accumsan,
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
