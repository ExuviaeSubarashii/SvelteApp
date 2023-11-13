const baseUrl = "http://localhost:5128/api";
export async function SetCurrentSong(songId:any){
    console.log(songId);
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(songId),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/Songs/SetCurrentSong`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        songProperties = data;
        console.log(`songContents:`,songProperties);
      } catch (error) {
        console.error('Error:', error);
      }
}
export let songProperties:any;
export async function GetCurrentSong(){

}