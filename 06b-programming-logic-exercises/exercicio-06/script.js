// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.

const target = window.prompt('Digite um número inteiro:', '5');

console.log(`Tabuada de ${target}`);
for (let i=1; i<=10; i++) {
    const result = target * i;
    console.log(`${target} x ${i} = ${result}`);
}
