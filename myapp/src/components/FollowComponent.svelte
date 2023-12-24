<script lang="ts">
import { onMount } from 'svelte';
import { minidenticon } from 'minidenticons'
import {GetFollowers,followers} from '../datas/followmanager';

export var followid:any;
    console.log("follower data:"+followid);
    onMount(()=>GetFollowers(followid));
</script>

<div class="followers-container">
    <h1>{"Followers"}</h1>
    <div class="followers-content">
        {#await GetFollowers(followid) then}
            {#each followers as follow}
                <div class="user-specific">
                    <minidenticon-svg username={follow.userName}></minidenticon-svg>
                    <p><a href="/user/{follow.userId}">{follow.userName}</a></p>
                </div>
            {/each}
        {/await}
    </div>
</div>

<style>
    .followers-container {
        position: absolute;
        top: 150px;
        left: 950px;
        width: 500px;
        height: 350px;
        display: flex;
        flex-direction: column;
        border-style: dashed;
        color: white;
    }

    .followers-content {
        display: flex;
        align-items: center;
    }

    .user-specific p,
    .user-specific a{
        color:lightgray;
        font-size: 25px;
        text-decoration: none;
        padding-left: 15px;
    }

    .followers h1 {
        color: white;
    }

    .user-specific {
        background-color: #44444411;
        width: 150px;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;
        margin-left: 20px;
    }
</style>

