let abrigos = [];


function cadastrarAbrigo() {
    const nome = prompt("Digite o nome do abrigo:");
    const endereco = prompt("Digite o endereço do abrigo:");
    const cidade = prompt("Digite a cidade do abrigo:");
    const telefone = prompt("Digite o telefone do abrigo:");
    const capacidade = prompt("Digite a capacidade de lotação do abrigo:");

    
    abrigos.push({
        nome,
        endereco,
        cidade,
        telefone,
        capacidade: Number(capacidade),
    });

    alert("Abrigo cadastrado com sucesso!");
}


function listarAbrigos() {
    if (abrigos.length === 0) {
        alert("Não há abrigos cadastrados.");
        return;
    }

    let lista = "===== LISTA DE ABRIGOS =====\n";
    abrigos.forEach((abrigo, index) => {
        lista += `${index + 1}. ${abrigo.nome} - ${abrigo.endereco}, ${abrigo.cidade} - Telefone: ${abrigo.telefone} - Capacidade: ${abrigo.capacidade}\n`;
    });

    alert(lista);
}

function procurarAbrigo() {
    const cidade = prompt("Digite a cidade para procurar abrigos:");
    const resultados = abrigos.filter(abrigo => abrigo.cidade.toLowerCase() === cidade.toLowerCase());

    if (resultados.length === 0) {
        alert("Nenhum abrigo encontrado na cidade informada.");
        return;
    }

    let listaResultados = "===== RESULTADOS =====\n";
    resultados.forEach((abrigo, index) => {
        listaResultados += `${index + 1}. ${abrigo.nome} - ${abrigo.endereco} - Telefone: ${abrigo.telefone} - Capacidade: ${abrigo.capacidade}\n`;
    });

    alert(listaResultados);
}


function menu() {
    let opcao;
    do {
        opcao = prompt("===== ABRIGOS TEMPORÁRIOS =====\n1. Cadastrar abrigo\n2. Listar abrigos\n3. Procurar abrigo\n4. Sair\nEscolha uma opção:");
        switch (opcao) {
            case '1':
                cadastrarAbrigo();
                break;
            case '2':
                listarAbrigos();
                break;
            case '3':
                procurarAbrigo();
                break;
            case '4':
                alert("Saindo do programa...");
                break;
            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (opcao !== '4');
}


menu();



