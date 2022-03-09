<script type="text/javascript">
 import { fade } from 'svelte/transition';
 import BlogpostThumbnail from "../../components/BlogpostThumbnail.svelte"
 let blogposts = [
     {title: "How to tie a bowline",
     synopsis: "This is synopsis and it can be of different length",
     image: "/bowline.jpg",
     slug: "how-to-tie-a-bowline",
     tags: ["tag1"]
     },
     {title: "Blogpost1",
     synopsis: "Looking at this blogpost you might learn something new, it is very interesting",
     image: "/ocean2.jpg", slug: "blogpost1",
     tags: ["tag1"]
     },
     {title: "This is test",
     synopsis: "Diam, vulputate ut pharetra sit amet, aliquam id diam maecenas ultricies mi eget mauris pharetra et ultrices neque ornare aenean.",
     image: "/ocean2.jpg",
     slug: "blogpost1",
     tags: ["tag1"]
     },
     {title: "Important blog",
     synopsis: "This is synopsis",
     image: "/ocean2.jpg",
     slug: "blogpost1",
     tags: ["tag4"]
     },
     {title: "Blogpost2",
     synopsis: "This is synopsis",
     image: "/ocean2.jpg",
     slug: "blogpost1",
     tags: ["tag2", "this is a tag"]
     },
 ]

 let q = '';
 const tags = [...new Set(blogposts.map( blogpost => blogpost.tags ).flat())]
 let selectedTags = []

 const filterFunction = (list,q,selectedTags) => {
     console.log(selectedTags)
     if (selectedTags.length == 0 ) {
         return list.filter(el => el.title.toLowerCase().indexOf(q.toLowerCase()) !== -1)
     }
     return list.filter(el =>
         el.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
                         && el.tags.map( tag => selectedTags.indexOf(tag) !== -1 ).indexOf(true) !== -1)
 }

$: list = filterFunction(blogposts,q,selectedTags)

 function selectTag (tag) {
     selectedTags.push(tag)
     selectedTags = selectedTags
 }

 function removeSelectedTag (tag) {
     selectedTags.splice(selectedTags.indexOf(tag),1)
     selectedTags = selectedTags
 }

</script>

<!-- HTML -->
<div class="listContent">
    <div class="listHeader">
        <h2>Blog!</h2>
        <div class="filter-search">
            <input bind:value={q} type="text" class="search">
            {#each tags as tag}
                {#if selectedTags.includes(tag)}
                    <button class="active" on:click={ () => removeSelectedTag(tag)}>{tag}</button>
                {:else}
                    <button class="inactive" on:click={ () => selectTag(tag)}>{tag}</button>
                {/if}
            {/each}
        </div>
    </div>
    <div class="list">
        {#if list == ''}
            <span class="info" in:fade="{{duration: 200}}">No blogpost matches your search</span>
        {/if}
        {#each list as blogpost}
            <div class="listItem">
                <BlogpostThumbnail
                    title={blogpost.title}
                          synopsis={blogpost.synopsis}
                    slug={blogpost.slug}
                          image={blogpost.image}/>
            </div>
        {/each}
    </div>
</div>

<style type="text/css" media="screen">

 .active {
     color: blue;
 }

 .info {
     width: 100%;
     text-align:center;
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
