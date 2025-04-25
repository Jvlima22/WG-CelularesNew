// Lista de serviços
const services = [
    "Atualização de Software",
    "Troca de tela",
    "Reparo",
    "Troca de Flex e Bateria",
    "Desbloqueio",
    "Desoxidação",
    "Placa e CPU"
];

// Função para atualizar o texto do carrossel
function updateService() {
    const serviceElement = document.getElementById("service-carousel");
    let currentService = serviceElement.innerText;

    // Encontra o índice do serviço atual na lista de serviços
    let currentIndex = services.indexOf(currentService);
    
    // Incrementa o índice e faz o loop se necessário
    currentIndex = (currentIndex + 1) % services.length;

    // Atualiza o texto do carrossel
    serviceElement.innerText = services[currentIndex];
}

// Chama a função de atualização a cada 2 segundos (2000 milissegundos)
setInterval(updateService, 2000);
