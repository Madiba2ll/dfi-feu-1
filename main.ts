let po = false
let temp = 0
input.onButtonPressed(Button.A, function () {
    piéton()
})
function piéton () {
    rouge()
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.showLeds(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
        `)
    basic.showNumber(9)
    basic.pause(1000)
    basic.showNumber(8)
    basic.pause(1000)
    basic.showNumber(7)
    basic.pause(1000)
    basic.showNumber(6)
    basic.pause(1000)
    basic.showNumber(5)
    basic.pause(1000)
    basic.showNumber(4)
    pins.digitalWritePin(DigitalPin.P16, 0)
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.showNumber(3)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showNumber(1)
    basic.pause(1000)
    basic.showNumber(0)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pins.digitalWritePin(DigitalPin.P8, 0)
}
function attendre () {
	
}
function cycle () {
    po = input.pinIsPressed(TouchPin.P0)
    temp = 1
    pins.analogWritePin(AnalogPin.P0, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P0, 0)
    po = input.pinIsPressed(TouchPin.P1)
    temp = 2
    pins.analogWritePin(AnalogPin.P1, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P1, 0)
    po = input.pinIsPressed(TouchPin.P2)
    temp = 3
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function rouge () {
    pins.analogWritePin(AnalogPin.P2, 1023)
    basic.pause(1000)
    pins.analogWritePin(AnalogPin.P2, 0)
}
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        temp = 3
    } else {
        if (input.buttonIsPressed(Button.A) && temp == 3) {
            for (let index = 0; index < 10; index++) {
                rouge()
            }
        }
    }
    cycle()
})
