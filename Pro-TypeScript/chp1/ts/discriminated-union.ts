
interface IRectangle {
  kind: 'rectangle', // discriminant
  width: number;
  length: number;
  area(): number;
}

interface ICircle {
  kind: 'circle'; // discriminant
  radius: number;
  area(): number;
}

type Shape = ICircle | IRectangle ;

function calculateArea(shape: Shape): number{
  let area: number;
  switch(shape.kind) {
    case 'rectangle':       
      area = shape.length * shape.width;
      break;
    case 'circle':       
      area = parseFloat((Math.PI * shape.radius * shape.radius).toFixed(2));
      break;
    default:
      assertNever(shape);
  }

  return area;
};

function assertNever (shape: never): never {
  throw new Error(`The ${shape} shape is not supported`);
}

const circle: ICircle = {
  kind: 'circle',
  radius: 3,
  area() {
    return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
  }
};
const circleArea1 = calculateArea(circle); // 28.27
const circleArea2 = circle.area();         // 28.27

const square: IRectangle = {
  kind: 'rectangle',
  length: 10,
  width: 10,
  area() {
    return this.length * this.width;
  }
};
const squareArea1 = calculateArea(square); // 100
const sqareArea2 = square.area(); // 100

console.log({circleArea1, circleArea2, squareArea1, sqareArea2});