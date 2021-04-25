# Pro TypeScript (2018)
__Second Edition__  
__By Steven Fenton__  
## Introduction
__TypeScript Alternatives__  
* __Babel__ https://babeljs.io/
* __Coffee Script__ http://coffeescript.org/
* __Dart__ https://www.dartlang.org/

__Installing TypeScript__  
```
> npm install -g typescript
```
You can use Visual Studio TypeScript extension instead.

__Compile a TypeScript File__  
```
> tsc main.ts
```
This will produce an output `main.js` file.  
You can also explicitly specify the name of your output file by using the `outFile` flag.
```
> tsc main.ts --outFile app.js
```
You can also specify the ECMAScript target  
```
> tsc main.ts --outFile app.js -t ES6
```

## Chapter 1: TypeScript Language Features  
__Variables__  
Variables declared with `const` or `let` are block scoped, whereas variables declared with `var` keyword are function scoped.

__Type Annotation__  
When choosing whether to use an interface or a type alias, not that an interface can be used in an extends or implements clause, when defining other interfaces and classes. An interface can also accept type arguments, making the interface generic. A type alias can do neither of these.

__Tuple Types__  
Tuples are names after the number of items they define: Pair, Triple Quadruple, Quintuple, Sextuple, Septuble. Tuples larger then seven items are named _n-tuples_

__Mapped Types__  
Mapped type can be used to create readonly, optional or nullable variation of an existing type.  

__Type Information__   
Obtaining types at runtime is a topic to be treated with some care.  If your program tests types to control the flow of the program, you should be hearing alarm bells in your head. Checking types and branching off in different directions based on the types is a strong indicator that you have broken encapsulation.  

## Chapter 2 Code Organization 
