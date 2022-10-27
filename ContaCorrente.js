import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){ //Fazendo com que o cliente seja privado e apenas retorne um valor do tipo do cliente, qualquer outro tipo de valor é undefined
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente; //Usando um assessor para que o valor cliente seja retornado no terminal
    }


    _saldo = 0; //Como a proposta de campos privados ainda não foi aceita se usa o underline ( "_" ) para informar que um atributo é privado e não deve ser acessado de fora

    get saldo(){ //O assessor sempre será público, mesmo que ele derive de um elemento privado
        return this._saldo; //Usando apenas o get se torna impossível mudar o saldo no código pois ele apenas tem assessor para a pegada e não para a atribuição de valor
    }

    constructor (cliente, agencia){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){ //Usamos os métodos para dar nomes a ações que irão se repetir muito em nosso código além de definir o comportamento ou maneira de fazer algo
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor; //Retornando o valor para ele ser trabalhado depois no código
        }
    }

    depositar(valor){
        if(valor <= 0) return; //Fazer um early return ajuda para diminuir o if, deixando apenas os parâmetros que você não quer e então retornando eles para o código seguir
        this._saldo += valor;
    }

    transferir(valor, conta){ //Pelo método é possível alterar as referências recebidas dos objetos, mas uma variável é imutável pelo método
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado); 
    }
}