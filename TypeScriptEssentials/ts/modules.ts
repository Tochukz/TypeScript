/**
 * Internal modules represent namespaces that classes, interfaces, enums, variables, code segments and other namespaces
 * can exist inside of.
 */
module people{
    //workers is a private instance member
    var workers: string = 'programmer';
    /*work enum has to be exported for out code to compile
     *Any named types that are used in the defination of another member must be made accessible as that member
     *If this requirment in not met compilation willl fail
     */
    export enum work{
        position,
        salary,
    }

    export interface IWorker{
        position: number,
        salary: number
        post(): string;
        wages(): number;
    }
    
    export class Worker implements IWorker{
        public position = work.position;
        public salary = work.salary;
        public post(): string{
            return "Full stack Dev";
        }
        public wages(): number{
            return 35000;
        }
    }
}
/* Modules can be merged like enums, so you can seperate your code into multiple files and merge them
 * The downside to this implementation is that it takes away the ability to create interfaces for your modules
 */

 /*There are two ways to provide module namespaces in type script */
 module AnimalsTerr{
     export module Reptiles{
         export var reptile = 'Snake';
     }
     export module Amphibian{
         export var amphibian  = 'Toad';
     }
     
 }
 module AnimalsAqu.Mammals{
     export var mammal = 'Monkey';
     /*Using the import keyword. This doesn't seem to do anything*/
     import amphibian  = AnimalsTerr.Amphibian.amphibian;
 }
 module AnimalsAqu.Birds{
     export var bird = 'Peagon';
 }