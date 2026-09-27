let btn= document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate= 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang =("hi-GB")
    window.speechSynthesis.speak(text_speak)

    let day = new data()
    let hours = day.gethouse()
    if(hours>=0&& hours<12){
        speak("Good Morning Sir")

    }else if(hours>=12&& hours<16){
        speak("Good Afternoon sir")
    }else 
    speak("Good night sir")

}
let speechRecognition = window.speechRecognition ||window.webkitspeechrecognition
let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.script[currentIndex][0].transcript
    content.innertext = transcript
    takeCommand (transcript.tolowercase())
}
btn.addEventListener("click",() =>{
    recognition.start()
    voice.style. display = "block"
    btn.style.display = "none"
})
 
function takeCommand(message){
    voice.style.display = "none"
    btn.style.display = "flex"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir, what can I help you")

    }else if(message.includes("who are you")){
        speak("I M Arificial Intelligence created by Akshita")

    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://youtube.com/", "_blank")

    }else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/", "_blank")

    }else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://facebook.com/", "_blank")

    }else if (message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://instagram.com/", "_blank")

    }else if(message.includes("open calculator")){
        window.open("calculator://")
    }else if(message.includes("open whatsaap")){
        speak("opening whatsaap")
        window.open("whatsapp://")
    }else if (message.includes("time")){
        let time = newdata().tolocalString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }else if (message.includes("data")){
        let date = new Date().tolocalString(undefined,{day:"numeric",month:"short"})
        speak(date)
    }else {
        let finalText = "This is what I found On internet regarding "+ message.replace("AI","")|| message.replace("AI","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("AI","")}`, "_blank")
    }
}
