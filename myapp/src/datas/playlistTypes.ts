export var playlistType:string;
import {userTokenValue} from '../datas/user';
const baseUrl = "http://localhost:5128/api";
export let playlists:any = [];

export function ThePlayListThing(playlistTypeInput:string){
console.log(playlistTypeInput);
playlistType=playlistTypeInput;
GetPlaylistByTag()
}
export async function GetPlaylistByTag() {
    const body={
        userToken:userTokenValue,
        playlistType:playlistType||null
      }
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/Playlist/GetUserPlayLists`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        playlists = data;
        console.log(`bytag`,playlists);
      } catch (error) {
        console.error('Error:', error);
      }
  }