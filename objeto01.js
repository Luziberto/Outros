//como criar objeto?
//literal
var objPessoa01 = {nome: 'Marcos'};
console.log(objPessoa01.nome);

//por construtor
var objPessoa02 = new Object();
objPessoa02.nome = 'Maria';
console.log(objPessoa02.nome);

//Object.create que irá criar um objeto com protótipo

var objPessoa03 = Object.create(Object.prototype);
objPessoa03.nome = 'joão';
console.log(objPessoa03.nome);

//funções construtoras
var obj01 = new Object();
var obj02 = new Array(1,2,3);
var obj03 = new Date(); //data atual
var obj04 = new Error("Ocorreu um erro");
var obj05 = new RegExp(/teste/);
var obj06 = new Function("parametroNome", "return 'olá ' + parametroNome + '!'");
console.log(obj06("João"));

//Criar objeto literal
var objetoPessoa = {
	nome: "João Pedro Da Silva",
	cpf: "123456789023",
	dataNascimento: new Date(1981, 03, 14),
	ativo: true,
	"teste prop": "teste",
	contatos: new Array(123, 12490, 12123),
	endereco: {rua: "Rua A", numero: 2534, cep: 123767182637},
	saudacao: function (){
		return "Olá, me chamo " + this.nome + " !";
	}
};
	console.log(objetoPessoa);

	//acessar propriedades
	console.log("nome: " + objetoPessoa.nome);
	console.log("cpf: " + objetoPessoa.cpf);
	console.log("data de nascimento: " + objetoPessoa.dataNascimento);
	console.log("ativo: " + objetoPessoa.ativo);
	console.log("teste: " + objetoPessoa["teste prop"]);
	console.log("contato: " + objetoPessoa.contatos[0]);

for (var i of objetoPessoa.contatos){
	console.log("Contato: ", i);
}
console.log(objetoPessoa.endereco.rua);

for (var i in objetoPessoa.endereco){
	console.log(objetoPessoa.endereco[i]);
	console.log(i);
}

//Chamar Método

console.log(objetoPessoa.saudacao());

//criar um objeto com construtor object

var objetoProduto = new Object();
objetoProduto.nome = "mesa";
objetoProduto.preco = 89.99;
objetoProduto.dimensoes = {largura: "1m", comprimeiro: "1.5m", altura: "90c"};
objetoProduto.dimensoes.tamanho = "2m";
objetoProduto["Nome no formato string valido"] = "deu certo";
var nomeProp = "novoNome";
objetoProduto[nomeProp] = "deu certo o novo nome";
objetoProduto[""] = "vazio";
objetoProduto["123"] = 123;

//acessa usando operador membro
console.log("nome: ", objetoProduto["nome"]);
console.log("Altura: ", objetoProduto.dimensoes.altura);
console.log("cubo: ", objetoProduto.dimensoes.cubo); // undefined
//console.log("nome: ", objetoProduto.dimensoes.cubo.valor); Exception
console.log(objetoProduto["Nome no formato string valido"]);
console.log("Novo Nome", objetoProduto["novoNome"]);
console.log("Novo Nome", objetoProduto[nomeProp]);
console.log("Novo Nome", objetoProduto.novoNome);
console.log("objetoProduto['']", objetoProduto[""]);
console.log("objetoProduto['123']" , objetoProduto["123"]);

for (var elemento in objetoProduto.dimensoes){
	console.log(elemento, objetoProduto.dimensoes[elemento]);
}

//O objeto por 
var obj1 = {matricula: 17};
console.log("obj1 matricula: ", obj1.matricula);
var obj2 = obj1;
console.log("obj2 matricula: ", obj2.matricula);
obj2.matricula = 28;

