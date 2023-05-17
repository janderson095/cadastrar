let area = document.getElementById('area');
let botao = document.getElementById("botao");

var nomeCadastro = [];
nomeCadastro[0] = 'Janderson';
nomeCadastro[1] = 'Miguel';
nomeCadastro[2] = 'Monique';
nomeCadastro[3] = 'Maria';
nomeCadastro[4] = 'Paulo';

function entrar() {
    let nome = prompt("Digite o seu nome");
    let i;

    for (i = 0; i < nomeCadastro.length; i++) {
        if (nome == nomeCadastro[i]) {
            area.innerHTML = "Bem vindo " + nome + "<br>";
            let botaoSair = document.createElement("button");
            botaoSair.innerText = "Sair da conta";
            botaoSair.onclick = sair;
            area.appendChild(botaoSair);
            botao.setAttribute("hidden", "true");
            return;
        }
    }

    alert("Nome não cadastrado, favor realizar cadastro!");
    area.innerHTML = "Clique no botão para acessar";
}

function sair() {
    area.innerHTML = "Clique no botão para acessar";
    botao.removeAttribute("hidden");
}







// var area = document.getElementById('area');

// var nomeCadastro = [];
// nomeCadastro[0] = "Janderson";
// nomeCadastro[1] = "Miguel";
// nomeCadastro[2] = "Monique";
// nomeCadastro[3] = "Maria";
// nomeCadastro[4] = "Paulo";


// let botaoEntrar = document.createElement("button");
// botaoEntrar.innerHTML = "Entrar na Conta";
// botaoEntrar.onclick = entrar;
// area.appendChild(botaoEntrar);

// function entrar() {
//     let nome = prompt("Por favor, digite o nome Cadastrado");

//     for (i = 0; i < nomeCadastro.length; i++) {

//         if (nome != nomeCadastro[i]) {
//             alert("Por favor verifique o seu acesso!");
//             area.innerHTML = "Clique no botão gerar o Acesso em nosso sistema... ";

//             let botaoEntrar = document.createElement("button");
//             botaoEntrar.innerHTML = "Entrar na Conta";
//             botaoEntrar.onclick = entrar;
//             area.appendChild(botaoEntrar);
//         }

//         else {
//             area.innerHTML = "Bem-Vindo(a), " + nome + " !<br>";

//             let botaoSair = document.createElement("button");
//             botaoSair.innerHTML = "Sair da Conta";
//             botaoSair.onclick = sair;
//             area.appendChild(botaoSair);
//         }
//     }
// }

// function sair() {
//     alert("Até a próxima!")
//     area.innerHTML = ("Você saiu!" + "<br>")

//     let botaoEntrar = document.createElement("button");
//     botaoEntrar.innerHTML = "Entrar na Conta";
//     botaoEntrar.onclick = entrar;
//     area.appendChild(botaoEntrar);

// }


// izaias.vieira@sp.senai.br