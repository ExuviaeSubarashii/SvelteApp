import { browser } from "$app/environment";
import { writable } from "svelte/store";
var userTokenValue:any;
var userIdValue:any;
var userEmailValue:any;
// Initialize the store with a default value
const usertoken = writable(browser ? localStorage.getItem("usertoken") || undefined : undefined);
const userId = writable(browser ? localStorage.getItem("userId") || undefined : undefined);
const userEmail = writable(browser ? localStorage.getItem("userEmail") || undefined : undefined);

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
  userEmail.subscribe(($userEmail)=>{
    userEmailValue=$userEmail;
  })
  export const currentUser={
    userToken:userTokenValue,
    userEmail:userEmailValue,
    userId:userIdValue
  }

  export default currentUser;
  
