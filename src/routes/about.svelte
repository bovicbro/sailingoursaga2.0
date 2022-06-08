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
    <Profile name="Antonia Nilsson" img="/profile.png" text="Antonia loves adventure, exploring new places and doing hikes in epic landscapes. She gets things done, bakes a mean black bean brownie and is the one you interact with most on instagram."/>
    <Profile name="Victor Broman" img="/profile_victor.png" text="Victor is a wizard at coming up with smart solutions to technical problems, cooks most meals onboard and built this website. Victor loves the feeling of freedom and stress free life onboard Saga and taking the day as it comes."/>
</div>
<div class="content">
    <p>This was our story for many years. We lived in our small apartment in Stockholm, spent the days in an office, met friends on the weekends - life was good. For a few weeks every summer we went sailing and fell back into that daydream.</p>
    <p>Of course, we knew that there were people doing just that, sailing towards the horizon. We kept talking about going on our own adventure in the future, but did not make any plans. Then March of 2020 hit and everything changed, all over the world. As society shut down we decided to escape our small apartment to stay closer to the nature, and what we love so much, the ocean.</p>
    <Image url="/saga-moored.jpg" text="Saga moored in the home port Hovenäset"/>
    <p>We had the opportunity to work from home, and have a place to stay in Antonia’s family’s summerhouse - near our previous boat. From one day to the next we had switched out the busy streets of Stockholm to the quiet alleys of Hovenäset. Everyone kept asking when we were going to come back to Stockholm. We had started to think about something else…</p>
    <p>After having lived on our previous boat for 3 months the summer of 2020, we knew we could and wanted to do it. The hunt for a more sturdy boat that could handle both blue ocean sailing, and be our new cosy home began.</p>
    <p>In November 2020 we found her: Saga (a Hallberg-Rassy 352) and from the spring of 2021 we started working full-time on getting her ready for our big adventure. Finally, in August 2021 we could set sail and start the journey for real.</p>
    <p>Now, +3000 nautical miles later, we are so glad that we decided to go for it and set sail. We continue to sail towards the horizon, and explore all the beautiful places we find along the way. The best thing about the horizon is that you never get there. There are always new places to explore.</p>
</div>
<style type="text/css" media="screen">

 .presentations {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     max-width: 43em;
     margin: 0 auto;
 }

</style>
