import { writable } from "svelte/store";
import { baseUrl } from "./store";
import userTokenValue from "./user";

export async function GetUserSuggestedPlayLists() {


    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(userTokenValue),
      headers: { 'Content-Type': 'application/json' },
    };
    try {
      const response = await fetch(`${baseUrl}/Playlist/GetSuggestedPlayLists`, requestOptions);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      exportedsuggestedplaylist.set(data);
      console.log(`suggested`,data);
    } catch (error) {
      console.error('Error:', error);
    }
    }
    export var exportedsuggestedplaylist:any=writable([]);