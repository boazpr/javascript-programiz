// display odd numbers

for (let i = 1; i <= 5; i++) {
    // skip the iteration if i is even
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

var num = 1;

while (num <= 10) {

    // skip iteration if num is even
    if (num % 2 === 0) {
        ++num;
        continue;
    }

    console.log(num);
    ++num;
}