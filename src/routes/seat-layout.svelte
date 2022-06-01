<style>
* {
	box-sizing: border-box;
}

.seat {
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}

.box {
	width: 1235px;
	border: 2px solid #aaa;
	border-radius: 2px;
	box-shadow: 1px 11px 10px rgb(235, 230, 230);
	padding: 2em;
	margin: 10px 0 4em 10px;
	background-color: white;
	transform: skew(15deg);
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

.rowNames {
	margin-right: 20px;
}

/* .trapezoid {
	border-bottom: 50px solid rgba(252, 246, 246, 0.85);
	border-left: 25px solid cyan;
	border-right: 25px solid cyan;
	transform: rotate(180deg);
	width: 1068px;
	background-color: cyan;
	margin-top: 10px;
} */
</style>

<script context="module">
import { KQL_ShowLayout } from '$lib/graphql/_kitql/graphqlStores'

export async function load({ url, params, fetch }) {
	const movieName = url.searchParams.get('movieName')
	const movieTime = url.searchParams.get('movieTime')
	// await KQL_ShowLayout.query({ variables: { movie= movieName } })
	return {
		props: {
			movieName,
			movieTime
		}
	}
}
</script>

<script>
export let movieName, movieTime
let total = 0
let bookedSeats = []
let layout = [
	{
		catagory: 'NORMAL',
		cp: 140,
		divs: [
			{
				row: 1,
				rowName: 'A',
				seats: [
					{ name: 'A1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 140 },
					{ name: 'A2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 140 },
					{ name: 'A3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 140 },
					{ name: 'A4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 140 },
					{ name: 'A5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 140 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
					{ name: 'A6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 140 },
					{ name: 'A7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 140 },
					{ name: 'A8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 140 },
					{ name: 'A9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 140 },
					{
						name: 'A10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 140
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
					{
						name: 'A11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 140
					},
					{
						name: 'A12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 140
					},
					{
						name: 'A13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 140
					},
					{
						name: 'A14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 140
					},
					{ name: 'A15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 140 }
				]
			},

			{
				row: 2,
				rowName: 'B',
				seats: [
					{ name: 'B1', ghost: false, booked: false, selected: false, row: 2, column: 1, sp: 140 },
					{ name: 'B2', ghost: false, booked: false, selected: false, row: 2, column: 2, sp: 140 },
					{ name: 'B3', ghost: false, booked: false, selected: false, row: 2, column: 3, sp: 140 },
					{ name: 'B4', ghost: false, booked: false, selected: false, row: 2, column: 4, sp: 140 },
					{ name: 'B5', ghost: false, booked: false, selected: false, row: 2, column: 5, sp: 140 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
					{ name: 'B6', ghost: false, booked: false, selected: false, row: 2, column: 6, sp: 140 },
					{ name: 'B7', ghost: false, booked: false, selected: false, row: 2, column: 7, sp: 140 },
					{ name: 'B8', ghost: false, booked: false, selected: false, row: 2, column: 8, sp: 140 },
					{ name: 'B9', ghost: false, booked: false, selected: false, row: 2, column: 9, sp: 140 },
					{
						name: 'B10',
						ghost: false,
						booked: false,
						selected: false,
						row: 2,
						column: 10,
						sp: 140
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
					{
						name: 'B11',
						ghost: false,
						booked: false,
						selected: false,
						row: 2,
						column: 11,
						sp: 140
					},
					{
						name: 'B12',
						ghost: false,
						booked: false,
						selected: false,
						row: 2,
						column: 12,
						sp: 140
					},
					{ name: 'B13', ghost: false, booked: true, selected: false, row: 2, column: 13, sp: 140 },
					{
						name: 'B14',
						ghost: false,
						booked: false,
						selected: false,
						row: 2,
						column: 14,
						sp: 140
					},
					{ name: 'B15', ghost: false, booked: false, selected: false, row: 2, column: 15, sp: 140 }
				]
			}
		]
	},

	{
		catagory: 'EXECUTIVE',
		cp: 150,
		divs: [
			{
				row: 3,
				rowName: 'C',
				seats: [
					{ name: 'C1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
					{ name: 'C2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
					{ name: 'C3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
					{ name: 'C4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
					{ name: 'C5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{ name: 'C6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
					{ name: 'C7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
					{ name: 'C8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
					{ name: 'C9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
					{
						name: 'C10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 150
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{
						name: 'C11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 150
					},
					{
						name: 'C12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 150
					},
					{
						name: 'C13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 150
					},
					{
						name: 'C14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 150
					},
					{ name: 'C15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
				]
			},

			{
				row: 4,
				rowName: 'D',
				seats: [
					{ name: 'D1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
					{ name: 'D2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
					{ name: 'D3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
					{ name: 'D4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
					{ name: 'D5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{ name: 'D6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
					{ name: 'D7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
					{ name: 'D8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
					{ name: 'D9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
					{
						name: 'D10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 150
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{
						name: 'D11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 150
					},
					{
						name: 'D12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 150
					},
					{
						name: 'D13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 150
					},
					{
						name: 'D14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 150
					},
					{ name: 'D15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
				]
			},

			{
				row: 5,
				rowName: 'E',
				seats: [
					{ name: 'E1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
					{ name: 'E2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
					{ name: 'E3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
					{ name: 'E4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
					{ name: 'E5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{ name: 'E6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
					{ name: 'E7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
					{ name: 'E8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
					{ name: 'E9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
					{
						name: 'E10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 150
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
					{
						name: 'E11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 150
					},
					{
						name: 'E12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 150
					},
					{
						name: 'E13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 150
					},
					{
						name: 'E14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 150
					},
					{ name: 'E15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
				]
			}
		]
	},

	{
		catagory: 'PREMIUM',
		cp: 160,
		divs: [
			{
				row: 6,
				rowName: 'F',
				seats: [
					{ name: 'F1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 160 },
					{ name: 'F2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 160 },
					{ name: 'F3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 160 },
					{ name: 'F4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 160 },
					{ name: 'F5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 160 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
					{ name: 'F6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 160 },
					{ name: 'F7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 160 },
					{ name: 'F8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 160 },
					{ name: 'F9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 160 },
					{
						name: 'F10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 160
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
					{
						name: 'F11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 160
					},
					{
						name: 'F12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 160
					},
					{
						name: 'F13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 160
					},
					{
						name: 'F14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 160
					},
					{ name: 'F15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 160 }
				]
			},

			{
				row: 7,
				rowName: 'G',
				seats: [
					{ name: 'G1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 160 },
					{ name: 'G2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 160 },
					{ name: 'G3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 160 },
					{ name: 'G4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 160 },
					{ name: 'G5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 160 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
					{ name: 'G6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 160 },
					{ name: 'G7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 160 },
					{ name: 'G8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 160 },
					{ name: 'G9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 160 },
					{
						name: 'G10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 160
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
					{
						name: 'G11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 160
					},
					{
						name: 'G12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 160
					},
					{
						name: 'G13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 160
					},
					{
						name: 'G14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 160
					},
					{ name: 'G15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 160 }
				]
			}
		]
	},

	{
		catagory: 'VIP',
		cp: 400,
		divs: [
			{
				row: 8,
				rowName: 'H',
				seats: [
					{ name: 'H1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 400 },
					{ name: 'H2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 400 },
					{ name: 'H3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 400 },
					{ name: 'H4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 400 },
					{ name: 'H5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 400 },
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 400 },
					{ name: 'H6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 400 },
					{ name: 'H7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 400 },
					{ name: 'H8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 400 },
					{ name: 'H9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 400 },
					{
						name: 'H10',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 10,
						sp: 400
					},
					{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 400 },
					{
						name: 'H11',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 11,
						sp: 400
					},
					{
						name: 'H12',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 12,
						sp: 400
					},
					{
						name: 'H13',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 13,
						sp: 400
					},
					{
						name: 'H14',
						ghost: false,
						booked: false,
						selected: false,
						row: 1,
						column: 14,
						sp: 400
					},
					{ name: 'H15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 400 }
				]
			}
		]
	}
	// {
	// 	row: 1,
	// 	seats: [
	// 		{ name: 'A1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 140 },
	// 		{ name: 'A2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 140 },
	// 		{ name: 'A3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 140 },
	// 		{ name: 'A4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 140 },
	// 		{ name: 'A5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 140 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
	// 		{ name: 'A6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 140 },
	// 		{ name: 'A7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 140 },
	// 		{ name: 'A8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 140 },
	// 		{ name: 'A9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 140 },
	// 		{ name: 'A10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 140 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
	// 		{ name: 'A11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 140 },
	// 		{ name: 'A12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 140 },
	// 		{ name: 'A13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 140 },
	// 		{ name: 'A14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 140 },
	// 		{ name: 'A15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 140 }
	// 	]
	// },

	// {
	// 	row: 2,
	// 	seats: [
	// 		{ name: 'B1', ghost: false, booked: false, selected: false, row: 2, column: 1, sp: 140 },
	// 		{ name: 'B2', ghost: false, booked: false, selected: false, row: 2, column: 2, sp: 140 },
	// 		{ name: 'B3', ghost: false, booked: false, selected: false, row: 2, column: 3, sp: 140 },
	// 		{ name: 'B4', ghost: false, booked: false, selected: false, row: 2, column: 4, sp: 140 },
	// 		{ name: 'B5', ghost: false, booked: false, selected: false, row: 2, column: 5, sp: 140 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
	// 		{ name: 'B6', ghost: false, booked: false, selected: false, row: 2, column: 6, sp: 140 },
	// 		{ name: 'B7', ghost: false, booked: false, selected: false, row: 2, column: 7, sp: 140 },
	// 		{ name: 'B8', ghost: false, booked: false, selected: false, row: 2, column: 8, sp: 140 },
	// 		{ name: 'B9', ghost: false, booked: false, selected: false, row: 2, column: 9, sp: 140 },
	// 		{ name: 'B10', ghost: false, booked: false, selected: false, row: 2, column: 10, sp: 140 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 140 },
	// 		{ name: 'B11', ghost: false, booked: false, selected: false, row: 2, column: 11, sp: 140 },
	// 		{ name: 'B12', ghost: false, booked: false, selected: false, row: 2, column: 12, sp: 140 },
	// 		{ name: 'B13', ghost: false, booked: true, selected: false, row: 2, column: 13, sp: 140 },
	// 		{ name: 'B14', ghost: false, booked: false, selected: false, row: 2, column: 14, sp: 140 },
	// 		{ name: 'B15', ghost: false, booked: false, selected: false, row: 2, column: 15, sp: 140 }
	// 	]
	// },

	// {
	// 	row: 3,
	// 	seats: [
	// 		{ name: 'C1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
	// 		{ name: 'C2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
	// 		{ name: 'C3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
	// 		{ name: 'C4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
	// 		{ name: 'C5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'C6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
	// 		{ name: 'C7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
	// 		{ name: 'C8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
	// 		{ name: 'C9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
	// 		{ name: 'C10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'C11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 150 },
	// 		{ name: 'C12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 150 },
	// 		{ name: 'C13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 150 },
	// 		{ name: 'C14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 150 },
	// 		{ name: 'C15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
	// 	]
	// },

	// {
	// 	row: 4,
	// 	seats: [
	// 		{ name: 'D1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
	// 		{ name: 'D2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
	// 		{ name: 'D3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
	// 		{ name: 'D4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
	// 		{ name: 'D5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'D6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
	// 		{ name: 'D7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
	// 		{ name: 'D8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
	// 		{ name: 'D9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
	// 		{ name: 'D10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'D11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 150 },
	// 		{ name: 'D12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 150 },
	// 		{ name: 'D13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 150 },
	// 		{ name: 'D14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 150 },
	// 		{ name: 'D15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
	// 	]
	// },

	// {
	// 	row: 5,
	// 	seats: [
	// 		{ name: 'E1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 150 },
	// 		{ name: 'E2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 150 },
	// 		{ name: 'E3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 150 },
	// 		{ name: 'E4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 150 },
	// 		{ name: 'E5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'E6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 150 },
	// 		{ name: 'E7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 150 },
	// 		{ name: 'E8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 150 },
	// 		{ name: 'E9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 150 },
	// 		{ name: 'E10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 150 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 150 },
	// 		{ name: 'E11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 150 },
	// 		{ name: 'E12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 150 },
	// 		{ name: 'E13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 150 },
	// 		{ name: 'E14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 150 },
	// 		{ name: 'E15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 150 }
	// 	]
	// },

	// {
	// 	row: 6,
	// 	seats: [
	// 		{ name: 'F1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 160 },
	// 		{ name: 'F2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 160 },
	// 		{ name: 'F3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 160 },
	// 		{ name: 'F4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 160 },
	// 		{ name: 'F5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 160 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
	// 		{ name: 'F6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 160 },
	// 		{ name: 'F7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 160 },
	// 		{ name: 'F8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 160 },
	// 		{ name: 'F9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 160 },
	// 		{ name: 'F10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 160 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
	// 		{ name: 'F11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 160 },
	// 		{ name: 'F12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 160 },
	// 		{ name: 'F13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 160 },
	// 		{ name: 'F14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 160 },
	// 		{ name: 'F15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 160 }
	// 	]
	// },

	// {
	// 	row: 7,
	// 	seats: [
	// 		{ name: 'G1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 160 },
	// 		{ name: 'G2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 160 },
	// 		{ name: 'G3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 160 },
	// 		{ name: 'G4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 160 },
	// 		{ name: 'G5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 160 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
	// 		{ name: 'G6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 160 },
	// 		{ name: 'G7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 160 },
	// 		{ name: 'G8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 160 },
	// 		{ name: 'G9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 160 },
	// 		{ name: 'G10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 160 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 160 },
	// 		{ name: 'G11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 160 },
	// 		{ name: 'G12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 160 },
	// 		{ name: 'G13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 160 },
	// 		{ name: 'G14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 160 },
	// 		{ name: 'G15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 160 }
	// 	]
	// },

	// {
	// 	row: 8,
	// 	seats: [
	// 		{ name: 'H1', ghost: false, booked: false, selected: false, row: 1, column: 1, sp: 400 },
	// 		{ name: 'H2', ghost: false, booked: false, selected: false, row: 1, column: 2, sp: 400 },
	// 		{ name: 'H3', ghost: false, booked: false, selected: false, row: 1, column: 3, sp: 400 },
	// 		{ name: 'H4', ghost: false, booked: false, selected: false, row: 1, column: 4, sp: 400 },
	// 		{ name: 'H5', ghost: false, booked: false, selected: false, row: 1, column: 5, sp: 400 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 400 },
	// 		{ name: 'H6', ghost: false, booked: false, selected: false, row: 1, column: 6, sp: 400 },
	// 		{ name: 'H7', ghost: false, booked: false, selected: false, row: 1, column: 7, sp: 400 },
	// 		{ name: 'H8', ghost: false, booked: false, selected: false, row: 1, column: 8, sp: 400 },
	// 		{ name: 'H9', ghost: false, booked: false, selected: false, row: 1, column: 9, sp: 400 },
	// 		{ name: 'H10', ghost: false, booked: false, selected: false, row: 1, column: 10, sp: 400 },
	// 		{ name: '...', ghost: true, booked: false, selected: false, row: 2, column: 16, sp: 400 },
	// 		{ name: 'H11', ghost: false, booked: false, selected: false, row: 1, column: 11, sp: 400 },
	// 		{ name: 'H12', ghost: false, booked: false, selected: false, row: 1, column: 12, sp: 400 },
	// 		{ name: 'H13', ghost: false, booked: false, selected: false, row: 1, column: 13, sp: 400 },
	// 		{ name: 'H14', ghost: false, booked: false, selected: false, row: 1, column: 14, sp: 400 },
	// 		{ name: 'H15', ghost: false, booked: false, selected: false, row: 1, column: 15, sp: 400 }
	// 	]
	// }
]

function selectSeat(seat) {
	if (seat.selected) {
		seat.selected = false
		bookedSeats.splice(bookedSeats.indexOf(seat.name), 1)
		bookedSeats = bookedSeats
		total = total - seat.sp
		total = total
	} else {
		seat.selected = true
		bookedSeats.push(seat.name)
		bookedSeats = bookedSeats
		total = total + seat.sp
		total = total
	}
}

// function calculateTotal(sp) {
// 	total = total + sp
// 	total = total
// 	return total
// }
</script>

<div class="nameDetail">
	<p>
		<b> {movieName} === {movieTime} </b>
	</p>
</div>

<div class="theatre">
	<div class="box"></div>
	<!-- <div class="trapezoid "></div> -->

	<div class="arrangement">
		{#each layout as l}
			<p>
				{l.catagory} :- ₹{l.cp}____________________________________________________________________________________________________________________________________________________
			</p>
			<p>
				{#each l.divs as catagory}
					<p>
						<b class="rowNames">{catagory.rowName} </b>
						{#each catagory.seats as seat}
							{#if seat.ghost == false}
								{#if seat.booked == false}
									<button
										on:click="{() => selectSeat(seat)}"
										class="seat m-2 h-10 w-14 bg-gray-700 text-white {bookedSeats.includes(
											seat.name
										)
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
			</p>
		{/each}
	</div>
</div>

<!-- {#each l.seats as seat}
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
 -->

<div>
	<!-- {#each bookedSeats as seat}
		<p>{calculateTotal(seat.sp)}</p>
	{/each} -->

	<p class="details">
		No. of tickets booked : {bookedSeats.length} <br />
	</p>
	<p class="details">
		{total}
	</p>
	<p class="details">
		Selected seats : {bookedSeats}
	</p>
</div>

<div class="confirmContainer">
	<div class="confirm">
		{#if bookedSeats.length > 0}
			<a
				href="{`/payment?movieName=${movieName}&bookedSeats=${bookedSeats}&count=${bookedSeats.length}&total=${total}&movieTime=${movieTime}`}"
				>Confirm tickets</a>
		{:else}
			<p>select any seat</p>
		{/if}
	</div>
</div>
