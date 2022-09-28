// EASY: Write a function that would allow you to do this:
//     var run = exercise('running');
//     console.log(run()); // prints "Today's exercise: running"
//     var swim = exercise('swimming');
//     console.log(swim()); // prints "Today's exercise: swimming" 

function exercise(str){
    return `Today's exercise: ${str}`
}

let run = exercise('running');
console.log(run);

let swim = exercise('swimming');
console.log(swim);
