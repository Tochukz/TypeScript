/*
 *enum represents a two way mapping between a number and a string 
 */

/*enum with constant members */
enum ShapeType {
    Circle,
    Square,
    FreeHand,
    Line
}
alert(ShapeType.Circle); //Will alert 0
alert(ShapeType[0]);// Will alert  Circle. Hence the two way mapping.


/*enum with computed members */
function getEnumVal(): number {
    return Date.now();
}

enum Shapes {
    Circle = 3,
    Square,
    Triangle,
    Line = getEnumVal()
}

/*enum definations can be marged if there are two declaration of the name type(name) */
enum Shapes {
    Elipse,
    Rectangle
}
/*A constant enumeration is defined using the const key word. It is erased during compilation and replace by hard coded-values */
const enum Cars {
    Toyota,
    Mistibushi,
    Nissan,
    Hilux
}
const vehicle = Cars.Nissan;
/*Constant enumarations are not allowed to have computed members*/