import { newRectangle } from "./shapes/rectangle.js";

//Change the rectangle to shape, as shape is the interface now
function newRenderer(shape: Shape) {
    return {
        draw() {
            const area: number = shape.computeArea()
            console.log("Shape drawn\n" + "Its area is " + area)
        }
    }
}

export { newRenderer }