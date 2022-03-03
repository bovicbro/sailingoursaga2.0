<script type="text/javascript">
 export let text = 'Default'
 export let image = ''
 // export let imageAlt = ''
</script>

<div class="hero" style="background-image:url('{image}')">
    <h1>{text}</h1>
</div>

<style type="text/css" media="screen">
 .hero {
     max-width:60em;
     margin: 0 auto;
     object-fit: contains;
     display: flex;
     flex-direction: column;
     justify-content: center;
     /* background-image: url('ocean.jpg'); */
     background-size: cover;
     background-position: top, center;
 }

 h1 {
     /* vertical-align: middle; */
     text-align: left;
     margin-left: 20vw;
     margin-right: auto;
     width: 3em;
     background: linear-gradient(165.2deg, #1DD6FF 7.46%, #D5FE7E 95.95%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}
</style>
