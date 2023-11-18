import { songQueue,nextQueueSong } from '../datas/store';

export function CreateQueue(startingSong:number){
    var queueArray:any=[];
    var nextSong:any=0;
    nextQueueSong.subscribe((next)=>{
        nextSong=next;
    });
    songQueue.subscribe((queue) => {
        queueArray = queue;
    });
    queueArray=queueArray.filter((item: { songId: number; })=>item.songId!==startingSong)
    nextSong=queueArray[0];
}