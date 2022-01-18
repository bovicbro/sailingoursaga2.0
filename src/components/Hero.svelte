<script type="text/javascript">
 export let text = 'Default'
 export let image = ''
 // export let imageAlt = ''
</script>

<div class="hero" background-image=url({image})>
    <h1>{text}</h1>
</div>

<style type="text/css" media="screen">
 .hero {
     height: 40vh;
     margin: 0;
     object-fit: contains;
     display: flex;
     flex-direction: column;
     justify-content: center;
     background-image: url('ocean.jpg');
     background-size: cover;
     background-position: top, center;
 }

 h1 {
     text-align: left;
     margin-top: 2em;
     margin-bottom: auto;
     margin-left: 25vw;
     margin-right: auto;
     width: 3em;
     background: linear-gradient(165.2deg, #1DD6FF 7.46%, #D5FE7E 95.95%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
}

 @media (min-width: 500px) {
     .hero {
         height: 40vh
     }

 }
</style>
