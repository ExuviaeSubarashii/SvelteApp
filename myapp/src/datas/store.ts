// store.ts
import { writable } from 'svelte/store';

export var exportedId = writable('');
let showComponent = writable(false);

export { showComponent };
