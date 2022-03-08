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
     tags: ["tag1"]
     },
     {title: "Blogpost2",
     synopsis: "This is synopsis",
     image: "/ocean2.jpg",
     slug: "blogpost1",
     tags: ["tag1"]
     },
 ]

let q = '';

 const filterFunction = (list,q) => {
     return list.filter(el => el.title.toLowerCase().indexOf(q.toLowerCase()) !== -1)
 }

$: list = filterFunction(blogposts,q)

</script>
<div class="listContent">
    <div class="listHeader">
        <h2>Blog!</h2>
        <div class="filter-search">
            <input bind:value={q} type="text" class="search">
        </div>
    </div>
    <div class="list">
        {#if list == ''}
            <span class="info" in:fade="{{duration: 200}}">No blogpost matches your search</span>
        {/if}
        {#each list as blogpost}
            <div class="listItem">
                <BlogpostThumbnail title={blogpost.title} synopsis={blogpost.synopsis} slug={blogpost.slug} image={blogpost.image}/>
            </div>
        {/each}
    </div>
</div>

<style type="text/css" media="screen">
 .info {
     width: 100%;
     text-align:center;
     position: absolute;
 }

 /* .listItem {
    margin: 1em;
    } */

 .listHeader {
     width: 50vw;
     max-width: 30em;
     /* display: flex; */
     margin: 2em auto;
     /* flex-wrap: wrap; */
     /* justify-content: flex-start; */
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
     justify-content: space-between;
     align-items: center;
 }

 .listContent {
     min-height: 100vh;
     max-width: 50em;
     margin: auto;
 }

 input {

 }

</style>
