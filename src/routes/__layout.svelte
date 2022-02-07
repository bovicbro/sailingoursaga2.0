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
     min-height: 100vh;
     width: 80vw;
     display: flex;
     align-content: center;
     margin: 2em 10em;
 }

 @media (max-width: 500px) {
     .content {
         margin-left: 0;
         margin-right: 0;
     }
 }

</style>
