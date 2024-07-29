input.onButtonPressed(Button.A, function () {
    radio.sendString("rosu")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("verde")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("galben")
})
radio.setGroup(1)
basic.showString("T")
