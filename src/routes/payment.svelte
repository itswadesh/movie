<style>
.div1 {
	width: 100%;
	height: fit-content;
	background-color: aquamarine;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	padding-top: 1em;
}
.div2 {
	/* width: 500px;
	height: 400px; */
	background: white;
	border: 3em;
	border-color: black;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-right: 150px;
	margin-top: 25px;
	margin-bottom: 25px;
}
.div3 {
	width: 500px;
	height: 400px;
	background-color: white;
	border: 3em;
	border-color: black;
	/* margin: 20px; */
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-right: 150px;
	margin-top: 25px;
	margin-bottom: 25px;
}

.div4 {
	width: 250px;
	height: 50px;
	background-color: blue;

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-right: 150px;
	margin-top: 25px;
	margin-bottom: 25px;
}

.div5 {
	width: 250px;
	height: 50px;
	background-color: rgb(157, 230, 243);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-left: 138px;
	margin-right: 150px;
	margin-top: 25px;
	margin-bottom: 25px;
}
</style>

<script context="module">
	import Button from './../lib/ui/Button.svelte';
export async function load({ url, params, fetch }) {
	const movieName = url.searchParams.get('movieName')
	const price = url.searchParams.get('price')
	const bookedSeats = url.searchParams.get('bookedSeats')
	const count = url.searchParams.get('count')
	const total = url.searchParams.get('total')
	return {
		props: {
			movieName,
			price,
			bookedSeats,
			count,
			total
		}
	}
}
</script>

<script>
export let bookedSeats, count, total, movieName
total = +total
let convenient = 22;
let igst = 28;
let tc = total + convenient
let grandTotal = total + convenient*count + igst*total/100
</script>

<h1 class="div1">PAYMENT PAGE</h1>

<!-- <div class="div1">
	<div class="grid grid-flow-row grid-cols-1 sm border-2 border-sky-500 bg-white pl-4 pt-3 pr-4 pb-3 m-4">
		<div>Hi</div>
		<div>Hello</div>
		<div>Namaste</div>
		<div>Movie name is: {movieName}</div>
		<div>Booked seats are: {bookedSeats}</div>
		<div>total number of seats: {count}</div>
		<div>Total ammount: {total}</div>
	</div>

	<div class="grid grid-flow-row grid-cols-1 sm border-2 border-sky-500 bg-white p-4 m-3">
		<div>Total cost for seats = {total}</div>
		<div>Convenient fee = {convenient * count}</div>
		<div>(convenient fee is 22 rupees per seat)</div>
		<div>IGST = {igst}%</div>
		<div>Total ammount to be paid = {grandTotal}</div>
	</div>
</div> -->


<div class="grid grid-cols-5 gap-4 bg-cyan-300 h-screen flex ...">
	<div class="col-span-2 col-start-2 border-2 border-sky-500 bg-white	p-4 m-3 flex-none ...">
		<div>Movie name is: {movieName}</div>
		<div>Booked seats are: {bookedSeats}</div>
		<div>total number of seats: {count}</div>
		<div>Total ammount: {total}</div>
	</div>
	<div class="border-2 border-sky-500 bg-white p-4 m-3 flex-none ...">
		<div>Total cost for seats = {total}</div>
		<div>Convenient fee = {convenient * count}</div>
		<div>(convenient fee is 22 rupees per seat)</div>
		<div>IGST = {igst}%</div>
		<div>Total ammount to be paid = {grandTotal}</div>
	</div>
	<div class="col-span-2 col-start-2 p-2 ml-4 flex-none ...">
		<p><b>CONTACT Details:</b></p>
		<input type="number" placeholder="Mobile Number">
		<input type="text" placeholder="Email Address">
	</div>
	<div class="col-start-4 pt-2 flex-auto ...">
		<b>Promotion code</b>
		<input type="text" placeholder="write promotion code here">
		<button class="bg-yellow-500 border-2 border-sky-500 p-2">Apply</button>
	</div>
	<div>
		<div>
			<button>Continue</button>
		</div>
		<div>
			<button>Cancel</button>
		</div>
	</div>
</div>