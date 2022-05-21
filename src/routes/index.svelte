<style>
.div1 {
	background-color: #ec4141;
	border-radius: 5px;
	border-color: rgb(214, 193, 6);
	padding: 20px;
	margin: 20px;
}

.div2 {
	background-color: #f5f5f5;
	border-radius: 5px;
	border-color: gold;
	padding: 20px;
	margin-bottom: 20px;
	border: 5px solid rgb(240, 223, 68);
}
.div3 {
	background-color: #e95f5f;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 20px;
	/* border: 5px solid rgb(240, 223, 68); */
	margin: 2px;
}
.div4 {
	background-color: #f5f5f5;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 20px;
}
</style>

<script>
let data = [
	{
		movies: [
			{ id: 1, name: 'Avengers', cost: '150' },
			{ id: 2, name: 'Avengers 2', cost: '180' },
			{ id: 3, name: 'Avengers 3', cost: '200' },
			{ id: 4, name: 'Avengers 4', cost: '250' }
		]
	}
]

function selectedMovie(movie) {
	console.log(movie)
}
</script>

<h1>MOVIES</h1>

<div class="div1">
	<div class="div2 grid grid-flow-row grid-cols-2">
		{#each data as d}
			{#each d.movies as m}
				<div class="div3">
					<a href="{`/seat-layout?movieName=${m.name}&price=${m.cost}`}"><h2>{m.name}</h2></a>
					<p>{m.cost}</p>
				</div>
			{/each}
		{/each}
	</div>
</div>
