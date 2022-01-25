<script type="text/javascript">
 export let imgURL = 'profile.jpg'
 export let altText = 'Picture of person'
 export let name = 'Default name'
 export let text = 'Eu, facilisis sed odio morbi quis commodo? Vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat.'

</script>

<div class="profile">
    <img src={imgURL} alt={altText} />
    <h2>{name}</h2>
    <p>{text}</p>
</div>

<style type="text/css" media="screen">

 img {
     max-width: 100%;
     height: auto;

 }
 .profile {
     margin: 1em;
     width: 300px;
     margin-left: auto;
     margin-right: auto;
     text-align: center;
 }
</style>
