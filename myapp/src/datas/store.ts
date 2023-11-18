// store.ts
import { writable, type Writable } from 'svelte/store';

export var exportedId = writable('');
let showComponent = writable(false);
let duration=writable(0);
let songState=writable('Paused');
const songQueue=writable([]);
let nextQueueSong=writable(0);


export { showComponent,duration,songState,songQueue,nextQueueSong};
