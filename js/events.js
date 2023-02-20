import {
  btnLess,
  btnPlus
} from "./elements.js"

export default function ({timer}) {
  btnPlus.addEventListener("click", function () {
    timer.addTime()
  })
  btnLess.addEventListener("click", function () {
    timer.lessTime()
  })
}
