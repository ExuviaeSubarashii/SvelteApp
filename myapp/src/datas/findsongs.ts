import { baseUrl } from "../datas/store";

export interface ISongInterface{
    albumName:string;
    duration:number;
    songArtist:string;
    songId:number;
    songName:string;
}
// export let songs:ISongInterface[];
export var songs:any=[];
export async function FindSongs(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const songsResponse = await fetch(`${baseUrl}/Songs/GetAllSongs`, requestOptions);
        if (!songsResponse.ok) {
          throw new Error(songsResponse.statusText);
        }
        const data = await songsResponse.json();
        songs=data;
        console.log(`find songs:`,songs);
      } catch (error) {
        console.error('Error:', error);
      }
}