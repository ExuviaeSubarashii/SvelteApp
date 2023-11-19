<script>
    import SideBarContent from "../components/SideBarContent.svelte";
	import SuggestedPlayLists from "../components/SuggestedPlayLists.svelte";
	import UserComponent from "../components/UserComponent.svelte";

</script>
    <SideBarContent/>
<div class="centered-div">
    <SuggestedPlayLists/>
</div>
<div class="top-right">
<UserComponent/>
</div>
<style>
.centered-div {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: gray;
            padding: 20px;
            border-radius: 25px;
        }
</style>