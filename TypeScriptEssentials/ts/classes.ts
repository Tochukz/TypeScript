/*Defining a class */
class PersonalInfo{
    private firstName;
    private lastName;
    private job;
    constructor(fname: string, lname: string, job = 'web programmer'){
        this.firstName = fname;
        this.lastName = lname;
        this.job = job;
    }
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
    getJob(): string {
        return this.job;
    }
    
}
var person = new PersonalInfo('Uche', 'Nwachukwu');
document.getElementById('div1').innerText = person.getFullName();
document.getElementById('div2').innerText = person.getJob();

var newPerson = new PersonalInfo('Tochi', 'Nwachukwu', 'full stack developer');
document.getElementById('div3').innerText = newPerson.getFullName() + ' ' +newPerson.getJob();

/*Implementing an interface */
interface IStudent {
    fullName: string,
    firstName: string,
    lastName: string
}
class Student implements IStudent{
    fullName: string;
    constructor(public firstName: string, public initialMiddle: string, public lastName: string){
        this.fullName = firstName + ' ' + initialMiddle + ' ' + lastName;
        /* Using public or private keyword in the constructor signature is a shorthand method of automatically 
         * creating properties having the same name as the named arguments
         */ 
    }

}

function greet(person: IStudent){
    return "Hello " + person.firstName + ' ' + person.lastName;
}

let student = new Student('James', 'F', 'Cordon');
document.getElementById('div4').innerHTML = greet(student);


/*Defining static memebers */
class Feeding{
    private static breakFast: string = "Sandwich";
    private static lunch: string  = "Oath";
    private static dinner: string  = "Rice";
    public getFood(){
        return "Just food";
    }
    static getDefaultFood(){
        var food  = Feeding.breakFast + ' ' + Feeding.lunch + ' ' + Feeding.dinner;
        return food;
    }
}
document.getElementById('div5').innerText =  Feeding.getDefaultFood();

/*Using the set and get keywords */
class Animals{   
    private _bird: string;
    set bird(bird: string){
        this._bird = bird
    }
    get bird(): string{
        return this._bird;
    }
}
var animals  = new Animals();
