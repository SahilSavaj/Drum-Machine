import { useState,useEffect } from "react";
import Display from "./Display"
// import sound from "../static/audio/crash.wav"
// console.log(sound)
const loc="/static/media/"
const audio_mapper={
    'Q':"crash",
    'W': "chat",
    'E': "clap",
    'A': "kick",
    'S': "ohat",
    'D':  "rim",
    'Z':"snare",
    'X':  "tom",
    'C': "bass"
}
function importAll(r) {
    let temp={}
    for(let i of r.keys().map(r)){
        let name=i.slice(loc.length,i.length-4)
        temp[name[0]]=i
    }
    return temp;
  }

const filenames = importAll(require.context('../static/audio', false, /\.(wav|mp3)$/));

export default function Drumpad(){
    const [pressedkey,setPressedkey]=useState('')

    useEffect(() => {
        const keyDownHandler = event => {
            const keys=['Q','W','E','A','S','D','Z','X','C']  
            if(keys.indexOf(event.key.toUpperCase()) >= 0){
                event.preventDefault();
                let audio=new Audio(filenames[event.key.toUpperCase()]);
                if(audio.paused){
                    audio.play();
                    setPressedkey(audio_mapper[event.key.toUpperCase()])

                }
                else{
                    audio.pause();
                    audio.currentTime=0
                }
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, []);

    const HandleInput=(e)=>{
        const {value} = e.target;
        let audio=new Audio(filenames[value]);
        if(audio.paused){
            audio.play();
            setPressedkey(audio_mapper[value])
        }
        else{
            audio.pause();
            audio.currentTime=0
        }
    }

 return(
    <>
        <div className="container flex flex-col dark:border w-fit dark:border-zinc-50/30 rounded-lg">
            <Display data={pressedkey}/>
            <div className="drum_pad felx flex-col justify-center w-fit h-fit min-h-full overflow-auto py-7 px-3 mx-auto dark:bg-zinc-50/10 
                space-y-5">
                <div className="pad_rows flex flex-row h-fit justify-center align-middle items-center text-center">
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10  " id="d1" value="Q" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/crash.wav" type="audio/wav" className="clip" id="Q"></audio>
                        Q</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d2" value="W" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/chat.wav" type="audio/wav" className="clip" id="W"></audio>
                        W</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d3" value="E" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/clap.wav" type="audio/wav" className="clip" id="E"></audio>
                        E</button>
                </div>
                <div className="pad_rows flex flex-row h-fit justify-center align-middle items-center text-center">
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d4" value="A" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/kick.wav" type="audio/wav" className="clip" id="A"></audio>
                        A</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d5" value="S" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/ohat.wav" type="audio/wav" className="clip" id="S"></audio>
                        S</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d6" value="D" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/rim.wav"type="audio/wav" className="clip" id="D"></audio>
    
                        D</button>
                </div>
                <div className="pad_rows flex flex-row h-fit justify-center align-middle items-center text-center">
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d7" value="Z" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/snare.wav" type="audio/wav" className="clip" id="Z"></audio>
                        Z</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d8" value="X" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/tom.wav"type="audio/wav" className="clip" id="X"></audio>
    
                        X</button>
                    <button className="drum-pad dark:bg-zinc-900 dark:backdrop-blur-xl dark:text-zinc-300 focus:outline-none border rounded-xl 
                    px-7 py-3 w-[7rem] h-fit text-2xl sm:text-md mx-5 dark:border-zinc-900/10 " id="d9" value="C" onClick={(e)=>{HandleInput(e)}} >
                        <audio src="../static/audio/bass.mp3" type="audio/wav" className="clip" id="C"></audio>
                        C</button>
                </div>
            </div>
        </div>

    </>
 )
}