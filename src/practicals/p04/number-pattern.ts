export {};
const firstPattern = process.argv.slice(2)
const pattern = Number(firstPattern)

if (pattern > 0) {
    for (let i = 1; i <= pattern; i++) {
        let rs = ""
        for (let j = 0; j < pattern - i; j++) {
            rs += " "
        }
        for (let k = i; k >= 1; k--) {
            rs += `${k}`
        }
        console.log(rs)
    }
}