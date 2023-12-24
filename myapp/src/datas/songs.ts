  import { writable } from 'svelte/store';
  import { baseUrl } from "../datas/store";
import currentUser from './user';
import type { PlaylistContents } from './types';
  export async function GetSongs(id:string) {
    if(currentUser.isLoggedIn){
  
    const body={
      userToken:currentUser.userToken,
      playlistId:id
    }
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
  
    try {
      const playlistContentResponse = await fetch(`${baseUrl}/Playlist/GetPlaylistContents`, requestOptions);
      const isfavoritedResponse=await fetch(`${baseUrl}/Playlist/IsPlaylistFavorited`,requestOptions);
      if (!playlistContentResponse.ok) {
        throw new Error(playlistContentResponse.statusText);
      }
      const data:PlaylistContents[] = await playlistContentResponse.json();
      exportedplaylistcontents.set(data);
      console.log('get all songs:',data);
      return await isfavoritedResponse.json();
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
}

  export const exportedplaylistcontents = writable<PlaylistContents[]>([]);