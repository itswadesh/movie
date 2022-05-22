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
	width: 1235px;
	border: 5px solid #aaa;
	border-radius: 2px;
	box-shadow: 1px 11px 10px rgba(0, 0, 0, 0.1);
	padding: 2em;
	margin: 10px 0 4em 10px;
	background-color: white;
	/* transform: rotateX(45deg); */
}

.arrangement {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	width: 100%;
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
	background: blue;
}

/* .active {
	background-color: pink;
} */
</style>

<script context="module">
export async function load({ url, params, fetch }) {
	const movieName = url.searchParams.get('movieName')
	const price = url.searchParams.get('price')
	return {
		props: {
			movieName,
			price
		}
	}
}
</script>

<script>
export let movieName, price
let bookedSeats = []
let layout = [
	{
		row: 1,
		seats: [
			{ name: 'A1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'A2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'A3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'A4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'A5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'A6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'A7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'A8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'A9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'A10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'A11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'A12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'A13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'A14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'A15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 2,
		seats: [
			{ name: 'B1', ghost: false, booked: false, selected: false, row: 2, column: 1 },
			{ name: 'B2', ghost: false, booked: false, selected: false, row: 2, column: 2 },
			{ name: 'B3', ghost: false, booked: false, selected: false, row: 2, column: 3 },
			{ name: 'B4', ghost: false, booked: false, selected: false, row: 2, column: 4 },
			{ name: 'B5', ghost: false, booked: false, selected: false, row: 2, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'B6', ghost: false, booked: false, selected: false, row: 2, column: 6 },
			{ name: 'B7', ghost: false, booked: false, selected: false, row: 2, column: 7 },
			{ name: 'B8', ghost: false, booked: false, selected: false, row: 2, column: 8 },
			{ name: 'B9', ghost: false, booked: false, selected: false, row: 2, column: 9 },
			{ name: 'B10', ghost: false, booked: false, selected: false, row: 2, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'B11', ghost: false, booked: false, selected: false, row: 2, column: 11 },
			{ name: 'B12', ghost: false, booked: false, selected: false, row: 2, column: 12 },
			{ name: 'B13', ghost: false, booked: true, selected: false, row: 2, column: 13 },
			{ name: 'B14', ghost: false, booked: false, selected: false, row: 2, column: 14 },
			{ name: 'B15', ghost: false, booked: false, selected: false, row: 2, column: 15 }
		]
	},

	{
		row: 3,
		seats: [
			{ name: 'C1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'C2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'C3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'C4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'C5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'C6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'C7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'C8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'C9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'C10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'C11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'C12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'C13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'C14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'C15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 4,
		seats: [
			{ name: 'D1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'D2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'D3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'D4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'D5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'D6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'D7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'D8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'D9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'D10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'D11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'D12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'D13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'D14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'D15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 5,
		seats: [
			{ name: 'E1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'E2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'E3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'E4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'E5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'E6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'E7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'E8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'E9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'E10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'E11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'E12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'E13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'E14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'E15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 6,
		seats: [
			{ name: 'F1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'F2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'F3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'F4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'F5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'F6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'F7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'F8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'F9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'F10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'F11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'F12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'F13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'F14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'F15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 7,
		seats: [
			{ name: 'G1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'G2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'G3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'G4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'G5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'G6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'G7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'G8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'G9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'G10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'G11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'G12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'G13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'G14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'G15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
		]
	},

	{
		row: 8,
		seats: [
			{ name: 'H1', ghost: false, booked: false, selected: false, row: 1, column: 1 },
			{ name: 'H2', ghost: false, booked: false, selected: false, row: 1, column: 2 },
			{ name: 'H3', ghost: false, booked: false, selected: false, row: 1, column: 3 },
			{ name: 'H4', ghost: false, booked: false, selected: false, row: 1, column: 4 },
			{ name: 'H5', ghost: false, booked: false, selected: false, row: 1, column: 5 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'H6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'H7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'H8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'H9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'H10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'H11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'H12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'H13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'H14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'H15', ghost: false, booked: false, selected: false, row: 1, column: 15 }
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
		<b> {movieName} === {price} </b>
	</p>
</div>

<div class="theatre">
	<!-- <h1>Movies</h1> -->
	<br />
	<!-- {bookedSeats} -->

	<div class="box"></div>

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
							<!-- {#if seat.selected == false}
								<button
									on:click="{() => selectSeat(seat)}"
									class="seat m-2 h-10 w-14 bg-gray-700 text-white">{seat.name}</button>
							{:else}
								<button
									on:click="{() => selectSeat(seat)}"
									class="seat m-2 h-10 w-14 bg-gray-700 text-white">{seat.name}</button>
							{/if} -->
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
		<a href="{`/payment?movieName=${movieName}&price=${price}&bookedSeats=${bookedSeats}&count=${bookedSeats.length}&total=${bookedSeats.length * price}`}">Confirm tickets</a>
	</div>
</div>
