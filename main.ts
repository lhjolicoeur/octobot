function TentacleAction () {
    servos.P1.run(100)
    basic.pause(4000)
    servos.P1.stop()
    basic.pause(1000)
    servos.P1.run(-100)
    basic.pause(4000)
    servos.P1.stop()
}
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P1.run(100)
    }
    servos.P1.stop()
    while (input.buttonIsPressed(Button.B)) {
        servos.P1.run(-100)
    }
    servos.P1.stop()
    if (input.logoIsPressed() && input.soundLevel() > 128) {
        TentacleAction()
    }
})
