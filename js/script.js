
function meuFormulario(){

    const formulario = document.querySelector('.formulario');
    const resultado = document.getElementById('resultado');

    const pessoa = [];

    function receberDados (evento){
        evento.preventDefault(); /*Faz com que o botão de enviar não atualize a página*/

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        console.log(pessoa);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    }

    formulario.addEventListener('submit', receberDados);

}

meuFormulario();
