import { baseUrl } from "../datas/store";
import type { FollowType } from "./types";
import currentUser from "./user";


export var followers:FollowType[]=[];
export var following:FollowType[]=[];

export async function GetFollowers(userId?:any){
    const request={
        userId:userId
    }
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const followerResponse = await fetch(`${baseUrl}/User/GetUserFollowers`, requestOptions);
        if (!followerResponse.ok) {
          throw new Error(followerResponse.statusText);
        }
        const data = await followerResponse.json();
        followers = data.map((follower: { userName: any; userId: any; }) => {
            return {
              userName: follower.userName,
              userId: follower.userId,
              requestType: "Followers"
            };
          });
        console.log(`followers:`,followers);
      } catch (error) {
        console.error('Error:', error);
      }
}
export async function GetFollowings(userId:any){
  const request={
    userId:userId
}
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(request),
        headers: { 'Content-Type': 'application/json' },
      };
      try {
        const followingResponse = await fetch(`${baseUrl}/User/GetUserFollowings`, requestOptions);
        if (!followingResponse.ok) {
          throw new Error(followingResponse.statusText);
        }
        const data = await followingResponse.json();
        following = data.map((following: { userName: any; userId: any; }) => {
          return {
            userName: following.userName,
            userId: following.userId,
            requestType: "Following"
          };
        });
        console.log(`following:`,following);
      } catch (error) {
        console.error('Error:', error);
      }
}


export async function FollowUser(userId:any){
const body={
  userToken:currentUser.userToken,
  targetUserId:userId
}
const requestOptions = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
};
const followUserResponse=await fetch(`${baseUrl}/User/FollowUser`,requestOptions);

if (!followUserResponse.ok) {
  throw new Error(followUserResponse.statusText);
}
console.log('user followed:',userId)
}

export async function UnFollowUser(userId:any){
  const body={
    userToken:currentUser.userToken,
    targetUserId:userId
  } 
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const unFollowResponse=await fetch(`${baseUrl}/User/UnFollowUser`,requestOptions);
if (!unFollowResponse.ok) {
  throw new Error(unFollowResponse.statusText);
}
console.log('user unfollowed:',userId);
  } catch (error) {
    console.error('Error:', error);
  }

}
