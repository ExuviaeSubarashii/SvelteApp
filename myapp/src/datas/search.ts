import { writable } from "svelte/store";
import { baseUrl } from "./store";
import type { SearchPlaylist, Song, User } from "./types";




export async function Search(input: string) {
  const body = {
    inputProp: input
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const playlistResponse = await fetch(`${baseUrl}/Search/SearchAllPlaylists`, requestOptions);
    const userResponse = await fetch(`${baseUrl}/Search/SearchAllUsers`, requestOptions);
    const songsResponse = await fetch(`${baseUrl}/Search/SearchAllSongs`, requestOptions);
    if (!playlistResponse.ok || !userResponse.ok || !songsResponse.ok) {
      throw new Error(playlistResponse.statusText || userResponse.statusText || songsResponse.statusText);
    }
    const playlist: SearchPlaylist[] = await playlistResponse.json()
    const user: User[] = await userResponse.json()
    const songs: Song[] = await songsResponse.json()
    playlistdata.set(playlist);
    userdata.set(user);
    songsdata.set(songs);
  } catch (error) {
    console.error('Error:', error);
  }
}
export const playlistdata = writable<SearchPlaylist[]>([]);
export const userdata = writable<User[]>([]);
export const songsdata = writable<Song[]>([]);