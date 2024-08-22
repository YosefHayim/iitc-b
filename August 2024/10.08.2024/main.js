"use strict";

function gcd(a, b) {
    let current_num_no_reminder = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            current_num_no_reminder = i;
            console.log(`Current number divider is: ${i}`);
        } else {
            console.log(`The number ${i} has a remainder for either a or b.`);
        }
    }
    console.log(`Highest common divisor is: ${current_num_no_reminder}`);
}

// gcd(10, 8);
