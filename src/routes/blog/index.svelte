<script type="text/javascript">
 import BlogpostThumbnail from "../../components/BlogpostThumbnail.svelte"
 let blogposts = [
     {title: "How to tie a bowline",
     synopsis: "This is synopsis",
     image: "/bowline.jpg",
     slug: "how-to-tie-a-bowline"
     },
     {title: "Blogpost1",
     synopsis: "This is synopsis",
     image: "/ocean.jpg",
     slug: "blogpost1"
     }
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
        {#each list as blogpost}
            <BlogpostThumbnail title={blogpost.title} synopsis={blogpost.synopsis} slug={blogpost.slug} image={blogpost.image}/>
        {/each}
    </div>
</div>

<style type="text/css" media="screen">

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
     justify-content: space-around;
     align-items: flex-start;
 }

 .listContent {
     min-height: 100vh;
     max-width: 60em;
     margin: auto;
 }

</style>
