<style>
    .div1 {
        width: 100%;
        height: fit-content;
        background-color: aquamarine;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    .div2 {
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
</style>


<script context="module">
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
    export let movieName, price, bookedSeats, count, total
</script>

<h1 class="div1">PAYMENT PAGE</h1>

<div class="div1 grid grid-cols-1 grid-flow-row">
    <div class="div2">
        <h3 class="mx-16">Details of the movie:</h3>
        <!-- <p>Movie Name: {movieName}</p> -->
        <p>Number of tickets booked are: {count}</p>
        <p>booked seat numbers are: {bookedSeats}</p>
        <p>Total amount to be paid is ₹ {total}</p>
        <!-- <p>Mobile number: +91 98765 43210</p> -->
    </div>
    <div class="div3">
        <h3 class="mx-5">select payment method :</h3>
        <p class="mx-5">Net Banking</p>
        <p class="mx-5">Credit card</p>
        <p class="mx-5">UPI apps</p>
    </div>
    <div class="div4">
        <button>conform to payment</button>
    </div>
</div>
