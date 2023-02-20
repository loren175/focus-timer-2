import {
  btnLess,
  btnPlus,
  btnPlay,
  btnStop,
  btnForest,
  btnCoffee,
  btnCampFire,
  btnRainy,
} from "./elements.js"

export default function ({ timer, sound }) {
  btnPlus.addEventListener("click", function () {
    timer.addTime()
  })
  btnLess.addEventListener("click", function () {
    timer.lessTime()
  })
  btnPlay.addEventListener("click", function () {
    timer.countdown()
  })
  btnStop.addEventListener("click", function () {
    timer.reset()
    sound.stopRain()
    sound.stopForest()
    sound.stopCoffee()
    sound.stopFire()
  })

  btnForest.addEventListener("click", function () {
    sound.pressForest()
    sound.stopRain()
    sound.stopFire()
    sound.stopCoffee()
  })
  btnCoffee.addEventListener("click", function () {
    sound.pressCoffee()
    sound.stopRain()
    sound.stopFire()
    sound.stopForest()
  })
  btnCampFire.addEventListener("click", function () {
    sound.pressFire()
    sound.stopRain()
    sound.stopForest()
    sound.stopCoffee()
  })
  btnRainy.addEventListener("click", function () {
    sound.pressRain()
    sound.stopForest()
    sound.stopFire()
    sound.stopCoffee()
  })
}
