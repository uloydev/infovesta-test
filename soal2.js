const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("masukkan tinggi segitiga ? ", function(height) {
    for (let i = 1; i <= height; i++) {
        for (let j = 0; j < i; j++) {
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    rl.close()
});
