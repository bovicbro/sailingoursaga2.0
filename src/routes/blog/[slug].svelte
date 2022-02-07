<script context="module">
 /** @type {import('@sveltejs/kit').Load} */
 export async function load({params, url, fetch}) {
     console.log(url)
     console.log(params)
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
 export let blogPost;
</script>

<h2>{blogPost.title}</h2>
{#each blogPost.content as content}
    {#if content.type == "paragraph"}
        <p>{content.text}</p>
    {:else if content.type == "image"}
        <img src="{content.url}" alt="{content.alt}" />
    {:else if content.type == "quote"}
        <Quote quote="{content.quote}" origin="{content.orign}"/>
    {/if}
{/each}
