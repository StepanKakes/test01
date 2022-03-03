pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let pismeno = "S"
let interval = 0
let start = false
basic.forever(function on_forever() {
    
    let pin1 = input.pinIsPressed(TouchPin.P1)
    let pin2 = input.pinIsPressed(TouchPin.P2)
    console.logValue("pin1", pin1)
    console.logValue("pin2", pin2)
    if (start == true) {
        if (pin1) {
            start = false
            basic.showNumber(1)
        }
        
        if (pin2) {
            start = false
            basic.showNumber(2)
        }
        
        if (pin2 && pin1) {
            start = false
            basic.showString("R")
        }
        
    } else if (start == false) {
        if (pin1) {
            pismeno = "A"
            start = false
        }
        
        if (pin2) {
            pismeno = "B"
            start = false
        }
        
        if (pin1 && pin2) {
            pismeno = "C"
            start = false
        }
        
    }
    
})
control.inBackground(function on_in_background() {
    soundExpression.happy.play()
    
    interval = randint(3000, 10000)
    basic.pause(interval)
    basic.showString(pismeno)
    start = true
    music.playTone(262, music.beat(1500))
    basic.pause(3000)
    control.reset()
})
