export default function transferTime(time:number):string{
    const intTime=Math.floor(time)
    const minutes=Math.floor(intTime/60)
    const seconds=intTime%60
    if (seconds<10){
        return minutes+':0'+seconds
    }else {
        return minutes+':'+seconds
    }
}