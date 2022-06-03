import {Shape} from './Shape';
import {Circle} from './Circle';
import {Rectangle} from './Rectangle';

let myShape = new Shape(25, 35);
let myCircle = new Circle(5, 10, 15);
let myRectangle = new Rectangle(45, 55, 65, 75);

let theShapes: Shape[] = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for(let tempShape of theShapes){
    console.log(tempShape.getInfo());
}