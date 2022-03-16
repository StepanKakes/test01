
pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
pismeno = "S"
interval = 0
start = False
brzo1=False
brzo2=False


def on_forever():
    global start, pismeno, brzo1, brzo2
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
            brzo1=True
            pismeno = "A"
        if pin2:
            brzo2=True
            pismeno = "B"
        if brzo1==True and brzo2==True:
            pismeno = "C"
basic.forever(on_forever)

def on_in_background():
    soundExpression.happy.play()
    global interval, start
    interval = randint(3000, 10000)
    basic.pause(interval)
    basic.show_string(pismeno)
    start = True
    music.play_tone(262, music.beat(1500))
control.in_background(on_in_background)
