## @cyw233/plugin-chart-amcharts-stock

[![Version](https://img.shields.io/npm/v/@superset-ui/plugin-chart-amcharts-stock.svg?style=flat-square)](https://img.shields.io/npm/v/@superset-ui/plugin-chart-amcharts-stock.svg?style=flat-square)
[![David (path)](https://img.shields.io/david/apache-superset/superset-ui.svg?path=packages%2Fsuperset-ui-plugin-chart-amcharts-stock&style=flat-square)](https://david-dm.org/apache-superset/superset-ui?path=packages/superset-ui-plugin-chart-amcharts-stock)

This plugin provides Amcharts stock chart for Superset, specifically for half-hourly spot price.

### Usage

Configure `key`, which can be any `string`, and register the plugin. This `key` will be used to lookup this chart throughout the app.

```js
import AmchartsStockChartPlugin from '@superset-ui/plugin-chart-amcharts-stock';

new AmchartsStockChartPlugin()
  .configure({ key: 'amcharts-stock' })
  .register();
```

Then use it via `SuperChart`. See [storybook](https://apache-superset.github.io/superset-ui/?selectedKind=plugin-chart-amcharts-stock) for more details.

```js
<SuperChart
  chartType="amcharts-stock"
  width={600}
  height={600}
  formData={...}
  queryData={{
    data: {...},
  }}
/>
```

### File structure generated

```
├── README.md
├── package.json
├── src
│   ├── AmchartsStock.tsx
│   ├── images
│   │   └── thumbnail.png
│   ├── index.ts
│   ├── plugin
│   │   ├── buildQuery.ts
│   │   ├── controlPanel.ts
│   │   ├── index.ts
│   │   └── transformProps.ts
│   └── types.ts
├── test
│   └── index.test.ts
└── types
    └── external.d.ts
```