<script context="module" lang="ts">
export async function load({ url, params, fetch, session, context }) {
	let uri = url.searchParams.get('url')
	let title = url.searchParams.get('title')
	return {
		props: {
			uri,
			title
		}
	}
}
</script>

<script>
import { onMount } from 'svelte'
import html2canvas from 'html2canvas'
import { delay } from '$lib/util'
export let uri, title
//return a promise that resolves with a File instance
function urltoFile(uri, filename, mimeType) {
	mimeType = mimeType || (uri.match(/^data:([^;]+);/) || '')[1]
	return fetch(url)
		.then(function (res) {
			return res.arrayBuffer()
		})
		.then(function (buf) {
			return new File([buf], filename, { type: mimeType })
		})
}
function captureImage() {
	html2canvas(document.querySelector('#render-area')).then((canvas) => {
		const dataURL = canvas.toDataURL('image/png', 1.0)
		urltoFile(dataURL, title).then(function (file) {
			let a = document.createElement('a')
			a.download = file.name
			a.href = canvas.toDataURL('image/png')
			a.click()
		})
	})
}
onMount(async () => {
	await delay(5000)
	// captureImage()
})
</script>

<!-- <button on:click="{captureImage}">Capture</button> -->
<div
	id="render-area"
	class="rounded bg-primary-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-24
	shadow-2xl"
	style="width:1850px;height:800px;">
	<div class="flex justify-center pt-12 text-5xl font-bold text-white">{title}</div>
	<div class="mt-12 h-full w-full rounded-xl bg-white shadow-2xl" style="width: 105%;">
		<div class="flex border-b py-3 pl-4">
			<div class="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
			<div class="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
			<div class="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
		</div>
		<div class="overflow-hidden">
			<iframe
				src="{uri}"
				scrolling="no"
				style=" width: 100%; height: 780px;  overflow: hidden;"
				title="{title}"></iframe>
		</div>
	</div>
</div>
