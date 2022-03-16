pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let pismeno = "S"
let interval = 0
let start = false
let brzo1 = false
let brzo2 = false
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
            brzo1 = true
            pismeno = "A"
        }
        
        if (pin2) {
            brzo2 = true
            pismeno = "B"
        }
        
        if (brzo1 == true && brzo2 == true) {
            pismeno = "C"
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
})
