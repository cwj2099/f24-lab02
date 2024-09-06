//Use shape as interface
function newCircle(radius: number): Shape {
    //Remove field for encapslation
    return {
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { newCircle }
