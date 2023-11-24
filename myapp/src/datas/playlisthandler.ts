import userTokenValue from "./user";
import { baseUrl } from "../datas/store";

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