export declare  function makeTimer(target:Object, timeFunc:()=>number):()=>void;

export type TimeHandle = number;

export interface Timer{
    setTimeout?:(func:()=>void,t:number)=>TimeHandle;
    setInterval?:(func:()=>void,t:number)=>TimeHandle;
    clearTimeout?:(handler:TimeHandle)=>void;
    clearInterval?:(hander:TimeHandle)=>void;
    restTime?:(handler:TimeHandle)=>number;
    modifyTime?:(handle:TimeHandle,time:number)=>void;
    isTimerFinish?:(handle:TimeHandle)=>void;
    cancelTimer?:(handle:TimeHandle)=>void;
}