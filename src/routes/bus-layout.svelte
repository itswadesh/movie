<style>
/* movie-container
showcase
seat
seat selected
seat occupied
container
screen
row
seat
text */

* {
	box-sizing: border-box;
}

/* body {
	background-color: #242333;
	display: flex;
	flex-direction: column;
	color: white;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: 'Lato', 'sans-serif';
} */

.seat {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

/* .row {
	display: flex;
}

.movie-container {
	margin: 20px 0;
}

.movie-container select {
	background-color: #fff;
	border: 0;
	font-size: 14px;
	border-radius: 5px;
	margin-left: 10px;
	padding: 5px 15px 5px 15px;
	-moz-appearance: none;
	-webkit-appearance: none;
	appearance: none;
} */

/* .seat.selected {
	background-color: #6feaf6;
}

.seat.occupied {
	background-color: #fff;
}

.seat:nth-of-type(3) {
	margin-left: 18px;
}

.seat:nth-last-of-type(2) {
	margin-left: 18px;
}

.seat:not(.occupied):hover {
	cursor: pointer;
	transform: scale(1.2);
} */

/* .showcase .seat:not(.occupied):hover {
	cursor: default;
	transform: scale(1);
} */

/* .showcase {
	background-color: rgba(0, 0, 0, 0.1);
	padding: 5px 10px;
	border-radius: 5px;
	color: #777;
	list-style-type: none;
	display: flex;
	justify-content: space-between;
}

.showcase li {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 10px;
} */

/* .showcase li small {
	margin-left: 10px;
} */

/* .screen {
	background-color: #fff;
	height: 70px;
	width: 100%;
	margin: 15px 0;
	transform: rotateX(-45deg);
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.75);
} */

/* .container {
	perspective: 1000px;
	margin-bottom: 30px;
}

p.text {
	margin: 5px 0;
}

p.text span {
	color: #6feaf6;
} */

.box {
	width: 515px;
	border: 5px solid #aaa;
	border-radius: 2px;
	box-shadow: 1px 11px 10px rgba(0, 0, 0, 0.1);
	padding: 2em;
	margin: 10px 0 2em 0px;
	background-color: white;
	/* transform: rotateX(45deg); */
}

.arrangement {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 980px;
}

.theatre {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	background: cyan;
}

.details {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	background: cyan;
	padding: 1em;
}

.confirm {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 16%;
	background: yellow;
	padding: 1em;
	border: 5px solid #aaa;
}

.confirmContainer {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
	background: cyan;
	padding: 1em;
}

.nameDetail {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	padding: 3em;
	width: 100%;
	background: rgb(150 148 221);
}
.dot {
	height: 100px;
	width: 100px;
	margin-left: 325px;
	margin-bottom: 25px;
	background-color: cyan;
	border-radius: 50%;
	display: inline-block;
}

@media screen and (min-width: 1959px) {
	.theatre {
		width: 80%; /*The width is 100%, when the viewport is 800px or smaller,    1321 */
	}
}
/* .active {
	background-color: pink;
} */
</style>

<script context="module">
export async function load({ url, params, fetch }) {
	const busName = url.searchParams.get('busName')
	const price = url.searchParams.get('price')
	return {
		props: {
			busName,
			price
		}
	}
}
</script>

<script>
export let busName, price
let bookedSeats = []
let layout = [
	{
		row: 1,
		seats: [
			{
				name: 'A1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'A2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'A3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'A4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'A5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 2,
		seats: [
			{
				name: 'B1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'B2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'B3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'B4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'B5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 3,
		seats: [
			{
				name: 'C1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'C2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'C3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'C4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'C5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 4,
		seats: [
			{
				name: 'D1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'D2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'D3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'D4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'D5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 5,
		seats: [
			{
				name: 'E1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'E2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'E3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'E4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'E5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 6,
		seats: [
			{
				name: 'F1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'F2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'F3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'F4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'F5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 7,
		seats: [
			{
				name: 'G1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'G2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: true,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'G3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'G4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'G5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},

	{
		row: 8,
		seats: [
			{
				name: 'H1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'H2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'H3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'H4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'H5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},
	{
		row: 9,
		seats: [
			{
				name: 'I1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'I2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: '...',
				ghost: true,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'I3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'I4',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'I5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	},
	{
		row: 10,
		seats: [
			{
				name: 'J1',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 1
			},
			{
				name: 'J2',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 2
			},
			{
				name: 'J3',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 3
			},
			{
				name: 'J4',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 4
			},
			{
				name: 'J5',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 5
			},
			{
				name: 'J6',
				ghost: false,
				booked: false,
				selected: false,
				row: 2,
				column: 16
			},
			{
				name: 'J7',
				ghost: false,
				booked: false,
				selected: false,
				row: 1,
				column: 6
			}
		]
	}
]

function selectSeat(seat) {
	if (seat.selected) {
		seat.selected = false
		bookedSeats.splice(bookedSeats.indexOf(seat.name), 1)
		bookedSeats = bookedSeats
	} else {
		seat.selected = true
		bookedSeats.push(seat.name)
		bookedSeats = bookedSeats
	}
}
</script>

<div class="nameDetail">
	<p>
		<b> {busName} === {price} </b>
	</p>
</div>

<div class="theatre">
	<!-- <h1>Movies</h1> -->
	<br />
	<!-- {bookedSeats} -->

	<div class="arrangement"><div class="box"></div></div>

	<div class="arrangement">
		<span class="dot pt-4"><img src="{`/img/driver.jpg`}" alt="" /></span>
	</div>

	<div class="arrangement">
		{#each layout as l}
			<p>
				{#each l.seats as seat}
					{#if seat.ghost == false}
						{#if seat.booked == false}
							<button
								on:click="{() => selectSeat(seat)}"
								class="seat m-2 h-10 w-14 bg-gray-700 text-white {bookedSeats.includes(seat.name)
									? 'bg-blue-500'
									: ''}">
								{seat.name}
							</button>
						{:else}
							<button class="seat m-2 h-10 w-14 bg-gray-300 text-white"
								><i>{seat.name}&emsp</i></button>
						{/if}
					{:else}
						<button class="seat m-2 h-10 w-14 bg-gray-000 text-cyan-300">
							<b class="">{seat.name}&emsp</b>
						</button>
					{/if}
				{/each}
			</p>
		{/each}
	</div>
</div>

<!-- {#each bookedSeats as b}
	{#each layout as l}
		{#each l.seats as seat}
			{#if seat.name == b}
				*
			{/if}
		{/each}
	{/each}
{/each} -->

<div class="theatre">
	<div>
		<p class="details">
			No. of tickets booked : {bookedSeats.length} <br />
		</p>
		<p class="details">
			total cost= {bookedSeats.length * price}
		</p>
		<p class="details">
			Selected seats : {bookedSeats}
		</p>
	</div>

	<div class="confirmContainer">
		<div class="confirm">
			{#if bookedSeats.length > 0}
				<a
					href="{`/payment-bus?busName=${busName}&price=${price}&bookedSeats=${bookedSeats}&count=${
						bookedSeats.length
					}&total=${bookedSeats.length * price}`}">Confirm tickets</a>
			{:else}
				<p>select any seat</p>
			{/if}
		</div>
	</div>
</div>
