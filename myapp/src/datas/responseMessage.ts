import { responseMessageStore } from "./playlisthandler";

export async function ReturnIfUserIsNotLoggedIn(inputMessage:string){
    var msg:any;
    responseMessageStore.set(inputMessage);
}