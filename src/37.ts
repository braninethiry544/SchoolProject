// Example of a simple class definition and method usage.
class SimpleClass {
    constructor(public name: string) {
        console.log(`The ${name} is here.`);
    }

    sayHello() {
        console.log("Hello!");
    }
}

const myObject = new SimpleClass("World");
myObject.sayHello();
