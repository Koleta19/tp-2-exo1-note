let posX = 0
let posY = 3
let direction = 1
led.plot(posX, posY)
basic.forever(function () {
    led.unplot(posX, posY)
    direction += direction
    led.plot(posX, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    basic.pause(1000)
})
