<style>
.div0 {
	background-color: white;
	height: 170px;
	width: 100%;
	margin: 2px 20px 20px 20px;
	box-shadow: 0 3px 10px white;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: auto;
}

.div1 {
	background-color: white;
	border-radius: 5px;
	border-color: white;
	padding: 20px;
	/* margin: 20px; */
	width: 67%;
	display: flex;
	flex-wrap: wrap;
	/* justify-content: space-evenly; */
	align-items: center;
	margin: auto;
}

.div2 {
	background-color: white;
	border-radius: 5px;
	border-color: white;
	padding: 20px;
	margin-bottom: 20px;
	/* display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center; */
	/* margin: auto; */
	/* border: 5px solid; */
}
.div3 {
	background-color: white;
	border-radius: 5px;
	/* padding: 20px; */
	margin-bottom: 20px;
	border: 5px solid white;
	margin: 2px;
}
.div4 {
	background-color: #240be2;
	border-radius: 5px;
	padding: 20px;
	margin-bottom: 20px;
	height: 100%;
}

.div5 {
	height: 688px;
	background: white;
}

.imgs {
	height: 372px;
	width: 222px;
	border-radius: 10px;
}

.contact {
	font-size: xx-large;
}
</style>

<script>
let data = [
	{
		movies: [
			{
				id: 1,
				time: '7:00 AM',
				name: 'Avengers',
				cost: '150',
				src: '/img/avengers1.jpg',
				gener: 'action'
			},
			{
				id: 2,
				time: '10:30 AM',
				name: 'Avengers 2',
				cost: '180',
				src: '/img/avengers2.jpg',
				gener: 'action/drama'
			},
			{
				id: 3,
				time: '1:00 PM',
				name: 'Avengers 3',
				cost: '200',
				src: '/img/avengers3.jpg',
				gener: 'action'
			},
			{
				id: 4,
				time: '3:30 PM',
				name: 'Avengers 4',
				cost: '250',
				src: '/img/avengers4.jpg',
				gener: 'action/drama'
			},
			{
				id: 1,
				time: '6:30 PM',
				name: 'Avengers',
				cost: '150',
				src: '/img/avengers1.jpg',
				gener: 'action'
			}
			// { id: 2, name: 'Avengers 2', cost: '180', src: '/img/avengers2.jpg', gener: 'action' },
			// { id: 3, name: 'Avengers 3', cost: '200', src: '/img/avengers3.jpg', gener: 'action' }
		]
	}
]

// avengers1 = '/img/avengers1.jpg'

function selectedMovie(movie) {
	console.log(movie)
}
</script>

<div class="div5">
	<div class="div0">
		<h1 class="text-8xl"><b>MOVIES</b></h1>
	</div>
	<!-- <img src="{Avengers1}" alt="avenger" /> -->
	<div class="div1">
		<p class="ml-8 text-2xl"><b>Recomended movies</b></p>
		<div class="div2 grid grid-flow-row grid-cols-5 gap-4">
			{#each data as d}
				{#each d.movies as m}
					<div class="div3">
						<a href="{`/seat-layout?movieName=${m.name}&movieTime=${m.time}`}"
							><img src="{m.src}" alt="{m.name} *" class="imgs" />
							<h2 class="text-center text-2xl "><b>{m.name}</b></h2></a>
						<!-- <p class="text-center text-2xl "><b>₹{m.cost}</b></p> -->
						<p class="text-center text-2xl text-black">{m.gener}</p>
						<p class="text-center text-2xl text-black">{m.time}</p>
					</div>
				{/each}
			{/each}
		</div>
	</div>

	<div class="div4">
		<p class="text-center align-middle text-xl"><b>Any offer present will be shown here</b></p>
		<p class="contact text-white"><b>Contact details:-</b></p>
		<p class="contact text-white"><b>email:-</b> thisIsATest@gmail.com</p>
		<p class="contact text-white">
			<b>phone:-</b> +91-9888888888
		</p>
	</div>
</div>

<!-- <img src="{`/img/avengers1.jpg`}" alt="avenger" class="imgs" /> -->
