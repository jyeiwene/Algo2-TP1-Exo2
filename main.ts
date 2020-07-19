input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX += -1
    if (posX < 0) {
        posX = 1
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX += 1
    if (posX > 4) {
        posX = 3
    }
})
let posX = 0
let posY = 0
let Direction_Vertical = 1
posY = 2
posX = 2
led.plot(posX, posY)
basic.forever(function () {
    basic.pause(500)
    led.unplot(posX, posY)
    posY += Direction_Vertical
    if (posY >= 4) {
        Direction_Vertical = -1
    } else if (posY <= 0) {
        Direction_Vertical = 1
    }
    led.plot(posX, posY)
})
