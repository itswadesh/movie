<style>
.left {
	float: left;
	width: 15%;
}

.main {
	float: left;
	width: 48%;
}

.right {
	float: left;
	width: 37%;
	padding-left: 10px;
}

/* @media screen and (max-width: 1325px) {
	.left,
	.main,
	.right {
		width: 100%; /*The width is 100%, when the viewport is 800px or smaller,    1321 
	}
} */

@media screen and (max-width: 1325px) {
	.main {
		width: 60%; /*The width is 100%, when the viewport is 800px or smaller,    1321 */
	}
}

@media screen and (max-width: 1325px) {
	.right {
		width: 40%; /*The width is 100%, when the viewport is 800px or smaller,    1321 */
	}
}

@media screen and (max-width: 400px) {
	.main {
		width: 100%; /*The width is 100%, when the viewport is 800px or smaller,    1321 */
	}
}

@media screen and (max-width: 400px) {
	.right {
		width: 100%; /*The width is 100%, when the viewport is 800px or smaller,    1321 */
	}
}
</style>

<script>
import Content from './_Content.svelte'

import Filters from './_Filters.svelte'
import Filters2 from './_Filters2.svelte'
import Map from './_Map.svelte'
import MediaQuery from './mediaQuery.svelte'
</script>

<meta name="viewport" content="width=device-width, initial-scale=1" />

<h1>Best Delivery</h1>
<hr />
<!-- <div class="grid grid-cols-5 gap-1">
	<div class="left col-span-1 "><Filters /></div>
	<div class="main scroll-y-auto col-span-2 overflow-auto"><Content /></div>
	<div class="right col-span-2 h-full overflow-hidden"><Map /></div>
</div> -->

<div>
	<MediaQuery query="(min-width: 1325px)" let:matches>
		{#if matches}
			<div class="left default p-3">
				<Filters />
			</div>
		{/if}
	</MediaQuery>

	<MediaQuery query="(max-width: 1325px)" let:matches>
		{#if matches}
			<div class="default">
				<Filters2 />
			</div>
		{/if}
	</MediaQuery>

	<!-- <div class="left "><Filters /></div> -->
	<div class="main"><Content /></div>
	<div class="right"><Map /></div>
</div>

<!-- https://www.w3schools.com/html/html_responsive.asp -->
