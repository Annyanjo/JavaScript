let preco = 19.99;
let desconto = 0.1;

//Usando template literais com expressoes matematico
let precoFinal = 'O preço final do produto com desconto é ${preco + (1 - desconto)} reais.';
console.log(precoFinal); // Saída: "O preço final do produto com desconto é 17.991 reais."