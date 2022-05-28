<script>
let suggested = [
	{ id: 1, text: `open Now` },
	{ id: 2, text: `offers delivery` },
	{ id: 3, text: `good for kids` },
	{ id: 4, text: `pizza` }
]

let Category = [
	{ id: 1, text: `Restaurants` },
	{ id: 2, text: `Sandwiches` },
	{ id: 3, text: `Food Delivery Services` },
	{ id: 4, text: `Coffee & Tea` }
]

let Features = [
	{ id: 1, text: `Offers Takeout` },
	{ id: 2, text: `Good for Groups` },
	{ id: 3, text: `Has TV` },
	{ id: 4, text: `Good for lunch` }
]

let Neighborhoods = [
	{ id: 1, text: `Alamo Square` },
	{ id: 2, text: `Anza Vista` },
	{ id: 3, text: `Ashbury Heights` },
	{ id: 4, text: `Balboa Terrace` }
]

let Distance = [
	{ id: 1, text: `Bird's-eye View` },
	{ id: 2, text: `Driving (5 mi.)` },
	{ id: 3, text: `Biking (2 mi.)` },
	{ id: 4, text: `Walking (1 mi.)` },
	{ id: 5, text: `Within 4 blocks` }
]
</script>

<div>
	<div>
		<div>
			Sort <b>
				<select class="border-0">
					{#each suggested as select}
						<option value="{select}">
							<b>{select.text}</b>
						</option>
					{/each}
				</select></b>

			<b>
				<select class="border-0">
					{#each Category as select}
						<option value="{select}">
							<b>{select.text}</b>
						</option>
					{/each}
				</select></b>

			<b>
				<select class="border-0">
					{#each Features as select}
						<option value="{select}">
							<b>{select.text}</b>
						</option>
					{/each}
				</select></b>

			<b>
				<select class="border-0">
					{#each Neighborhoods as select}
						<option value="{select}">
							<b>{select.text}</b>
						</option>
					{/each}
				</select></b>

			<b>
				<select class="border-0">
					{#each Distance as select}
						<option value="{select}">
							<b>{select.text}</b>
						</option>
					{/each}
				</select></b>
		</div>
	</div>
</div>

<!-- <div>
	<div class="m-2 my-4 p-2">
		<p class="pl-4"><b>N Filters</b></p>
		<p class="pl-4 text-gray-500">Offer Delivery</p>
		<p class="pl-4 text-cyan-500"><button><u>Clear all</u></button></p>
		<div class="m-5 grid h-5 grid-flow-row grid-cols-4 p-1">
			<div class="rounded-tl-xl rounded-bl-xl border-2 border-black p-1"><button>$</button></div>
			<div class="border-2 border-black p-1"><button>$$</button></div>
			<div class="border-2 border-black p-1"><button>$$$</button></div>
			<div class="rounded-tr-xl rounded-br-xl border-2 border-black p-1">
				<button>$$$$</button>
			</div>
		</div>
	</div>
</div>

<div class="m-2 my-4 p-2">
	<hr class="my-4" />
	<p><b>suggested</b></p>
	<p>
		<input type="checkbox" id="A1" />
		<label for="A1">open Now</label>
	</p>
	<p><input type="checkbox" id="A2" /> <label for="A2">offers delivery</label></p>
	<p><input type="checkbox" id="A3" /> <label for="A3">good for kids</label></p>
	<p><input type="checkbox" id="A4" /> <label for="A4">pizza</label></p>
</div>

<div class="m-2 my-4 p-2">
	<hr class="my-4" />
	<p><b>Category</b></p>
	<button class="m-2 rounded-xl border-2 border-black p-1"> Restaurants</button>
	<button class="m-2 rounded-xl border-2 border-black p-1">Sandwiches</button>
	<button class="m-2 rounded-xl border-2 border-black p-1">Food Delivery Services</button>
	<button class="m-2 rounded-xl border-2 border-black p-1">Coffee & Tea</button>
</div>

<div class="m-2 my-4 p-2">
	<hr class="my-4" />
	<p><b>Features</b></p>
	<p>
		<input type="checkbox" id="B1" />
		<label for="B1">Offers Takeout</label>
	</p>
	<p>
		<input type="checkbox" id="B2" />
		<label for="B2">Good for Groups</label>
	</p>
	<p>
		<input type="checkbox" id="B3" />
		<label for="B3">Has TV</label>
	</p>
	<p>
		<input type="checkbox" id="B4" />
		<label for="B4">Good for lunch</label>
	</p>
</div>

<div class="m-2 my-4 p-2">
	<hr class="my-4" />
	<p><b>Neighborhoods</b></p>
	<p>
		<input type="checkbox" id="C1" />
		<label for="C1">Alamo Square</label>
	</p>
	<p>
		<input type="checkbox" id="C2" />
		<label for="C2">Anza Vista</label>
	</p>
	<p>
		<input type="checkbox" id="C3" />
		<label for="C3">Ashbury Heights</label>
	</p>
	<p>
		<input type="checkbox" id="C4" />
		<label for="C4">Balboa Terrace</label>
	</p>
</div>

<div class="m-2 my-4 p-2">
	<hr class="my-4" />
	<p><b>Distance</b></p>
	<p>
		<input type="radio" id="D1" />
		<label for="D1">Bird's-eye View</label>
	</p>
	<p>
		<input type="radio" id="D2" />
		<label for="D2">Testing(5 mi.)</label>
	</p>
	<p>
		<input type="radio" id="D3" />
		<label for="D3">Biking (2 mi.)</label>
	</p>
	<p>
		<input type="radio" id="D4" />
		<label for="D4">Walking (1 mi.)</label>
	</p>
	<p>
		<input type="radio" id="D5" />
		<label for="D5">Within 4 blocks</label>
	</p>
</div> -->
