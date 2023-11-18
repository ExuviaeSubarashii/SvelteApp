<script lang="ts">
  import { songQueue } from '../datas/store';
  let queueArray:any=[];
  songQueue.subscribe((queue) => {
    queueArray = queue;
});
</script>
<div class="queue-div" role="grid">
<h1>{"Next Up"}</h1>
    {#each queueArray as queueItem}
    <div class="queue-content">
        <hr>
        <p>{queueItem.songName}</p>
        <p>{queueItem.songArtist}</p>
        <p>{queueItem.duration}</p>
    </div>
    {/each}
</div>
<style>
     .queue-div {
    color: #b3b3b3;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-box-direction: normal;
    direction: inherit;
    visibility: visible;
    animation-delay: -1ms!important;
    animation-duration: 1ms!important;
    animation-iteration-count: 1!important;
    background-attachment: scroll!important;
    scroll-behavior: auto!important;
    transition-delay: 0s!important;
    transition-duration: 0s!important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: 0;
    background-color: #121212;
  }
  .queue-content{
    color: #f0f0f0;
    text-transform: none;
    line-height: normal;
    font-family: CircularSp,CircularSp-Arab,CircularSp-Hebr,CircularSp-Cyrl,CircularSp-Grek,CircularSp-Deva,var(--fallback-fonts,sans-serif),sans-serif;
    -webkit-font-smoothing: antialiased;
    -webkit-box-direction: normal;
    direction: inherit;
    visibility: visible;
    --row-height: 56px;
    -webkit-user-drag: element;
    animation-delay: -1ms!important;
    animation-duration: 1ms!important;
    animation-iteration-count: 1!important;
    background-attachment: scroll!important;
    scroll-behavior: auto!important;
    transition-delay: 0s!important;
    transition-duration: 0s!important;
    box-sizing: border-box;
    margin: 0;
    vertical-align: baseline;
    user-select: none;
    grid-gap: 16px;
    display: grid;
    padding: 0 16px;
    border: 1px solid transparent;
    border-radius: 4px;
    height: var(--row-height);
    position: relative;
    grid-template-columns: [index] 16px [first] 4fr [var1] 2fr [last] minmax(120px,1fr);
  }
</style>