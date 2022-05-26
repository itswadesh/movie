<script>
let row = 3,
	col = 20,
	seatCategory = { active: true, name: '', position: 0, screen: null, rowArray: [] },
	alphabetArray = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z'
	]
function changeRowName(rowName, rowIndex) {
	seatCategory.rowArray[rowIndex].rowName = rowName
	seatCategory.rowArray[rowIndex].objSeat = []
	for (let j = 0; j < col; j++) {
		seatCategory.rowArray[rowIndex].objSeat[j] = {
			ghost: false,
			seatNo: seatCategory.rowArray[rowIndex].rowName + '' + (j + 1)
		}
	}
}
function generateSeats(row, col) {
	for (let i = 0; i < row; i++) {
		seatCategory.rowArray.push({ row: i + 1, rowName: alphabetArray[i], objSeat: [] })
		for (let j = 0; j < col; j++) {
			seatCategory.rowArray[i].objSeat[j] = {
				col: j + 1,
				ghost: false,
				seatNo: seatCategory.rowArray[i].rowName + '' + (j + 1)
			}
		}
	}
}
function toggleGhostSeatStatus(rowIndex, colIndex, col) {
	seatCategory.rowArray[rowIndex].objSeat[colIndex].ghost =
		!seatCategory.rowArray[rowIndex].objSeat[colIndex].ghost
	seatCategory.rowArray[rowIndex].objSeat[colIndex + 1] =
		seatCategory.rowArray[rowIndex].objSeat[colIndex]
}
</script>

<input type="text" bind:value="{row}" placeholder="row" />
<input type="text" bind:value="{col}" placeholder="col" />
<button on:click="{() => generateSeats(row, col)}">Generate Seats</button>
<div></div>
<div>
	<!-- <checkbox bind:checked="{seatCategory.active}"></checkbox> -->
	<input type="text" bind:value="{seatCategory.name}" placeholder="Name" />
	<input type="number" bind:value="{seatCategory.position}" placeholder="Position" />
</div>
<table>
	{#each seatCategory.rowArray as row, rowIndex}
		<tr>
			<td>
				<input
					type="text"
					bind:value="{row.rowName}"
					on:input="{() => changeRowName(row.rowName, rowIndex)}" /></td>
			{#each row.objSeat as col, colIndex}
				<td>
					<button
						type="button"
						on:click="{() => toggleGhostSeatStatus(rowIndex, colIndex, col)}"
						class="m-2 bg-gray-800 p-2 text-white {col.ghost ? 'bg-gray-100 text-gray-900' : ''}">
						{col.seatNo}
					</button>
				</td>
			{/each}
		</tr>
	{/each}
</table>

<pre>
    {JSON.stringify(seatCategory, null, 2)}
</pre>
