import userTokenValue from "./user";
const baseUrl = "http://localhost:5128/api";
export var exportplaylists:any[]=[];
export async function CreatePlaylist(){
    const body={
        userToken:userTokenValue
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
        const data = await response.json();
        console.log("from creating:",JSON.stringify(data))
        exportplaylists=data;
      } catch (error) {
        console.error('Error:', error);
      }
    }