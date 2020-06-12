basic.forever(function () {
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    basic.pause(100)
    basic.showString("Holiss!")
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
})
