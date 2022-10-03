// MEDIUM: Write a function that would allow you to do this:
    // var sharePizza = cutPizzaSlices(8);
    // console.log(sharePizza(2));                                                                                                                                                                    
        // prints "Each person gets 4.00 slices of pizza"
    // console.log(sharePizza(3)); 
        // prints "Each person gets 2.67 slices of pizza"


function cutPizzaSlices(slices){
    return slices;
}

function sharePizza (people) {
    return cutPizzaSlices(8) / people;
}

console.log( sharePizza(2) ); // 8 / 2 = 4.00

console.log( sharePizza(3) ); // 8 / 3 = 2.67
