<style>

.div0 {
	background-color: rgb(66, 21, 191);
	height: 170px;
	width: 100%;
	margin: 2px 20px 20px 20px;
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.75);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}

.div1 {
	background-color: #ec4141;
	border-radius: 5px;
	border-color: rgb(214, 193, 6);
	padding: 20px;
	margin: 20px;
}

.div2 {
	background-color: #0b2477;
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
	border: 5px solid rgb(240, 223, 68);
	margin: 2px;
	
}
.div4 {
	background-color: #240be2;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 20px;
	height: 130px;
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

<div class="div0">
	<h1 class="text-8xl"><b>MOVIES</b></h1>
</div>



<div class="div1">
	<div class="div2 grid grid-flow-row grid-cols-2">
		{#each data as d}
			{#each d.movies as m}
				<div class="div3">
					<a href="{`/seat-layout?movieName=${m.name}&price=${m.cost}`}"><h2 class="text-white text-2xl text-center">{m.name}</h2></a>
					<p class="text-white text-2xl text-center">{m.cost}</p>
				</div>
			{/each}
		{/each}
	</div>
</div>

<div class="div4">
	<p class="text-center text-xl align-middle"><b>Any offer present will be shown here</b></p>
</div>
