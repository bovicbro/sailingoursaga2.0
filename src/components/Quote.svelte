<script type="text/javascript">
 export let quote = ''
 export let origin = ''
</script>

<blockquote>
    {quote}
</blockquote>
<span class="origin">
    - {origin}
</span>

<style type="text/css" media="screen">

 blockquote {
    font-family: 'Abril Fatface';
    font-size: 20px;
     background: linear-gradient(0deg, #00acd3 7.46%, #04e569 95.95%);
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     margin: 1em 1em 0.5em 1em;
 }

 .origin {
     text-align: right;
     display: block;
     margin-right: 48px;
     margin-bottom: 0em;
     font-style: italic;
 }

blockquote::before {
    content: open-quote;
}
blockquote::after {
    content: close-quote;
}

</style>
