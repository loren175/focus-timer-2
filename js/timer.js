export function Timer({ secondsDisplay, minutesDisplay }) {
  let fixedTime = 25
  let timerTimeout

  function addTime() {
    fixedTime+=5
    minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
  }
  
  function lessTime() {
    if (fixedTime == 0) {
      return
    }

    fixedTime-=5
    minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
  }

  function countdown() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

      let isFinished = minutes <= 0 && seconds <= 0

      if (isFinished) {
        return
      }

      if (seconds <= 0) {
        seconds = 2

        minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
      }

      secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")

      countdown()
    }, 1000)
  }

  function reset() {
    clearTimeout(timerTimeout)
    minutesDisplay.innerHTML = fixedTime
    secondsDisplay.innerHTML = "00"
  }

  return {
    addTime,
    lessTime,
    countdown,
    reset
  }
}
