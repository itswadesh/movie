<script>
let recomended = [
	{ id: 1, text: `Recomended` },
	{ id: 2, text: `High Rated` },
	{ id: 3, text: `Most viewed` }
]
let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
</script>

<div>
	<div class="col-start-2 row-start-1">
		<div>
			<p class="text-xs">
				<button> san Francisco</button> &emsp <b>></b> &emsp <button>restaurants</button> &emsp
				<b>></b>
				&emsp
				<button>Delivery</button>
			</p>
			<p class="text-3xl"><b>Delivery in san Francisco, CA</b></p>
			<br />
			<br />
			<p><b>Sponsored Results ⓘ</b></p>
		</div>
	</div>
	<div>
		<div>
			<p>
				Sort <b>
					<select class="border-0">
						{#each recomended as select}
							<option value="{select}">
								<b>{select.text}</b>
							</option>
						{/each}
					</select></b>
			</p>
		</div>
	</div>
</div>

<div>
	{#each n as m}
		<div class="col-span-3 col-start-2 row-start-2  ">
			<div class="m-2 grid h-auto grid-flow-row grid-cols-3 border-2 border-black p-2">
				<div class="col-start-1"><img src="/img/food1.jpg" alt="f1" /></div>
				<div class="col-span-2 col-start-2 row-start-1 p-2">
					<div><button class="text-4xl"> <b>Sausy Green</b></button></div>
					<div>🌟🌟🌟🌟🌟</div>
					<div>
						<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">wraps</button>
						<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">salad</button>
						<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">vegetarian</button>
						<button>RUSSIAN HILL</button>
					</div>
					<div><b class="text-red-500">closed</b> untill 11:00 tomorrow</div>
					<div>
						<img src="/img/local-icon.jpg" alt="" class="float-left h-10 w-12" />
						<b class="text-lg">Locally available:</b>
						<b>♻️ eco friendly ⓘ</b>
					</div>
					<div>
						<div class="text-gray-500">
							“Omg these salads are delicious! I ordered the vibrant with chicken for lunch today
							and I was so impressed with how fresh and flavorful it was. Great…” <button
								class="text-cyan-500"><u>more...</u></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>

<!-- <div class="col-span-3 col-start-2 row-start-2  ">
	<div class="m-2 grid h-auto grid-flow-row grid-cols-3 border-2 border-black p-2">
		<div class="col-start-1"><img src="/img/food1.jpg" alt="f1" /></div>
		<div class="col-span-2 col-start-2 row-start-1 p-2">
			<div><button class="text-4xl"> <b>Sausy Green</b></button></div>
			<div>🌟🌟🌟🌟🌟</div>
			<div>
				<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">wraps</button>
				<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">salad</button>
				<button class=" m-1 rounded-xl bg-gray-300 p-1 text-gray-700">vegetarian</button>
				<button>RUSSIAN HILL</button>
			</div>
			<div><b class="text-red-500">closed</b> untill 11:00 tomorrow</div>
			<div>
				<img src="/img/local-icon.jpg" alt="" class="float-left h-10 w-12" />
				<b class="text-lg">Locally available:</b>
				<b>♻️ eco friendly ⓘ</b>
			</div>
			<div>
				<div class="text-gray-500">
					“Omg these salads are delicious! I ordered the vibrant with chicken for lunch today and I
					was so impressed with how fresh and flavorful it was. Great…” <button
						class="text-cyan-500"><u>more...</u></button>
				</div>
			</div>
		</div>
	</div>
</div> -->
