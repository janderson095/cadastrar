// let area = document.getElementById('area');
// let botao = document.getElementById("botao");

// var nomeCadastro = [];
// nomeCadastro[0] = 'Janderson';
// nomeCadastro[1] = 'Miguel';
// nomeCadastro[2] = 'Monique';
// nomeCadastro[3] = 'Maria';
// nomeCadastro[4] = 'Paulo';

// function entrar() {
//     let nome = prompt("Digite o seu nome");
//     let i;

//     for (i = 0; i < nomeCadastro.length; i++) {
//         if (nome == nomeCadastro[i]) {
//             area.innerHTML = "Bem vindo " + nome + "<br>";
//             let botaoSair = document.createElement("button");
//             botaoSair.innerText = "Sair da conta";
//             botaoSair.onclick = sair;
//             area.appendChild(botaoSair);
//             botao.setAttribute("hidden", "true");
//             return;
//         }
//     }

//     alert("Nome não cadastrado, favor realizar cadastro!");
//     area.innerHTML = "Clique no botão para acessar";
// }

// function sair() {
//     area.innerHTML = "Clique no botão para acessar";
//     botao.removeAttribute("hidden");
// }

let area = document.getElementById('area');
let botao = document.getElementById("botao");
nomeCadastro = ["F1", "F2", "F3", "F4", "F5"];

function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i < 5; i++) {
            if (nomeCadastro[i] == nome) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                encontrou = true;
            }
        }
    }
    if (encontrou == false){
        alert("Nome não cadastrado, favor realizar cadastro!");
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden", "false");
}
