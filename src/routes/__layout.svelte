<script type="text/javascript">
 import Nav from '../components/Nav.svelte'
 import Footer from '../components/Footer.svelte'
</script>

<Nav/>
<main class="content">
    <slot/>
</main>
<Footer/>

<style type="text/css" media="screen">
 .content {
     /* border: 1px solid black; */
     margin: 2em;
 }

 @media (max-width: 500px) {
     .content {
         margin: 0;
         padding-top: 54px;
     }
 }

</style>
