<script type="text/javascript" lang="ts">
	import BlogpostThumbnail from '../../components/BlogpostThumbnail.svelte';
	import { blogposts } from './mockData';
	import { filterBlogposts } from './filter';

	// initiates state
	let query: string = '';
	let selectedTags: string[] = [];
	const tags: string[] = [...new Set(blogposts.map((blogpost) => blogpost.tags).flat())];

	$: filteredBlogposts = filterBlogposts(blogposts, query, selectedTags);

	function selectTag(tag: string): void {
		selectedTags.push(tag);
		// Assigning to trigger update
		selectedTags = selectedTags;
	}

	function removeSelectedTag(tag: string): void {
		selectedTags.splice(selectedTags.indexOf(tag), 1);
		// Assigning to trigger update
		selectedTags = selectedTags;
	}

</script>

<!-- HTML -->
<div class="listContent">
	<div class="listHeader">
		<h2>Welcome to our blog!</h2>
		<div class="filter-search">
			<ul>
				<li>
					<span>Search: </span>
					<input bind:value={query} type="text" class="search" />
				</li>
				<li>
					<span>Topics: </span>
					{#each tags as tag}
						{#if selectedTags.includes(tag)}
							<button class="tag active" on:click={() => removeSelectedTag(tag)}>{tag}</button>
						{:else}
							<button class="tag inactive" on:click={() => selectTag(tag)}>{tag}</button>
						{/if}
					{/each}
				</li>
			</ul>
		</div>
	</div>
	<div class="list">
		{#if filteredBlogposts.length == 0}
			<span class="info">No blogposts yet!</span>
		{/if}
		{#each filteredBlogposts as blogpost}
			<div class="listItem">
				<BlogpostThumbnail
					title={blogpost.title}
					synopsis={blogpost.synopsis}
					slug={blogpost.slug}
					image={blogpost.image}
				/>
			</div>
		{/each}
	</div>
</div>

<style type="text/css" media="screen">
	input {
		padding: 0.2em;
		font-size: 18px;
	}

	ul {
		padding: 0;
		margin: 0;
	}

	li {
		list-style: none;
		margin: 1em 0;
	}

	h2 {
		width: 100%;
	}

	.tag {
		margin: 0.2em;
		font-size: 18px;
		padding: 0.3em;
		border-radius: 4px;
	}

	.active {
		border-color: #bbb;
		background-color: #bbb;
	}

	.info {
		width: 100%;
		text-align: center;
		position: absolute;
	}

	.listHeader {
		width: 50vw;
		max-width: 30em;
		margin: 2em auto;
	}

	.list {
		display: flex;
		margin: 0 auto;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
	}

	.listContent {
		min-height: 100vh;
		max-width: 50em;
		margin: auto;
	}

	@media (max-width: 500px) {
		.listHeader {
			width: 80vw;
		}
	}
</style>
