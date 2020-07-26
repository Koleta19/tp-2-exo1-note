let posX = 0
let posY = 3
let direction = 1
let liste = [0, 1, 2, 3, 4]
led.plot(posX, posY)
basic.showIcon(IconNames.Yes)
basic.forever(function () {
    led.unplot(posX, posY)
    posY += direction
    led.plot(posX, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    } else if (0 == 0) {
        posX = 3
    } else if (0 == 0) {
    	
    }
    basic.pause(1000)
})
