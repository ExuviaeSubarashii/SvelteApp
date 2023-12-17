import {currentUser} from '../datas/user';
import playlistType from "../components/SideBarContent.svelte";
import { baseUrl } from "../datas/store";
import { writable } from 'svelte/store';

    export async function GetUserPlayLists() {
        
      const body={
        userToken:currentUser.userToken,
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
        exportedplaylists.set(data);
        console.log("Sidebar:",data);        
      } catch (error) {
        console.error('Error:', error);
      }
    }
    export async function PlaylistSearch(playlistName:string){

        const body={
          playlistName:playlistName
        }
        const requestOptions = {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        };
        try {
          const response = await fetch(`${baseUrl}/Playlist/PlaylistSearch`, requestOptions);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const data = await response.json();
          exportedplaylists.set(data);
          console.log("Sidebar:",data);        
        } catch (error) {
          console.error('Error:', error);
        }
      
    }
    export async function GetPodcasts(playlistType:string){

      const body={
        userToken:currentUser.userToken,
        playlistType:playlistType
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
        exportedplaylists.set(data);
        console.log("Sidebar:",data);        
      } catch (error) {
        console.error('Error:', error);
      }
    }
    export const exportedplaylists = writable([]);
