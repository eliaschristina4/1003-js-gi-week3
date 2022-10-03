// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.

// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.

// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.

function Pii (fname, lname, ssn, dob) {
    this.fname = fname,
    this.lname = lname,
    this._ssn = ssn,
    this.dob = dob,
    this.name = function (){
        return this.fname + " " + this.lname;
    };
};

const christina = new Pii('Christina', 'Elias', '555-555-5555', '04/01/1997');

console.log( christina );
console.log( christina.name() );
