function readCompassVertical () {
    x = input.acceleration(Dimension.X)
    z = input.acceleration(Dimension.Z)
    tilt = Math.atan2(x, z)
    tiltDegrees = tilt * 180 / Math.PI
    heading = input.compassHeading()
    correctedHeading = heading + tiltDegrees
    correctedHeading = correctedHeading % 360
    return correctedHeading
}
input.onButtonPressed(Button.A, function () {
    // Kalibracja kompasu
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    rotate360()
})
function rotate360 () {
    startHeading = readCompassVertical()
    currentHeading = startHeading
    // Rozpoczęcie obrotu
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 48)
    // Kontynuacja obrotu dopóki nie osiągniemy pełnego okrążenia
    while (Math.abs(currentHeading - startHeading) < 360) {
        currentHeading = readCompassVertical()
        basic.pause(1)
    }
    // Zatrzymanie robota
    maqueen.motorStop(maqueen.Motors.All)
}
let currentHeading = 0
let startHeading = 0
let correctedHeading = 0
let heading = 0
let tiltDegrees = 0
let tilt = 0
let z = 0
let x = 0
maqueen.motorStop(maqueen.Motors.All)
basic.forever(function () {
	
})
