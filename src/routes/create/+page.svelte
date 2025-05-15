<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageProps } from './$types';
	let count = $state(0);
	let { form }: PageProps = $props();

	let loading = $state(false);

	function onsubmit() {
		count++;
	}
</script>

<main class="mx-auto mt-4 w-1/2 max-w-md">
	<form class="flex w-full flex-col items-start gap-4" method="POST" action="?/create" use:enhance>
		<div class="w-full">
			<label for="Title">Title</label>
			<input
				type="text"
				name="title"
				class="b h-8 w-full rounded-md border-2 border-white bg-transparent"
				required
			/>
			{#if form?.missing}
				<p class="error">This field is required</p>
			{/if}
		</div>
		<div class="w-full">
			<label for="content">content</label>
			<textarea
				name="content"
				id="content"
				class="w-full rounded-md border-2 border-white bg-transparent"
			></textarea>
		</div>
		<div class="w-full">
			<label for="dueDate">duedate</label>
			<input
				type="date"
				name="dueDate"
				id="dueDate"
				class="w-full rounded-md border-2 border-white bg-transparent"
			/>
			{#if form?.missing}
				<p class="error">This field is required</p>
			{/if}
		</div>
		<button type="submit" class="h-8 w-full rounded-md bg-white text-black" {onsubmit}>
			{#if loading}
				<p>Loading</p>
			{/if}
			submit {count === 0 ? '' : count}
		</button>
	</form>
	{#if form?.success}
		<p>Added todo! 🥳</p>
	{/if}
</main>
