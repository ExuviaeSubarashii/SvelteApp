import { writable } from "svelte/store";
import { baseUrl } from "./store";
type Playlist = {
  PlayListId: string;
  PlayListOwner: string;
  PlayListContents: string;
  PlayListType: string;
  PlayListTitle: string;
  PlayListCount: number;
  PlayListOwnerId: number;
  DateCreated: Date;
};

type User = {
  Id: number;
  UserName: string;

};

type Song = {
  SongId: number;
  SongName: string;
  SongArtist: string;
  AlbumName: string;
};



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
    playlistdata.set(await playlistResponse.json());
    userdata.set(await userResponse.json());
    songsdata.set(await songsResponse.json());
    console.log("search playlistdata:", playlistdata);
    console.log("search userdata:", userdata);
    console.log("search songs:", songsdata);
  } catch (error) {
    console.error('Error:', error);
  }
}
export const playlistdata:any = writable([]);
export const userdata:any = writable([]);
export const songsdata:any = writable([]);