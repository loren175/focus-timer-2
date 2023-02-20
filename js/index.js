import Events from './events.js'
import { Timer } from './timer.js'
import Sound from "./sound.js"
import { minutesDisplay, secondsDisplay } from "./elements.js"

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound()

Events({ timer, sound })
