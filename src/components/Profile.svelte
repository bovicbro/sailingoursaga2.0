<script type="text/javascript">
 export let name = 'Default name'
 export let img = 'profile.png'
 export let text = 'Eu, facilisis sed odio morbi quis commodo? Vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.'
 export let alt = 'Picture of person'

</script>

<div class="profile">
    <img src={img} alt={alt} />
    <h2>{name}</h2>
    <p>{text}</p>
</div>

<style type="text/css" media="screen">

 img {
     max-width: 100%;
     height: auto;

 }
 .profile {
     margin: 1em 3em;
     width: 250px;
     text-align: center;
 }
</style>
