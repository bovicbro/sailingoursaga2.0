<script type="text/javascript">
 import Hero from "../components/Hero.svelte"
 import Message from "../components/Message.svelte"
 import Profile from "../components/Profile.svelte"
 import Image from "../components/Image.svelte"
</script>


<Hero
    title="Sailing our Saga"
    image="/ocean2.jpg"
    text="This is a test of a text that will fit next to the title to make the composition look great. The text needs to be formatted correctly."/>
<div class="content">
    <Message
        title="Hi! So happy to see that you found your way to our adventure!"
        text="We are Victor and Antonia, a Swedish couple that always have dreamt about sailing towards the horizon. In August of 2021 we finally set off from our home port Hovenäset on this adventure of a lifetime."/>
    <Image url="/signonsaga.jpg" text="Putting on the namesign in denmark" alt="Antonia and Victor applying the name sign to Saga"/>
    <Message text="On @sailingoursaga on instagram we are documenting our journey, and would love it if you would want to follow and interact with us there for day-to-day updates. If you want to get to know a little bit better, go to about us." />
</div>
