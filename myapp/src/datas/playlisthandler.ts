import userTokenValue from "./user";
import { baseUrl } from "../datas/store";
import { GetUserPlayLists, exportedplaylists } from "./playlists";
import { GetUserSuggestedPlayLists } from "./suggestedplaylists";
import { writable } from "svelte/store";

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

    const responseMessage=await response.text();
  responseMessageStore.set(responseMessage);

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
  const body={
    playlistId:playlistId,
    userToken:userTokenValue
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${baseUrl}/Playlist/DeletePlaylist`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    await GetUserPlayLists();
    await GetUserSuggestedPlayLists();
  } catch (error) {
    console.error('Error:', error);
  }
}
export async function DeleteFromJustYourLibrary(playlistId: any) {
  const body={
    playlistId:playlistId,
    userToken:userTokenValue
  }
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response = await fetch(`${baseUrl}/Playlist/DeleteFromJustYourLibrary`, requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    GetUserPlayLists();
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
    const responseMessage=await response.text();
  responseMessageStore.set(responseMessage);
    console.log(responseMessage);
  return responseMessage;

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
    const responseMessage=await response.text();
  responseMessageStore.set(responseMessage);
    console.log(responseMessage);
  return responseMessage;

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
  const responseMessage=await response.text();
  responseMessageStore.set(responseMessage);
  console.log(responseMessage);
  return responseMessage;
} catch (error) {
  console.error('Error:', error);
  return Promise.reject(error);
}
}
export const responseMessageStore=writable("");
