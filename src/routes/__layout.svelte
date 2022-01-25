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
     padding-top: 54px;
     margin-left: 2em;
     margin-right: 2em;
     min-height: 100vh;
 }

 @media (max-width: 500px) {
     .content {
         margin-left: 0;
         margin-right: 0;
     }
 }

</style>
