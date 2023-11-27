import userTokenValue from "./user";
import { baseUrl } from "../datas/store";
import { json } from "@sveltejs/kit";

export var exportplaylists: any[] = [];
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
    console.log("Successfully Created");
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
export async function UpdatePlaylistName(playlistId:any,newPlaylistName:string,updateWay:string){
  const body = {
    playlistId:playlistId,
    newPlaylistName:newPlaylistName,
    updateWay:"Change Title"
  }
  try {
    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    };
    const response=await(fetch(`${baseUrl}/Playlist/UpdatePlaylist`,requestOptions));
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error:',error);
  }
}

export async function UpdatePlayListContents(playlistid:string,playListContents:string){
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
    const response=await fetch(`${baseUrl}/Playlist/AddNewContent`,requestOptions);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Error:',error);
  }
}