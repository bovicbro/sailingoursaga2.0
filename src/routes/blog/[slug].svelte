<script context="module">
 /** @type {import('@sveltejs/kit').Load} */
 export async function load({params, fetch}) {
     const response = await fetch('/blogposts/' + params.slug + '.json')
     return {
         props: {
             slug : params.slug,
             blogPost : await response.json()
         }
     }
 }
</script>

<script type="text/javascript">
 import Quote from "../../components/Quote.svelte"
 import Image from "../../components/Image.svelte"
 export let blogPost;
</script>
<div class="content">
    <h2>{blogPost.title}</h2>
    {#each blogPost.content as content}
        {#if content.type == "paragraph"}
            <p>{content.text}</p>
        {:else if content.type == "image"}
            <Image url={content.url} alt={content.alt} text={content.text}/>
        {:else if content.type == "quote"}
            <Quote quote={content.quote} origin={content.origin}/>
        {/if}
    {/each}
</div>

<style type="text/css" media="screen">
 p {
     width: 100%;
 }
</style>
