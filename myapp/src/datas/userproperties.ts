import { writable } from "svelte/store";
import userTokenValue from "./user";
const baseUrl = "http://localhost:5128/api";
export let userPropertiesbytoken:any={
  userName:"",
  following:"",
  followers:"",
  userId:""
};
export let userPropertiesbyid:any={
  userName:"",
  following:"",
  followers:"",
  userId:""
};
export async function GetUserPropertiesByToken(){
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(userTokenValue),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const response = await fetch(`${baseUrl}/User/GetUserProperties`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        userPropertiesbytoken = {
          userName: data.userName,
          followers: data.followers,
          following: data.following,
          userId:data.userId
        };
        console.log(`current user:`,userPropertiesbytoken);
      } catch (error) {
        console.error('Error:', error);
      }
}
export async function GetUserPropertiesById(userId:any){
  console.log("userid",userId)
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(userId),
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
          userId:data.userId
        };
        console.log(`userPropertiesbyid:`,userPropertiesbyid);
      } catch (error) {
        console.error('Error:', error);
      }
}
