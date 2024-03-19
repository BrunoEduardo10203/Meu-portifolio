 document.querySelector(".formulario__enviar").addEventListener('click', function() {
    
        fetch('/send-email') // Rota que você definirá no seu servidor Node.js
            .then(response => response.json())
            .then(data => {
                console.log(data.message); // Exibe a mensagem enviada pelo servidor
                alert(data.message); // Exibe um alerta com a mensagem
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Erro ao enviar email. Verifique o console para mais detalhes.');
            });
    });