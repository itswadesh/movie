<script>
export let size = 'default',
	color = 'none',
	full = false,
	rounded = false
</script>

<button
	rounded="{rounded}"
	on:click
	class="py-4 px-4 text-{size}
  {color} text-red-500 hover:bg-purple-600"
	class:rounded
	class:font-bold="{size == 'xl'}"
	class:w-full="{full}">
	<slot />
</button>
