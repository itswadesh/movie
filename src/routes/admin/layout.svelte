<script>
let popup = { show: false }
let rows = 5
let coloums = 5
function showing() {
	popup.show = !popup.show
}
</script>

<ul class="justify-centre flex h-24 space-x-10 bg-gray-900 px-16 py-8 text-white ">
	<li class="cursor-pointer hover:underline">Home</li>
	<li class="cursor-pointer hover:underline">catalouge</li>
	<li class="cursor-pointer hover:underline">contact us</li>
</ul>
<div class=" h-screen bg-gray-700">
	<div class="  h-screen  text-center">
		<label for="layout" class="text-center text-white"> set layout </label>
		<select name="layout" id="dropdown" class="ml-5 rounded-md">
			<option value="screen 1" selected>screen 1</option>
			<option value="screen 2">screen 2</option>
			<option value="screen 3">screen 3</option>
		</select>
		<button
			type="button"
			class="rounded-md border-2 bg-slate-300 px-2 text-slate-600 hover:bg-slate-400"
			on:click="{showing}">
			set layout</button>
	</div>
	{#if popup.show}
		<div
			class="fixed inset-0 mt-48 ml-10 flex h-72 w-60 flex-col items-center justify-center rounded-md bg-gray-500 shadow-sm">
			<label for="rows">Enter number of rows</label>
			<input type="number" name="rows" class="rounded-md" />
			<label for="coloums">Enter number of coloums</label>
			<input type="number" name="coloums" class="rounded-md" />
			<button class=" mt-4 rounded-md border-2 px-2 hover:bg-slate-400" type="button"
				>submit</button>
		</div>
	{/if}
	<div></div>
</div>
