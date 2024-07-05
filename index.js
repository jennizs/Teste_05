"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
function calcularEficiencia(notas) {
    var soma = notas.reduce(function (acc, nota) { return acc + nota; }, 0);
    var media = soma / notas.length;
    var alunosAcimaMedia = notas.filter(function (nota) { return nota > media; }).length;
    var eficiencia = (alunosAcimaMedia / notas.length) * 100;
    return eficiencia;
}
// Matriz para armazenar os resultados
var resultados = [];
var continuar = true;
var contador = 1;
while (continuar) {
    var notas = [];
    var quantidadeNotas = readlineSync.questionInt("Digite a quantidade de notas do aluno ".concat(contador, ": "));
    for (var i = 0; i < quantidadeNotas; i++) {
        var nota = readlineSync.questionFloat("Digite a nota ".concat(i + 1, " do aluno ").concat(contador, ": "));
        notas.push(nota);
    }
    // Calcular a eficiência para o aluno atual
    var eficiencia = calcularEficiencia(notas);
    // Armazenar o resultado na matriz
    resultados.push({ Amostra: notas.join(', '), Eficiencia: eficiencia.toFixed(3) });
    // Perguntar se deseja continuar inserindo alunos
    var resposta = readlineSync.question('Deseja inserir outro aluno? (S/N): ');
    if (resposta.toUpperCase() !== 'S') {
        continuar = false;
    }
    contador++;
}
// Exibir a matriz com os resultados
console.log("Matriz de Resultados:");
console.table(resultados);
