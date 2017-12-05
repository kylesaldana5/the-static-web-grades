var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// How many of each grade ?
    // What is the lowest grade ?
        // What is the highest grade ?

// Loop over an array of student grades(values from 50 - 100) and output how many of each grades there are.

// A score of 50 - 60 is an F
// A score of 61 - 70 is a D
// A score of 71 - 80 is a C
// A score of 81 - 90 is a B
// A score of 91 - 100 is an A

gradeArry = [];


for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    if (score > 91) {
        gradeArry.push(`${score} A`)
    }
    else if (score > 81) {
        gradeArry.push(`${score} B`)
    }
    else if (score > 71) {
        gradeArry.push(`${score} C`)
    }
    else if (score > 61) {
        gradeArry.push(`${score} D`)
    }
    else if (score > 51) {
        gradeArry.push(`${score} F`)
    } 
    
}

console.log(gradeArry.sort())


let lowGrade = Math.min.apply(null, scores);
let highGrade = Math.max.apply(null, scores);
let howManyScores = scores.length;

console.log("this is the highest score", highGrade);
console.log("this is the lowest score", lowGrade);
console.log("this is how many grades", howManyScores);




