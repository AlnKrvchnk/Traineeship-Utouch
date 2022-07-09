
type constructorMixin = { new (...arg: any[]): {} };

function useSalutation(satulation: string) {
  return function <T extends constructorMixin>(target: T) {
    return class extends target {
      name: string; //'name' is declared here.
      private message = "Hello " + satulation + this.name; //Property 'name' is used before its initialization.

      sayHello() {
        console.log(`${this.message}`);
      }
    };
  };
}

@useSalutation("Mr.")
class Greeter {
  constructor(public name: string) {}
  secondName: string;
  sayHello() {
    console.log(`Hello ${this.name} ${this.secondName}!`);
  }
}

const grtr = new Greeter("John");
grtr.sayHello();
