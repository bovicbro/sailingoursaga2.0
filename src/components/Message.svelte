<script type="text/javascript">
 export let title;
 export let text;
</script>

<div class="message">
    {#if title}
        <h2>{title}</h2>
    {/if}
    <p>{text}</p>
</div>

<style type="text/css" media="screen">
 .message {
     margin: 2em 0em;
 }
 h2 {
     margin-bottom: 0;
 }

 p {
     margin-top: 0.5em;
 }
</style>
