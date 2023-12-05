import userTokenValue from "./user";
import { baseUrl } from "../datas/store";
import { GetUserPlayLists } from "./playlists";
import { GetUserSuggestedPlayLists } from "./suggestedplaylists";

export var exportplaylists: any[] = [];
export let responseMessage:any="";
export async function CreatePlaylist() {
  const body = {
    userToken: userTokenValue
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${baseUrl}/Playlist/CreatePlayList`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    responseMessage = await response.text();

console.log("returned:", responseMessage);
if(responseMessage==="Created"){
  GetUserPlayLists();
  GetUserSuggestedPlayLists();
}
} catch (error) {
  console.error('Error:', error);
}
}
export async function DeletePlaylist(playlistId: any) {
  const requestOptions = {
    method: 'POST',
    body: playlistId,
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${baseUrl}/Playlist/DeletePlaylist`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}
export async function UpdatePlaylistName(playlistId: unknown, newPlaylistName: string) {
  const body = {
    playlistId: playlistId,
    newPlaylistName: newPlaylistName,
    updateWay: "Change Title"
  }
  try {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await (fetch(`${baseUrl}/Playlist/UpdatePlaylist`, requestOptions));
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    responseMessage=await response.text();
    console.log(responseMessage);
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function UpdatePlayListContents(playlistid: string, playListContents: string) {
  const body = {
    playListId: playlistid,
    playListContents: playListContents.toString(),
    updateWay: "Add Content"
  }
  console.log(body);
  try {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`${baseUrl}/Playlist/UpdatePlaylist`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    responseMessage=await response.text();
    console.log(responseMessage);
  } catch (error) {
    console.error('Error:', error);
  }
}
export async function RemovePlaylistContents(playlistid:string,songId:string){
 console.log("playlistiddata:",playlistid) 
 console.log("playlistsongdata:",songId); 
 const body={
  playListId:playlistid,
  playListContents:songId.toString(),
  updateWAy:"Remove Song"
 }
 try {
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  const response=await fetch(`${baseUrl}/Playlist/UpdatePlaylist`,requestOptions);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  responseMessage=await response.text();
  console.log(responseMessage);
} catch (error) {
  console.error('Error:', error);
}
}