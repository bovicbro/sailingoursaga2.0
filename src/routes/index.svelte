<script type="text/javascript">
 import Hero from "../components/Hero.svelte"
 import Message from "../components/Message.svelte"
 import Profile from "../components/Profile.svelte"
 import Image from "../components/Image.svelte"
</script>


<Hero image="/ocean2.jpg" text="Sailing our Saga"/>
<div class="content">
    <Message
        title="Hi! So happy to see that you found your way to our adventure!"
        text="We are Victor and Antonia, a Swedish couple that always have dreamt about sailing towards the horizon. In August of 2021 we finally set off from our home port Hovenäset on this adventure of a lifetime."/>
    <Profile name="Antonia Nilsson"/>
    <Image url="/signonsaga.jpg" text="Putting on the namesign in denmark" alt="Antonia and Victor applying the name sign to Saga"/>
    <Message text="On @sailingoursaga on instagram we are documenting our journey, and would love it if you would want to follow and interact with us there for day-to-day updates. If you want to get to know a little bit better, go to about us." />
</div>
