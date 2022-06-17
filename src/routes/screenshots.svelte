<script lang="ts">
let allSuperPages = [
	{ url: 'https://misiki.io', title: 'Misiki Landing' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard Login' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard' },
	{ url: 'https://admin.misiki.io', title: 'Orders' },
	{ url: 'https://admin.misiki.io', title: 'Products' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' }
]
let allAdminPages = [
	{ url: 'https://misiki.io', title: 'Misiki Landing' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard Login' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard' },
	{ url: 'https://admin.misiki.io', title: 'Orders' },
	{ url: 'https://admin.misiki.io', title: 'Products' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' }
]
let allVendorPages = [
	{ url: 'https://misiki.io', title: 'Misiki Landing' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard Login' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard' },
	{ url: 'https://admin.misiki.io', title: 'Orders' },
	{ url: 'https://admin.misiki.io', title: 'Products' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' }
]
let allUserPages = [
	{ url: 'https://misiki.io', title: 'Misiki Landing' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard Login' },
	{ url: 'https://admin.misiki.io', title: 'Dashboard' },
	{ url: 'https://admin.misiki.io', title: 'Orders' },
	{ url: 'https://admin.misiki.io', title: 'Products' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' },
	{ url: 'https://admin.misiki.io', title: '' }
]
</script>

<h1>Super Admin Pages</h1>
{#each allSuperPages as page}
	<a
		rel="external"
		class="block text-primary-500"
		href="{`/screenshot?url=${page.url}&title=${page.title}`}"
		target="_blank">
		{page.title}
	</a>
{/each}

<h1>Admin Pages</h1>
{#each allAdminPages as page}
	<a
		rel="external"
		class="block text-primary-500"
		href="{`/screenshot?url=${page.url}&title=${page.title}`}"
		target="_blank">
		{page.title}
	</a>
{/each}

<h1>Vendor Pages</h1>
{#each allVendorPages as page}
	<a
		rel="external"
		class="block text-primary-500"
		href="{`/screenshot?url=${page.url}&title=${page.title}`}"
		target="_blank">
		{page.title}
	</a>
{/each}

<h1>User Pages</h1>
{#each allUserPages as page}
	<a
		rel="external"
		class="block text-primary-500"
		href="{`/screenshot?uri=${page.url}&title=${page.title}`}"
		target="_blank">
		{page.title}
	</a>
{/each}
