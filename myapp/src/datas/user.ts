import { browser } from "$app/environment";
import { writable } from "svelte/store";
export var userTokenValue:any;
// Initialize the store with a default value
export const usertoken = writable(browser ? localStorage.getItem("usertoken") || "undefined" : "undefined");

usertoken.subscribe((val) => {
  if (browser) {
    localStorage.setItem("usertoken", val);
  }
});

  usertoken.subscribe(($usertoken) => {
    userTokenValue = $usertoken;
  });
  export default userTokenValue;
