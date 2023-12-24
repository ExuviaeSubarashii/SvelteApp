import { baseUrl } from "./store";
import currentUser from "./user";

export async function GetPlaylistOwner(playlistId:string) {
    try {
        if (currentUser.isLoggedIn) {
            const body={
                currentUserId:currentUser.userId,
                playlistId:playlistId
            }
            const requestOptions = {
                method: 'POST',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' },
              };
            const getPlaylistOwnerResponse=await fetch(`${baseUrl}/Playlist/GetPlaylistOwner`,requestOptions);
            if (!getPlaylistOwnerResponse.ok) {
                throw new Error(getPlaylistOwnerResponse.statusText);
              }
              const data=await getPlaylistOwnerResponse.json();
              console.log("isownerthing",data);
              if(data===true){
                console.log("you are the owner");
              }
              else{
                console.log("you are not the owner");
              }
              return data;
        }
    } catch (error) {
        console.error('Error:', error);
      }
}