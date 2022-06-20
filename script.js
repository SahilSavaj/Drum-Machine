function Play(id){
    let audio=document.getElementById(id);
    let temp=audio['src'].split("/")
    let len=temp.length
    let name=temp[len-1].split(".")
    console.log(name[0])
    if(audio.paused){
        audio.play();
        window.document.getElementById('display').innerText=name[0]
    }
    else{
        audio.pause();
        audio.currentTime=0
    }
    
}
window.document.onkeydown=function(event){
    if (event.key==='Q' || event.key==='q'){
        Play('Q')
    }
    else if (event.key==='W' || event.key==='w'){
        Play('W')
    }
    else if (event.key==='E' || event.key==='e'){
        Play('E')
    }
    else if (event.key==='A' || event.key==='a'){
        Play('A')
    }
    else if (event.key==='S' || event.key==='s'){
        Play('S')
    }
    else if (event.key==='D' || event.key==='d'){
        Play('D')
    }
    else if (event.key==='Z' || event.key==='z'){
        Play('Z')
    }
    else if (event.key==='X' || event.key==='x'){
        Play('X')
    }
    else if (event.key==='C' || event.key==='c'){
        Play('C')
    }


}