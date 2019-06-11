const { v4 } = require('uuid');

const DATA_ATTR_PREFIX = 'data-';

module.exports = (hbs) => {
  hbs.registerPartial('nova', (args) => {
    const { name } = args;

    if (!name) {
      throw new Error('Component name is necessary');
    }
    const uuid = v4();

    const data = Object.keys(args).reduce((acc, key) => {
      if (key.startsWith(DATA_ATTR_PREFIX)) {
        acc[key.replace(DATA_ATTR_PREFIX, '')] = args[key];
      }

      return acc;
    }, args.data || {});

    const placeholder = `<div data-hypernova-key="${name}" data-hypernova-id="${uuid}"><div></div></div>`;
    const scriptTag = `<script type="application/json" data-hypernova-key="${name}" data-hypernova-id="${uuid}"><!--${JSON.stringify(data)}--></script>`;

    return new hbs.SafeString(`${placeholder}\n${scriptTag}`);
  });
};
