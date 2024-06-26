const botoesVisualizar = document.querySelectorAll('.visualizar');
const pdfEmbed = document.getElementById('pdf-embed');

botoesVisualizar.forEach(botao => {
  botao.addEventListener('click', () => {
    const pdfCaminho = botao.getAttribute('data-pdf');
    pdfEmbed.src = pdfCaminho;

    botoesVisualizar.forEach(btn => btn.classList.remove('active')); 
    botao.classList.add('active'); 
  });
});

