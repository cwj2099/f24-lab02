//Removed rectangle interface, and use shape interface
function newRectangle(width: number, height: number): Shape {
    //Removed fields for encapslation
    return {

        computeArea: function (): number {
            return width * height
        }
    }
}

export { newRectangle }
