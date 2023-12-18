<script lang="ts">
import { onMount } from 'svelte';
import { minidenticon } from 'minidenticons'
import {GetFollowers,followers} from '../datas/followmanager';

export var followid:any;
    console.log("follower data:"+followid);
    onMount(()=>GetFollowers(followid));
</script>

<div class="followers">
    <h1>{"Followers"}</h1>
    {#await GetFollowers(followid) then}
    {#each followers as follow}
    <div class="user-specific">
        <minidenticon-svg username={follow.userName}></minidenticon-svg>
        <p><a href="/user/{follow.userId}">{follow.userName}</a></p>
    </div>
    {/each}
    {/await}
</div>
<style>
.followers{
    border-style: dashed;
    position: absolute;
      color: white;
      top: 150px;
      left: 950px;
      width: 500px;
      height: 350px;
      font-size: medium;
}
.followers p,a,h1{
    font-size: 25px;
    text-decoration: none;
    left: 20px;
    padding-left: 15px;
}
.user-specific{
    background-color: #44444411;
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    left: 0;
}
</style>
