import {userTokenValue} from '../datas/user';
import playlistType from "../components/SideBarContent.svelte";
import { onMount } from 'svelte';
import { baseUrl } from "../datas/store";


    export async function GetUserPlayLists() {
        
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
        exportedplaylists = data;
        console.log(`sidebar`,exportedplaylists);
      } catch (error) {
        console.error('Error:', error);
      }
    }
export var exportedplaylists:any = [];
