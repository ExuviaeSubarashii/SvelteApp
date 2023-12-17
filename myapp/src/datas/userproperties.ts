import { currentUser } from "./user";
import { baseUrl } from "../datas/store";
import { writable } from "svelte/store";

// export let userPropertiesbytoken:any={
//   userName:"",
//   following:"",
//   followers:"",
//   userId:""
// };
export let userPropertiesbyid:any={
  userName:"",
  following:"",
  followers:"",
  userId:"",
  isFollowing:""
};
export async function GetUserPropertiesByToken(){
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(currentUser.userToken),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/User/GetUserProperties`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        // userPropertiesbytoken = {
        //   userName: data.userName,
        //   followers: data.followers,
        //   following: data.following,
        //   userId:data.userId
        // };
        userPropertiesbytoken.set(data);
      } catch (error) {
        console.error('Error:', error);
      }
}
export const userPropertiesbytoken=writable('');
export async function GetUserPropertiesById(userId:any){
  console.log("userid of the profile",userId)
  const body={
    CurrentViewerUserToken:currentUser.userToken,
    CurrentlyViewedUserProfileId:userId
  }
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/User/GetUserPropertiesById`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        userPropertiesbyid = {
          userName: data.userName,
          followers: data.followers,
          following: data.following,
          userId:data.userId,
          isFollowing:data.isFollowing
        };
        console.log(`userPropertiesbyid:`,userPropertiesbyid);
      } catch (error) {
        console.error('Error:', error);
      }
}
