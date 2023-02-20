import Events from './events.js'
import { Timer } from './timer.js'
import {
  minutesDisplay,
} from "./elements.js"

const timer = Timer({
  minutesDisplay
})

Events({ timer })
