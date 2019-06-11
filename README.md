# Hypernova Handlebars Directive

> Hypernova Directive for Handlebars

This directive enables you render a Hypernova placeholder for [Nova Proxy](https://github.com/ara-framework/nova-proxy) using [Handlerbars Partials](https://handlebarsjs.com/#partials)

## Installation

You can install the package from npm.

```bash
npm i --save hypernova-handlebars-directive
```

## Setup

You need to register the partial first using the helper function provided.
```js
const hbs = require('hbs');
const directive = require('hypernova-handlebars-directive');

directive(hbs)
```

## Usage

You need to provide a `name` attribute in the expression at least.Also you can provide the data passing a variable on the `data` attribute or using a attribute with the follow convention `data-<key>` to set a individual value.

```
{{>nova name="Navbar" data=data data-brand="Ara Framework" }}
```