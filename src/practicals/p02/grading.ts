const x = Number(process.argv[2]);

if (isNaN(x) || x < 0 || x > 100) {
    console.log("Invalid input");
} else if (x >= 80) {
    console.log("A");
} else if (x >= 70) {
    console.log("B");
} else if (x >= 60) {
    console.log("C");
} else if (x >= 50) {
    console.log("D");
} else {
    console.log("F");
}

