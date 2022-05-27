<script>
import Content from './_Content.svelte'

import Filters from './_Filters.svelte'
import Map from './_Map.svelte'
</script>

<h1>Best Delivery</h1>
<hr />
<div class="grid grid-cols-5 gap-1">
	<div class="col-span-1 "><Filters /></div>
	<div class="scroll-y-auto col-span-2 overflow-auto"><Content /></div>
	<div class="col-span-2 h-full overflow-hidden"><Map /></div>
</div>

<!-- https://www.w3schools.com/html/html_responsive.asp -->
