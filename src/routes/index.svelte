<script type="text/javascript">
 import Hero from "../components/Hero.svelte"
 import Message from "../components/Message.svelte"
 import Image from "../components/Image.svelte"
 // import Quote from "../components/Quote.svelte"
 import SubscribeForm from "../components/SubscribeForm.svelte"
</script>


<Hero
    title="Sailing our Saga"
    image="/ocean2.jpg"
    text="Throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."/>
<div class="content">
    <Message
        title="Hi! So happy to see that you found your way to our adventure!"
        text="We are Victor and Antonia, a Swedish couple that always have dreamt about sailing towards the horizon. In August of 2021 we finally set off from our home port Hovenäset on this adventure of a lifetime."/>
    <Image url="signonsaga.jpg" text="Putting the name sign on Saga in Denmark" alt="Antonia and Victor putting on the name sign on Saga"/>
    <p>
        On @sailingoursaga on instagram we are documenting our journey, and would love it if you would want to follow and interact with us there for day-to-day updates.
    </p>
    <p>
        If you want to get to know a little bit better, go to about us.
    </p>
    <SubscribeForm/>
</div>
