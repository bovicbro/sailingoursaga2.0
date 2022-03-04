<script type="text/javascript">
 export let title;
 export let slug;
 export let image;
 export let synopsis;
</script>

<a href="/blog/{slug}">
    <div class="blogpost">
        <img src="{image}" alt="" />
        <div class="text">
            <h3>{title}</h3>
            <p>{synopsis}</p>
        </div>
    </div>
</a>

<style type="text/css" media="screen">

 a {
     display: block;
     text-decoration: none;
     color: black;
 }

 .blogpost:hover {
     box-shadow: 1px 1px 4px 3px #33333380;
 }

 .text {
     margin: 0.5em 1em;
     padding-bottom: 1px;
 }


 .blogpost {
     transition: box-shadow 0.25s;
     /* min-width: 20em; */
     widht: 100%;
     margin: 0.5em;
     border-radius: 2px;
     display: box;
     box-shadow: 1px 1px 2px 1px #33333380;
     max-width: 28em;
 }

 h3 {
     margin: 0.22em 0em;
 }

 img {
     width: 100%;
     height: auto;
     object-fit: cover;
     margin-bottom: 0;
 }
</style>
