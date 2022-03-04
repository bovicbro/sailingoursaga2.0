<script type="text/javascript">
 export let text = 'Default'
 export let image = ''
 // export let imageAlt = ''
</script>

<div class="hero" style="background-image:url('{image}')">
    <div class="container">
        <h1>{text}</h1>
    </div>
</div>

<style type="text/css" media="screen">
 .hero {
     margin: 0 auto;
     object-fit: contains;
     display: flex;
     flex-direction: column;
     justify-content: center;
     background-size: cover;
     background-position: top, center;
     height: 60vh;
 }

 .container {
     width: 80vw;
     max-width: 30em;
     margin: 0 auto;
 }

 h1 {
     vertical-align: middle;
     text-align: left;
     width: 4em;
     background: linear-gradient(165.2deg, #1DD6FF 7.46%, #D5FE7E 95.95%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}
</style>
