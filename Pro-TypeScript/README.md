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
To compile a module using the `AMD`(RequireJS) loader  
```
> tsc main.ts --outFile  main.js --module amd
```
To compile a module using the `UMD` module system
```
> tsc main.ts  --module umd
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
__Namespaces__  
By grouping variables, functions, object, classes and interfaces into namespaces, you can keep them out of the global scope and avoid naming collisions, although the root of each namespace is added to the global scope.  

__Modules__  
Modules outperform namespaces in all respects. A namespace reduces the number of items added to the global scope, but modules are entirely self-contained and place nothing in the global scope. A namespace organizes your code at design time, but modules organize it at design time and at runtime.  

__Module Loading__  
Module loaders take care of getting hold of a module you depend on, and running your code once it has loaded. You can compile the same TypeScript code to target different module systems. The most popular module kinds are described below:  
* __Native ECMAScript Modules__: Identical to TypeScript format, experimental support in all major browser.   
* __AMD Modules__: Asynchronous Module Definition manages module loading, allows multiple modules to be loaded at the same time even when they depend on each other. _RequireJS_ is the most common implementation of AMD.  
* __CommonJS Modules__: Supported by default, it is the prevalent module loading style for NodeJS  
* __UMD Module___: The Universal Module Definition is a standard that works with both AMD and _CommonJS_ modules. This allows the same output to be used with _RequireJS_ and NodeJS without re-compilation.  
* __System Modules__: Can be used in browsers and on NodeJS and has standardized handing for circular dependencies.  

The tow most flexible module systems are UMD and System as both of them can be used in a browser and on the server.

__Packaging__   
When you are writing a package that will contain TypeScript code, it is best not to include the TypeScript source files. Instead, you should package the compiles JavaScript code, along with automatically generated types definitions. This allows your package to be consumed from JavaScript programs, and also means your TypeScript source code will not need tot be re-compiled by any consumers. A typical directory structure of a package looks like this:  
```
--dist
  |--README.md
  |--package.json
  |--src
     |--App.d.ts
     |--App.js
     |--...
```  
To prepare your files for packaging, you simply copy them in to the distribution folder. This could be done using a post-build event in Visual Studio:
```
XCOPY $(ProjectDir)Scripts\TypeSpec\*.d.ts $(ProjectDir)dist\src\ /y
XCOPY $(ProjectDir)Scripts\TypeSpec\*.js $(ProjectDir)dist\src\ /y
XCOPY $(SolutionDir)README.md $(ProjectDir)dist\ /y
XCOPY $(ProjectDir)package.json $(ProjectDir)dist\ /y
```
or using a task runner like Gulp.  

Once the files are ready to be packaged, you simply run the package command:
```
> npm package
```  
This will generate an archive file containing your package. You can use an archive reader to inspect the contents of the file and ensure everything is present as expected.  

To publish the package to NPM  
```
> npm publish
```

__Decorators__  
Decorators can be used to take care of cross-cutting concerns such as logging, authorization, or validation.  
TypeScript decorators can be used for aspect-oriented programming (AOP) and meta-programming. Each kind of decorator required a different function signature, as the decorator is provided with different parameters depending on the decorator use.

To compile TypeScript that uses decorators you must use the `experimentalDecorators` flag because decorator is an experimental feature and your target should be `ES5` for higher;
```
> tsc calculator.ts --outFile dist\calculator.js --experimentalDecorators  --target ES5
```  

__Summary__  
Unless you have good reason to do otherwise, use modules rather than namespaces; and never mix the two.   

## Chapter 3: The Type System
