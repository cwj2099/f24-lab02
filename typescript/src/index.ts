import { newRenderer } from "./renderer.js"
import { newRectangle } from "./shapes/rectangle.js";
import { newCircle } from "./shapes/circle.js";

//Create a circle to test, rendering
const rectangle: Shape = newRectangle(2, 3)
const circle: Shape = newCircle(5)
const renderer = newRenderer(circle)
renderer.draw();