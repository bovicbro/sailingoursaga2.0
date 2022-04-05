<script type="text/javascript" lang="ts">
	import { fade } from 'svelte/transition';
	import BlogpostThumbnail from '../../components/BlogpostThumbnail.svelte';

	type Blogpost = {
		title: string;
		synopsis: string;
		image: string;
		slug: string;
		tags: string[];
	};

 // Mock data for blogposts
	let blogposts: Blogpost[] = [
		{title: "How to tie a bowline",
		 synopsis: "This is synopsis and it can be of different length",
		 image: "/bowline.jpg",
		 slug: "how-to-tie-a-bowline",
		 tags: ["Sailing"]
		 },
		 {title: "Blogpost1",
		 synopsis: "Looking at this blogpost you might learn something new, it is very interesting",
		 image: "/ocean2.jpg", slug: "blogpost1",
		 tags: ["Boat projects"]
		 },
		 {title: "This is test",
		 synopsis: "Diam, vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean.",
		 image: "/ocean2.jpg",
		 slug: "blogpost1",
		 tags: ["Destinations"]
		 },
		 {title: "Important blog",
		 synopsis: "This is synopsis",
		 image: "/ocean2.jpg",
		 slug: "blogpost1",
		 tags: ["Boat projects"]
		 },
		 {title: "Blogpost2",
		 synopsis: "This is synopsis",
		 image: "/ocean2.jpg",
		 slug: "blogpost1",
		 tags: ["Destinations", "Boat projects"]
		 },
	];

	let q: string = '';
	const tags: string[] = [...new Set(blogposts.map((blogpost) => blogpost.tags).flat())];
	let selectedTags: string[] = [];

	const filterFunction = (list: Blogpost[], q: string, selectedTags: string[]): Blogpost[] => {
		console.log(selectedTags);
		if (selectedTags.length == 0) {
			return list.filter((el) => el.title.toLowerCase().indexOf(q.toLowerCase()) !== -1);
		}
		return list.filter(
			(el) =>
				el.title.toLowerCase().indexOf(q.toLowerCase()) !== -1 &&
				el.tags.map((tag) => selectedTags.indexOf(tag) !== -1).indexOf(true) !== -1
		);
	};

	function selectTag(tag: string): void {
		selectedTags.push(tag);
		selectedTags = selectedTags;
	}

	function removeSelectedTag(tag: string): void {
		selectedTags.splice(selectedTags.indexOf(tag), 1);
		selectedTags = selectedTags;
	}

	$: list = filterFunction(blogposts, q, selectedTags);

</script>

<!-- HTML -->
<div class="listContent">
	<div class="listHeader">
		<h2>Welcome to our blog!</h2>
		<div class="filter-search">
			<ul>
				<li>
					<span>Search: </span>
					<input bind:value={q} type="text" class="search" />
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
		{#if list == null}
			<span class="info" in:fade={{ duration: 200 }}>No blogposts yet!</span>
		{/if}
		{#each list as blogpost}
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

	@media (max-width: 500px) {
		.listHeader {
			width: 80vw;
		}
	}

	h2 {
		width: 100%;
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
</style>
