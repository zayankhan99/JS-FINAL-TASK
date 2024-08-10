
let inp = ["bat", "tap", "cat", "tab", "pat"];

let ana = [];

for (let i = 0; i < inp.length; i++) {

    for (let j = i + 1; j < inp.length; j++) {

        if (inp[i].split('').sort().join('') == inp[j].split('').sort().join('')) {

            ana.push([inp[i], inp[j]]);
        }
    }
}

console.log(ana);


