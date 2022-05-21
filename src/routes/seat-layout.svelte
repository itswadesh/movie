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

body {
	background-color: #242333;
	display: flex;
	flex-direction: column;
	color: white;
	align-items: center;
	justify-content: center;
	height: 100vh;
	font-family: 'Lato', 'sans-serif';
}

.seat {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.row {
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
}

.seat.selected {
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
}

.showcase .seat:not(.occupied):hover {
	cursor: default;
	transform: scale(1);
}

.showcase {
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
}

.showcase li small {
	margin-left: 10px;
}

.screen {
	background-color: #fff;
	height: 70px;
	width: 100%;
	margin: 15px 0;
	transform: rotateX(-45deg);
	box-shadow: 0 3px 10px rgba(255, 255, 255, 0.75);
}

.container {
	perspective: 1000px;
	margin-bottom: 30px;
}

p.text {
	margin: 5px 0;
}

p.text span {
	color: #6feaf6;
}
</style>

<script>
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
			{ name: 'A6', ghost: false, booked: false, selected: false, row: 1, column: 6 },
			{ name: 'A7', ghost: false, booked: false, selected: false, row: 1, column: 7 },
			{ name: 'A8', ghost: false, booked: false, selected: false, row: 1, column: 8 },
			{ name: 'A9', ghost: false, booked: false, selected: false, row: 1, column: 9 },
			{ name: 'A10', ghost: false, booked: false, selected: false, row: 1, column: 10 },
			{ name: 'A11', ghost: false, booked: false, selected: false, row: 1, column: 11 },
			{ name: 'A12', ghost: false, booked: false, selected: false, row: 1, column: 12 },
			{ name: 'A13', ghost: false, booked: false, selected: false, row: 1, column: 13 },
			{ name: 'A14', ghost: false, booked: false, selected: false, row: 1, column: 14 },
			{ name: 'A15', ghost: false, booked: false, selected: false, row: 1, column: 15 },
			{ name: 'A16', ghost: false, booked: false, selected: false, row: 1, column: 16 },
			{ name: 'A17', ghost: false, booked: false, selected: false, row: 1, column: 17 }
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
			{ name: 'B6', ghost: false, booked: false, selected: false, row: 2, column: 6 },
			{ name: 'B7', ghost: false, booked: false, selected: false, row: 2, column: 7 },
			{ name: 'B8', ghost: true, booked: false, selected: false, row: 2, column: 8 },
			{ name: 'B9', ghost: false, booked: false, selected: false, row: 2, column: 9 },
			{ name: 'B10', ghost: false, booked: false, selected: false, row: 2, column: 10 },
			{ name: 'B11', ghost: false, booked: false, selected: false, row: 2, column: 11 },
			{ name: 'B12', ghost: false, booked: false, selected: false, row: 2, column: 12 },
			{ name: 'B13', ghost: false, booked: true, selected: false, row: 2, column: 13 },
			{ name: 'B14', ghost: true, booked: false, selected: false, row: 2, column: 14 },
			{ name: 'B15', ghost: false, booked: false, selected: false, row: 2, column: 15 },
			{ name: 'B16', ghost: false, booked: false, selected: false, row: 2, column: 16 },
			{ name: 'B17', ghost: false, booked: true, selected: false, row: 2, column: 17 }
		]
	}
]

function selectSeat(seat) {
	bookedSeats.push(seat.name)
	bookedSeats = bookedSeats
}
</script>

<h1>Movies</h1>
<br />
{bookedSeats}
{#each layout as l}
	<p>
		{#each l.seats as seat}
			<!-- {#if seat.statuss == 'true'}
				{#if seat.statusb == 'false'}
					<button class="seat h-4 w-4"><b>{seat.name}&emsp</b></button>
				{:else}
					<button class="seat h-4 w-4"><i>{seat.name}&emsp</i></button>
				{/if}
			{:else} -->
			<button on:click="{() => selectSeat(seat)}" class="seat m-2 h-10 w-14 bg-gray-700 text-white">
				<b class="">{seat.name}&emsp</b>
			</button>
			<!-- {/if} -->
		{/each}
	</p>
{/each}
