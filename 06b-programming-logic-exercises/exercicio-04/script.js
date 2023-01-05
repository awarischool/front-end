// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// Um número primo é aquele que é dividido apenas por um e por ele mesmo. Entre 0 e 100 existem apenas 25 números primos.

function isPrime(n) {
    let dividers = 0;
    for (let i=0; i<=n; i++) {
        if (n % i === 0) {
            dividers ++;
        }
    }
    if (dividers === 2) {
        return true;
    } else {
        return false;
    }
}

for(let i=1; i<=100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}