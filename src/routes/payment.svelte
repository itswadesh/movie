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
/* .div2 {
	width: 500px;
	height: 400px;
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
	margin: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-left: 250px;
	margin-right: 150px;
	margin-top: 25px;
	margin-bottom: 25px;
} */

/* .div4 {
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

.hr {
	color: black;
} */
</style>

<script context="module">
import Button from './../lib/ui/Button.svelte'
export async function load({ url, params, fetch }) {
	const movieName = url.searchParams.get('movieName')
	const price = url.searchParams.get('price')
	const bookedSeats = url.searchParams.get('bookedSeats')
	const count = url.searchParams.get('count')
	const total = url.searchParams.get('total')
	const movieTime = url.searchParams.get('movieTime')
	return {
		props: {
			movieName,
			price,
			bookedSeats,
			count,
			total,
			movieTime
		}
	}
}
</script>

<script>
// import { identity } from 'svelte/internal'

export let bookedSeats, count, total, movieName, movieTime
let yes = false
total = +total
let convenient = 22
let igst = 28
let limit = 0
// let tc = total + convenient
let grandTotalBefore = total + convenient * count + (igst * total) / 100
let donation = 0
let discount = 10
// let promo = 'xyz'
let grandTotalAfter = grandTotalBefore

//

import { promo, greeting } from './stores.js'
// var x = document.getElementById('myText').value
function promoCheck(promo) {
	// console.log('Hello' )
	// console.log(promo)
	if (limit == 0) {
		if (promo == 'xyz') {
			grandTotalAfter = grandTotalAfter - (grandTotalAfter * discount) / 100
			grandTotalAfter = grandTotalAfter
			limit = 1
		}
	}
}
</script>

<h1 class="div1">PAYMENT PAGE</h1>

<!-- <div class="h-screen min-w-fit bg-cyan-400">
	<div
		class="sm m-4 grid grid-flow-row grid-cols-1 border-2 border-sky-500 bg-white pl-4 pt-3 pr-4 pb-3">
		<div>Hi</div>
		<div>Hello</div>
		<div>Namaste</div>
		<div>Movie name is: {movieName}</div>
		<div>Booked seats are: {bookedSeats}</div>
		<div>total number of seats: {count}</div>
		<div>Total ammount: {total}</div>
	</div>

	<div class="sm m-3 grid grid-flow-row grid-cols-1 border-2 border-sky-500 bg-white p-4">
		<div>Total cost for seats = {total}</div>
		<div>Convenient fee = {convenient * count}</div>
		<div>(convenient fee is 22 rupees per seat)</div>
		<div>IGST = {igst}%</div>
		<div>Total ammount to be paid = {grandTotal}</div>
	</div>
</div> -->

<div class="h-screen bg-cyan-100">
	<div class="grid grid-flow-row grid-cols-5 bg-cyan-100">
		<div class="col-span-2 col-start-2 m-2 border-2 border-black p-2">
			<div>Movie name is: {movieName}</div>
			<div>Booked seats are: {bookedSeats}</div>
			<div>total number of seats: {count}</div>
			<div>Total ammount: {total}</div>
			<div>Movie time slot: {movieTime}</div>
		</div>
		<div class=" col-start-4 m-2 p-2 ">
			<div><b>Total cost for seats</b> = {total}</div>
			<div><b>Convenient fee</b> = {convenient * count}</div>
			<div>(convenient fee is {convenient}rupees per seat)</div>
			<div><b>IGST</b> = {igst}%</div>
			<hr class="m-2" />
			<div><b>Total ammount to be paid</b> = {grandTotalBefore}</div>
			<hr class="m-2" />
		</div>

		<div class="col-span-2 col-start-2 m-2 p-2">
			<div>
				<p><b>Contact details:</b></p>
				<input type="number" placeholder="Mobile number" />
				<input type="text" placeholder="E-mail" />
			</div>
		</div>

		<div class=" col-start-4 m-1 p-1">
			<div class="mt-2">
				<hr class="m-2" />
				<p><b>Promotion code</b></p>
				<input bind:value="{$promo}" />
				<button on:click="{() => promoCheck($promo)}" class="m-0 border-2 bg-amber-600 p-2"
					>Apply</button>
				<hr class="m-2" />
			</div>
		</div>
		<div class="col-start-4 m-2 p-2">
			<div>
				<hr class="m-2" />
				<p><b>Donation for Covid Relief Fund: </b></p>
				<input type="checkbox" bind:checked="{yes}" /> I want to donate ₹10
				<hr class="m-2" />
			</div>
		</div>
		<div class="col-start-4 m-2 p-2">
			<hr class="m-2" />
			<!-- <div>
				<p><b>Grand Total: {grandTotalAfter}</b></p>
			</div> -->

			{#if yes}
				<div>
					<p><b>Grand Total: {grandTotalAfter + 10}</b></p>
				</div>
			{:else}
				<div>
					<p><b>Grand Total: {grandTotalAfter}</b></p>
				</div>
			{/if}
			<hr class="m-2" />
		</div>
		<div class="col-start-4">
			<div>
				<button class="m-2 bg-yellow-300 p-2"
					><b>Continue &emsp</b> <b class="text-green-500">✔</b></button>
				<a
					href="{`/seat-layout?movieName=${movieName}&bookedSeats=${bookedSeats}&count=${bookedSeats.length}&total=${total}&movieTime=${movieTime}`}"
					class="m-2 bg-red-100 p-2"><b>Cancel &emsp </b> <b>❌</b></a>
			</div>
		</div>
	</div>
</div>
