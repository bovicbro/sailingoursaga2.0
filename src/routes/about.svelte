<script type="text/javascript">
 import Message from "../components/Message.svelte"
 import Hero from "../components/Hero.svelte"
 import Profile from "../components/Profile.svelte"
 import Image from "../components/Image.svelte"
</script>

<Hero
    title="About the crew"
    text="Antonia, Victor and Saga (the boat) are on an adventure"
    image="/ocean2.jpg"/>
<div class="content">
    <Message title="The trick is to leave before you are ready. Careful preparation is neccessary, but if you can’t accept good enough you might never set sail. This is our story." text="Imagine heading out from shore, hoisting the main, and turning off the engine. Everything goes quiet, the breeze is playing with your hair, and the sun is warming your face. You gaze out towards the horizon and let yourself return to that daydream… “What happens way over there, beyond what you can see where the sky meets the sea?” For a few seconds you consider to just keep going, to sail further and further… Then you remind yourself that you better turn around to be home before the sun sets."/>
</div>
<div class="presentations">
    <Profile name="Antonia Nilsson"/>
    <Profile name="Antonia Nilsson"/>
</div>
<div class="content">
    <Image url="/saga-moored.jpg" text="Saga moored in the home port Hovenäset"/>
</div>

<style type="text/css" media="screen">
 .presentations {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     max-width: 40em;
     margin: 0 auto;
 }
</style>
