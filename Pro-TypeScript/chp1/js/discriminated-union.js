function calculateArea(shape) {
    var area;
    switch (shape.kind) {
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
}
;
function assertNever(shape) {
    throw new Error("The " + shape + " shape is not supported");
}
var circle = {
    kind: 'circle',
    radius: 3,
    area: function () {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }
};
var circleArea1 = calculateArea(circle);
var circleArea2 = circle.area();
var square = {
    kind: 'rectangle',
    length: 10,
    width: 10,
    area: function () {
        return this.length * this.width;
    }
};
var squareArea1 = calculateArea(square);
var sqareArea2 = square.area();
console.log({ circleArea1: circleArea1, circleArea2: circleArea2, squareArea1: squareArea1, sqareArea2: sqareArea2 });
