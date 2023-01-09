$reloj=document.getElementById("reloj")
$btnPlay=document.getElementById("start-reloj")
$btnStop=document.getElementById("stop-reloj")
$audio=document.querySelector("audio")
$btnAlarmEmpezar=document.getElementById("start-alarm")
$btnAlarmStop=document.getElementById("stop-alarm")
let intervaloHora;

function start(){
    let hora=new Date().toLocaleTimeString()
    $reloj.innerHTML=hora
}


$btnPlay.addEventListener("click",()=>{
    intervaloHora=setInterval(() => {
        start()
    }, 1000);  
   
})

$btnStop.addEventListener("click",()=>{
clearInterval(intervaloHora)

//here you can $reloj.innner to null if you dont want to show anything
})


$btnAlarmEmpezar.addEventListener("click",()=>{
    $audio.play()
    $audio.currentTime=0
    $btnAlarmEmpezar.disabled=true
    
})


$btnAlarmStop.addEventListener("click",()=>{
    $audio.pause()
    $btnAlarmEmpezar.disabled=false
})


