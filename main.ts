input.onPinPressed(TouchPin.P2, function () {
    huenum += -30
    if (huenum < 0) {
        huenum = 255
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
input.onPinPressed(TouchPin.P1, function () {
    huenum += 30
    if (huenum > 255) {
        huenum = 0
    }
    strip.showColor(neopixel.hsl(huenum, 255, 50))
    basic.showNumber(huenum)
})
let huenum = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
strip.showColor(neopixel.hsl(huenum, 255, 50))
basic.forever(function () {
	
})
