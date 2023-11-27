import { baseUrl } from "../datas/store";

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
