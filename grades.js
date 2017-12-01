var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// How many of each grade ?
    // What is the lowest grade ?
        // What is the highest grade ?


let lowGrade = Math.min.apply(null, scores);
let highGrade = Math.max.apply(null, scores);
let howManyScores = scores.length;

console.log("this is the highest score", highGrade);
console.log("this is the lowest score", lowGrade);
console.log("this is how many grades", howManyScores);




