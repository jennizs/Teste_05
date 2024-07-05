import * as readlineSync from 'readline-sync';

function calcularEficiencia(notas: number[]): number {
    let soma: number = notas.reduce((acc: number, nota: number) => acc + nota, 0);
    let media: number = soma / notas.length;
    let alunosAcimaMedia: number = notas.filter((nota: number) => nota > media).length;
    let eficiencia: number = (alunosAcimaMedia / notas.length) * 100;

    return eficiencia;
}


let resultados: { Amostra: string, Eficiencia: string }[] = [];

let continuar: boolean = true;
let contador: number = 1;

while (continuar) {
    let notas: number[] = [];
    let quantidadeNotas: number = readlineSync.questionInt(`Digite a quantidade de notas do aluno ${contador}: `);

    for (let i = 0; i < quantidadeNotas; i++) {
        let nota: number = readlineSync.questionFloat(`Digite a nota ${i + 1} do aluno ${contador}: `);
        notas.push(nota);
    }

   
    let eficiencia: number = calcularEficiencia(notas);


    resultados.push({ Amostra: notas.join(', '), Eficiencia: eficiencia.toFixed(3) });

  
    let resposta: string = readlineSync.question('Deseja inserir outro aluno? (S/N): ');
    if (resposta.toUpperCase() !== 'S') {
        continuar = false;
    }

    contador++;
}


console.log("Matriz de Resultados:");
console.table(resultados);
