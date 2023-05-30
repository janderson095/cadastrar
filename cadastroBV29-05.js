let area = document.getElementById('area');
let botao = document.getElementById("botao");

nomeCadastro = [];

function entrar() {
    let encontrou = false;
    let nome = prompt("Digite o seu nome");

    if (nome === '' || nome === null) {
        alert("Ops, algo deu errado!!!");
        area.innerHTML = "Clique no botão para acessar";
    } else {
        for (let i = 0; i < nomeCadastro.length; i++) {
            if (nomeCadastro[i] == nome) {
                area.innerHTML = "Bem vindo " + nome + "<br>";
                let botaoSair = document.createElement("button");
                botaoSair.innerText = "Sair da conta";
                botaoSair.onclick = sair;
                area.appendChild(botaoSair);
                botao.setAttribute("hidden", "true");
                botao1.setAttribute("hidden", "true");
                encontrou = true;
            }
        }
    }
    if (encontrou == false) {
        alert("Nome não cadastrado, favor realizar cadastro!");
    }
}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu"
    botao.removeAttribute("hidden", "false");
}

function cadastrarUsuario() {
    var nome = prompt("Digite o seu nome");

    if (nome == "" || nome == null) {
        alert("Por favor Preencher todos os Campos!");
    }

    else {
        //pega o valor que estamos adicionando e joga no final da array
        var cadastrando = nomeCadastro.push(nome);
        console.log(nomeCadastro)
        area.innerHTML = "Cadastro efetuado com Sucesso";
        let botaoInicio = document.createElement("button");
        botaoInicio.innerText = "Inicio";
        botaoInicio.onclick = inicio;
        area.appendChild(botaoInicio);
        botao.setAttribute("hidden", "true");
    }

}

function inicio() {
    alert("Até mais!");
    area.innerHTML = "Inicio"
    botao.removeAttribute("hidden", "false");
}

