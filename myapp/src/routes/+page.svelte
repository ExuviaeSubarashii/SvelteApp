<script>
    import SideBarContent from "../components/SideBarContent.svelte";
	import SuggestedPlayLists from "../components/SuggestedPlayLists.svelte";
</script>

    <SideBarContent/>

<div class="centered-div">
    <SuggestedPlayLists/>

</div>
<style>
.centered-div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: lightblue;
            padding: 20px;
        }
</style>