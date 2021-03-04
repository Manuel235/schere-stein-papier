let hand = 0
input.onGesture(Gesture.Shake, function () {
    basic.showString("Papier,Stein,Schere")
    if (hand) {
        hand = 1
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # # .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
