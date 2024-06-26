const botoesVisualizar = document.querySelectorAll('.visualizar');
const pdfEmbed = document.getElementById('pdf-embed');

botoesVisualizar.forEach(botao => {
    botao.addEventListener('click', () => {
        const pdfCaminho = botao.getAttribute('data-pdf');
        pdfEmbed.src = pdfCaminho; 
    });
});
