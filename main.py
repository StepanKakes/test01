
pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
pismeno = "S"
interval = 0
start = False


def on_forever():
    global start, pismeno
    pin1 = input.pin_is_pressed(TouchPin.P1)
    pin2 = input.pin_is_pressed(TouchPin.P2)
    console.log_value("pin1", pin1)
    console.log_value("pin2", pin2)
    if start == True:
        if pin1:
            start = False
            basic.show_number(1)
        if pin2:
            start = False
            basic.show_number(2)
        if pin2 and pin1:
            start = False
            basic.show_string("R")
    elif start == False:
        if pin1:
            pismeno = "A"
            start = False
        if pin2:
            pismeno = "B"
            start = False
        if pin1 and pin2:
            pismeno = "C"
            start = False
basic.forever(on_forever)

def on_in_background():
    soundExpression.happy.play()
    global interval, start
    interval = randint(3000, 10000)
    basic.pause(interval)
    basic.show_string(pismeno)
    start = True
    music.play_tone(262, music.beat(1500))
    basic.pause(3000)
    control.reset()
control.in_background(on_in_background)
