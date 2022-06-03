"use strict";
let found = true;
let grade = 88.6;
let firstName = "Anup";
let lastName = "Kumar";
let reviews = [5, 5, 4.5, 1, 3];
let sports = ["Golf", "Tennis", "Hockey", "Soccer"];
console.log(found);
console.log(grade);
console.log(`Hi ${firstName} ${lastName}`);
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
}
sports.push("Baseball");
sports.push("Swimming");
for (let tempSport of sports) {
    console.log(tempSport);
}
