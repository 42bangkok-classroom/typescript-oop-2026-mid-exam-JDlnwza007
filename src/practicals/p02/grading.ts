const x = Number(process.argv[2]);

if (isNaN(x) || x < 0 || x > 100) {
    console.log("Invalid input");
} else if (x >= 80) {
    console.log("Grade is A");
} else if (x >= 70) {
    console.log("Grade is B");
} else if (x >= 60) {
    console.log("Grade is C");
} else if (x >= 50) {
    console.log("Garde is D");
} else {
    console.log("Grade is F");
}

