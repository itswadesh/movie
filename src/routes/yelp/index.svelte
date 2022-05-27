<script>
import Content from './_Content.svelte'

import Filters from './_Filters.svelte'
import Map from './_Map.svelte'
</script>

<style>
.left {
  float: left;
  width: 20%;
}

.main {
  float: left;
  width: 45%;
}

.right {
  float: left;
  width: 35%;
}

@media screen and (max-width: 1000px) {
  .left, .main, .right {
    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */
  }
}
</style>

<meta name="viewport" content="width=device-width, initial-scale=1">

<h1>Best Delivery</h1>
<hr />
<!-- <div class="grid grid-cols-5 gap-1">
	<div class="left col-span-1 "><Filters /></div>
	<div class="main scroll-y-auto col-span-2 overflow-auto"><Content /></div>
	<div class="right col-span-2 h-full overflow-hidden"><Map /></div>
</div> -->

<div>
	<div class="left"><Filters /></div>
	<div class="main"><Content /></div>
	<div class="right"><Map /></div>
</div>

<!-- https://www.w3schools.com/html/html_responsive.asp -->
