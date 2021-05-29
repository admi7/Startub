// export an array
export let names = ['Amet', 'Aliou', 'Mariama','Astou', 'Arame', 'Sophie', 'Omar', 'Nogaye', 'Daouda'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

//  export a function
export function sayHi(user) {
    alert(`Hello, ${user}!`);
  }  // no ; at the end




function sayHi(user) {
    alert(`Hello, ${user}!`);
  }
  
  function sayBye(user) {
    alert(`Bye, ${user}!`);
  }
  
  export {sayHi, sayBye, User, names}; // a list of exported variables