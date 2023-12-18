  import { writable } from 'svelte/store';
  import { baseUrl } from "../datas/store";
import currentUser from './user';
  export async function GetSongs(id:string) {
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
      const data = await playlistContentResponse.json();
      isFavorited.set(await isfavoritedResponse.json());
      console.log(isFavorited);
      exportedplaylistcontents.set(data);
      console.log('get all songs:',data);
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  export const isFavorited=writable();
  export const exportedplaylistcontents = writable([]);