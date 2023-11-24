import { baseUrl } from "../datas/store";

export interface ISongInterface{
    albumName:string;
    duration:number;
    songArtist:string;
    songId:number;
    songName:string;
}
export let songs:ISongInterface[];
export async function FindSongs(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/Songs/GetAllSongs`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        songs=data;
        console.log(`songs:`,songs);
      } catch (error) {
        console.error('Error:', error);
      }
}