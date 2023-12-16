import { baseUrl } from "../datas/store";
import userTokenValue from "./user";

export var followers:any=[{
  userName:"",
  userId:"",
  requestType:"Followers"
}];
export var following:any=[{
  userName:"",
  userId:"",
  requestType:"Following"
}];
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
        const response = await fetch(`${baseUrl}/User/GetUserFollowers`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
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
        const response = await fetch(`${baseUrl}/User/GetUserFollowings`, requestOptions);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
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
  userToken:userTokenValue,
  targetUserId:userId
}
const requestOptions = {
  method: 'POST',
  body: JSON.stringify(body),
  headers: { 'Content-Type': 'application/json' },
};
const response=await fetch(`${baseUrl}/User/FollowUser`,requestOptions);

if (!response.ok) {
  throw new Error(response.statusText);
}
console.log('user followed:',userId)
}



export async function UnFollowUser(userId:any){
  const body={
    userToken:userTokenValue,
    targetUserId:userId
  } 
  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    const response=await fetch(`${baseUrl}/User/UnFollowUser`,requestOptions);
if (!response.ok) {
  throw new Error(response.statusText);
}
console.log('user unfollowed:',userId);
  } catch (error) {
    console.error('Error:', error);
  }

}
