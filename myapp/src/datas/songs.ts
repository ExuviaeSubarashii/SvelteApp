  
  import { exportedId } from '../datas/store';
  import { baseUrl } from "../datas/store";
  
  export async function GetSongs(id:string) {


    const requestOptions = {
      method: 'POST',
      body: JSON.stringify(id),
      headers: { 'Content-Type': 'application/json' },
    };
  
    try {
      const response = await fetch(`${baseUrl}/Playlist/GetPlaylistContents`, requestOptions);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
  export function SetId(id:any){
    console.clear();
    exportedId.set(id);
    console.log(exportedId);
  }