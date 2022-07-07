var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
})

function PlayStudentAudio() {
    document.getElementById("student-voice").play()
}

function PlayCarAudio() {
    document.getElementById("car-voice").play()
}

function PlayGunAudio() {
    document.getElementById("gun-voice").play()
}

function PlayTvAudio() {
    document.getElementById("television-voice").play()
}

function PlayThinkingAudio() {
    document.getElementById("thinking-voice").play()
}