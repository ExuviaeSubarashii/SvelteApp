import { browser } from "$app/environment";
import { writable } from "svelte/store";
export var userTokenValue:any;
export var userIdValue:any;
// Initialize the store with a default value
export const usertoken = writable(browser ? localStorage.getItem("usertoken") || undefined : undefined);
export const userId = writable(browser ? localStorage.getItem("userId") || undefined : undefined);

usertoken.subscribe((val) => {
  if (browser) {
    localStorage.setItem("usertoken", val);
  }
});
userId.subscribe((val) => {
  if (browser) {
    localStorage.setItem("userId", val);
  }
});
  usertoken.subscribe(($usertoken) => {
    userTokenValue = $usertoken;
  });
  userId.subscribe(($userId)=>{
    userIdValue=$userId;
  })
  export default userTokenValue;
  
