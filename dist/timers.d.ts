export declare  function makeTimer(target:Object, timeFunc:()=>number):()=>void;

interface Timer{
    setTimeout:(func:()=>void,t:number)=>any;
    setInterval:(func:()=>void,t:number)=>any;
    clearTimeout:(handler:any)=>void;
    clearInterval:(hander:any)=>void;
}