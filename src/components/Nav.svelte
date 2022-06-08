<script type="text/javascript">
 let menuOpen = false;

 function toggleMenu() {
     menuOpen = !menuOpen;
 }

</script>

<nav class="navbar">
    <div class="navInner">
        <div class="brandName">
            <a href="/"><h3>SAILING OUR SAGA</h3></a>
        </div>
        <a on:click={() => toggleMenu()} href='' class="toggleButton">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="links {menuOpen ? "active" : "" }">
            <ul on:click={() => toggleMenu()}>
                <li><a href="/about">About</a></li>
                <!-- <li><a href="/blog">Blog</a></li> -->
            </ul>
        </div>
    </div>
</nav>
<div class="padding" />

<style type="text/css" media="screen">

.padding {
    height: 3em;
}

 .navbar {
     box-shadow: 0px 0px 8px 0px #a4a4a4;
     overflow: hidden;
     position: fixed;
     width: 100%;
     background: white;
     top: 0;
     height: 3em;
 }

 .navInner {
     display: flex;
     justify-content: space-between;
     max-width: 60em;
     align-items: center;
     margin: 0 auto;
     height: 100%;
 }

 .links ul {
     display:flex;
 }

 .links li {
     list-style: none;
 }

 .links a:hover {
     text-decoration: underline;
 }

 a {
     text-decoration: none;
     padding: 0 1em;
     display: block;
     color: black;
 }

 .toggleButton {
     position: absolute;
     top: 1.05em;
     right: 1em;
     display: none;
     flex-direction: column;
     justify-content: space-between;
     width: 31px;
     height: 21px;
 }

 .toggleButton .bar {
     height: 3px;
     width: 100%;
     background-color: black;
     border-radius: 40px;
 }

 @media (max-width: 600px) {
     .toggleButton {
         display: flex;
     }

     .navInner {
         flex-direction: column;
         align-items: flex-start;
     }

     .links {
         display: none;
         position: fixed;
         right: 0em;
         top: 3em;
         background: white;
         margin: 0;
     box-shadow: -2px 4px 5px 0px #a4a4a4;
     }

     .links ul {
         flex-direction: column;
         width: 100%;
         padding: 0;
         margin: 0em;
     }


     .links.active {
         display: flex;
     }

     .links a {
         padding: 1em 2em;
     }

 }

</style>
