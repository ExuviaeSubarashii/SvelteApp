  
  import { writable } from 'svelte/store';
import { exportedId } from '../datas/store';
  import { baseUrl } from "../datas/store";
  
  export async function GetSongs(id:string) {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: { 'Content-Type': 'application/json' },
    };
  
    try {
      const response = await fetch(`${baseUrl}/Playlist/GetPlaylistContents`, requestOptions);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      console.log(data.playlistName);
      exportedplaylistcontents.set(data);
      exportedplaylistcontents.subscribe((value)=>{
        console.log(value);
      })
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  export const exportedplaylistcontents = writable([]);