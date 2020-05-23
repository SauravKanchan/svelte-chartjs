# svelte-chartjs
[![npm version](https://badge.fury.io/js/svelte-chartjs.svg)](https://badge.fury.io/js/svelte-chartjs)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_shield)
![npm](https://img.shields.io/npm/dm/svelte-chartjs)

Svelte wrapper for [chart.js](https://www.chartjs.org/) Open for PRs and contributions!

Full Documentation and demo [here](https://saurav.tech/mdbsvelte/?path=/story/charts--installation)

### Installation 
```shell script
npm i svelte-chartjs
```

### Usage
```svelte
<script>
  import Line from "svelte-chartjs/src/Line.svelte"
</script>
<Line data={...} />
```

#### Custom Size
In order for Chart.js to obey the custom size you need to set `maintainAspectRatio` to false, example:
```svelte
<Bar
  data={data}
  width={100}
  height={50}
  options={{ maintainAspectRatio: false }}
/>
```


## License
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FSauravKanchan%2Fsvelte-chartjs?ref=badge_large)
