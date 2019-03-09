function add(x: number, y: number, z?: number): number{
    if(z !== undefined){
        return x + y + z;
    }
    return x + y;
}
document.getElementById('div0').innerHTML =  add(11, 6, 4);

/**
 * The addGeneric function has two declaration one for string and another for number type. 
 * Note that the final implementation which uses the 'any' type will not be included in the function type declaration.
 * Thus, any call to the function with type that is neither a number or a string will fail at compile time
 */ 
function addGeneric(x: string, y: string): string;
function addGeneric(x: number, y: number): number;
function addGeneric(x: any, y: any): any {
    return x + y;
}
document.getElementById('div1').innerHTML = addGeneric('Hello', ' Typscript');
document.getElementById('div2').innerHTML = addGeneric(19, 7);
//Mixing of types like this should produce a compile error
document.getElementById('div3').innerHTML = addGeneric(4, ' years ago');

/* Using the 'rest parameter' i.e ...args*/
function addWithRestParam(x: string, ...args: string[]): string;
function addWithRestParam(x: number, ...args: number[]): number;
function addWithRestParam(x: any, ...args: any[]): any {
    var total  =  x;
    for(var i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
}

document.getElementById('div4').innerHTML = addWithRestParam('Hello', ' Typescript', ' World');
document.getElementById('div5').innerHTML = addWithRestParam(4, 5, 6, 7);