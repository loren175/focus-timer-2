export function Timer ({minutesDisplay}) {
  let fixedTime = 25

  function addTime() {
    fixedTime++
    fixedTime++
    fixedTime++
    fixedTime++
    fixedTime++
    minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
  }
  function lessTime() {
    if (fixedTime == 0) {
      return
    }
    
    fixedTime--
    fixedTime--
    fixedTime--
    fixedTime--
    fixedTime--
    minutesDisplay.innerHTML = String(fixedTime).padStart(2, "0")
  }

  return {
    addTime,
    lessTime,
  }
}
