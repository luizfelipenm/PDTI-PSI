const botoesVisualizar = document.querySelectorAll('.visualizar');
const pdfViewer = document.querySelector('.pdf-viewer'); // Seleciona o container do PDF

botoesVisualizar.forEach(botao => {
  botao.addEventListener('click', () => {
    const pdfCaminho = botao.dataset.pdf; // Usa dataset para obter o caminho do PDF

    // Remove a classe 'active' de todos os botões
    botoesVisualizar.forEach(btn => btn.classList.remove('active'));
    botao.classList.add('active'); 

    // Verifica se o visualizador já contém um iframe
    const iframeExistente = pdfViewer.querySelector('iframe');
    if (iframeExistente) {
      // Se existir, atualiza o src do iframe
      iframeExistente.src = pdfCaminho;
    } else {
      // Se não existir, cria um novo iframe
      const iframe = document.createElement('iframe');
      iframe.src = pdfCaminho;
      iframe.classList.add('pdf'); // Adiciona a classe 'pdf' para o estilo
      pdfViewer.appendChild(iframe);
    }
  });
});


