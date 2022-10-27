import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Giovane", 11122233309 ); //Com o constructor definido foi possível encurtar a criação do cliente deixando apenas os valores nos () ao invés de adiciona-los individualmente

//ctrl + alt (pra baixo ou pra cima) cria multiplos cursores para se usar

const contaCorrenteGiovane = new ContaCorrente(cliente1, 1001);
contaCorrenteGiovane.depositar(500);

const cliente2 = new Cliente("Alice", 88822233309 );
const conta2 = new ContaCorrente(cliente2, 1002);

let valor = 200; //Fazendo uma variável para poder controlar melhor e simplificar a introdução de valor
contaCorrenteGiovane.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);
//Fiz um arquivo packages.json para o terminal do node entender o index como um módulo e então rodar todos arquivos juntos