<script lang="ts">
    import type { PageData } from './$types';
    import SideBarContent from '../../components/SideBarContent.svelte';
    import QueueComponent from '../../components/QueueComponent.svelte';
</script>
<div class="container">
    <SideBarContent/>
    <QueueComponent/>
  </div>
<style>
     .container {
    display: flex;
    gap: 20px;
  }
</style>