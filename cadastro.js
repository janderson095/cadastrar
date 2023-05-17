let area = document.getElementById('area');
let botao = document.getElementById("botao");

var nomeCadastro = ["Janderson", "Miguel", "Monique", "Maria", "Paulo"];

function entrar() {
    let nome = prompt("Digite o seu nome");
    let isMatch = false;

    for (let i = 0; i < nomeCadastro.length; i++) {
        if (nomeCadastro[i] === nome) {
            area.innerHTML = "Bem-vindo " + nome + "<br>";
            let botaoSair = document.createElement("button");
            botaoSair.innerText = "Sair da conta";
            botaoSair.onclick = sair;
            area.appendChild(botaoSair);
            botao.removeAttribute("hidden");
            isMatch = true;
            break;
        }
    }

    if (!isMatch) {
        alert("Nome não cadastrado. Favor realizar o cadastro!");
    }
}

function sair() {
    alert("Até a próxima!");
    area.innerHTML = "Você saiu!" + "<br>";
}


// let area = document.getElementById('area');
// let botao = document.getElementById("botao");

// var nomeCadastro = [5];
// nomeCadastro[0] = "Janderson";
// nomeCadastro[1] = "Miguel";
// nomeCadastro[2] = "Monique";
// nomeCadastro[3] = "Maria";
// nomeCadastro[4] = "Paulo";

// function entrar() {
//     let nome = prompt("Digite o seu nome");

// if (nome != nomeCadastro[i]) {
    //             alert("Ops, algo deu errado!!!");
    //             area.innerHTML = "Clique no botão para acessar";}

//     for (i = 0; i < nomeCadastro.length; i++) {
//        
//         } else {
//             if (nomeCadastro == nome) {
//                 area.innerHTML = "Bem vindo " + nome + "<br>";
//                 let botaoSair = document.createElement("button");
//                 botaoSair.innerText = "Sair da conta";
//                 botaoSair.onclick = sair;
//                 area.appendChild(botaoSair);
//                 botao.removeAttribute("hidden");
//             } else {
//                 alert("Nome não cadatrado, favor realizar cadastro!")
//             }

//         }
//     }
// }
// function sair() {
//     alert("Até a próxima!")
//     area.innerHTML = ("Você saiu!" + "<br>")
// }





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