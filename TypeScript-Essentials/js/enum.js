/*
 *enum represents a two way mapping between a number and a string
 */
/*enum with constant members */
var ShapeType;
(function (ShapeType) {
    ShapeType[ShapeType["Circle"] = 0] = "Circle";
    ShapeType[ShapeType["Square"] = 1] = "Square";
    ShapeType[ShapeType["FreeHand"] = 2] = "FreeHand";
    ShapeType[ShapeType["Line"] = 3] = "Line";
})(ShapeType || (ShapeType = {}));
alert(ShapeType.Circle); //Will alert 0
alert(ShapeType[0]); // Will also alert  Circle. Hence the two way mapping.
/*enum with computed members */
function getEnumVal() {
    return Date.now();
}
var Shapes;
(function (Shapes) {
    Shapes[Shapes["Circle"] = 3] = "Circle";
    Shapes[Shapes["Square"] = 4] = "Square";
    Shapes[Shapes["Triangle"] = 5] = "Triangle";
    Shapes[Shapes["Line"] = getEnumVal()] = "Line";
})(Shapes || (Shapes = {}));
/*enum definations can be marged if there are two declaration of the name type(name) */
(function (Shapes) {
    Shapes[Shapes["Elipse"] = 0] = "Elipse";
    Shapes[Shapes["Rectangle"] = 1] = "Rectangle";
})(Shapes || (Shapes = {}));
var vehicle = 2 /* Nissan */;
/*Constant enumarations are not allowed to have computed members*/ 
