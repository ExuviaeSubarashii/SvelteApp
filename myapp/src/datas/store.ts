// store.ts
import { writable, type Writable } from 'svelte/store';

export var exportedId = writable('');
var showComponent = writable(false);
var duration=writable(0);
var songState=writable('Paused');
var nextQueueSong=writable(0);
const songQueue=writable([]);
const baseUrl = "http://localhost:5128/api";
export { showComponent,duration,songState,songQueue,nextQueueSong,baseUrl};
