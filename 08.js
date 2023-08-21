"use strict";
//variáveis
var nome = 'Ely';
var pagamento = 120.56;
var linguagem = 'TypeScript';
//interpolação
var frase = "Meu nome \u00E9 ".concat(nome, "\n My payment time is ").concat(pagamento, "\n And\n my preffered language is ").concat(linguagem);
console.log(frase);
