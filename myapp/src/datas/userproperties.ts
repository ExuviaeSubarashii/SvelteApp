import { writable } from "svelte/store";
import userTokenValue from "./user";
const baseUrl = "http://localhost:5128/api";

export async function GetUserProperties(){
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
        userProperties = {
          userName: data.userName,
          followers: data.followers,
          following: data.following
        };
        console.log(`userprops:`,userProperties);
      } catch (error) {
        console.error('Error:', error);
      }
}
export let userProperties:any={
  userName:"",
  following:"",
  followers:""
};