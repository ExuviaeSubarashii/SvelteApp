import { currentUser } from "./user";
import { baseUrl } from "../datas/store";
import { writable } from "svelte/store";
import type { UserById, UserByToken } from "./types";

export let userPropertiesbyid:UserById={
  userName:"",
  following:"",
  followers:"",
  userId:0,
  isFollowing:false
};
export const userPropertiesbytoken=writable<UserByToken>({
  userName: "",
  following: "",
  followers: "",
  userId: 0
});
export async function GetUserPropertiesByToken(){
  if(currentUser.isLoggedIn){
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
        const data:UserByToken = await response.json();
        userPropertiesbytoken.set(data);
      } catch (error) {
        console.error('Error:', error);
      }
} 
}
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
        const data:UserById = await response.json();
        userPropertiesbyid = {
          userName: data.userName,
          followers: data.followers,
          following: data.following,
          userId:data.userId,
          isFollowing:data.isFollowing
        };
      } catch (error) {
        console.error('Error:', error);
      }
}
