export class Cliente { //Uma classe é uma maneira de salvar várias propriedades sem repeti-las a todo momento 
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){ //Com o constructor o cpf só será atribuído durante a criação do cliente e nunca mais poderá ser alterado
        this.nome = nome;
        this._cpf = cpf;
    }
}

//Dividindo minhas classes em arquivos separados para melhor organização e exportandi eles para o index através do export/import