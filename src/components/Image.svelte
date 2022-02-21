<script type="text/javascript">
 export let url = '';
 export let alt = '';
 export let text = '';
</script>

<div class="image">
    <img src={url} alt={alt} />
    <span>{text}</span>
</div>

<style type="text/css" media="screen">
 img {
     width: 100%;
 }

 span {
     font-style: italic;
 }
</style>
