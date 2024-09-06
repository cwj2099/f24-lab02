//Use shape as interface
function newSquare(sideLen: number): Shape {
    //Remove number fileds to encalpsolate
    return {
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { newSquare }