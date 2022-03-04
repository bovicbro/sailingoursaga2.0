<script type="text/javascript">
 export let text = 'Default'
 export let image = ''
 import {fade, blur} from "svelte/transition";
 // export let imageAlt = ''
 import { onMount } from 'svelte';

 let ready = false;
 onMount(() => ready = true);
</script>

<div class="hero" style="background-image:url('{image}')">
    <div class="container">
        {#if ready}
            <h1 in:fade="{{duration: 1600}}">{text}</h1>
            <h2 in:fade="{{duration: 2000, delay: 1100}}">This is a test of a text that will fit next to the title to make the composition look great. The text needs to be formatted correctly.</h2>
        {/if}
    </div>
</div>

<style type="text/css" media="screen">
 .hero {
     margin: 0 auto;
     object-fit: contains;
     flex-direction: column;
     justify-content: center;
     background-size: cover;
     background-position: top, center;
     height: calc(100vh - 3em);
     display: flex;
 }

 .container {
     width: 85vw;
     max-width: 30em;
     margin: 0 auto;
     display: flex;
     justify-content: flex-start;
     flex-wrap: wrap;
     align-items: center;
 }

 h1 {
     width: 4em;
     background: linear-gradient(165.2deg, #1DD6FF 7.46%, #D5FE7E 95.95%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}

 h2 {
     width: 13em;
     color: white;
     margin-top: 0;
 }

</style>
