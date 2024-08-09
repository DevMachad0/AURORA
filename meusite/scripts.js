function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    if (sidebar.style.width === '60px') {
        sidebar.style.width = '250px';
        toggleBtn.style.left = '250px';
        document.querySelectorAll('.sidebar ul li a').forEach(el => el.style.display = 'block');
        document.querySelector('.sidebar .logo').style.opacity = '1';
    } else {
        sidebar.style.width = '60px';
        toggleBtn.style.left = '60px';
        document.querySelectorAll('.sidebar ul li a').forEach(el => el.style.display = 'none');
        document.querySelector('.sidebar .logo').style.opacity = '0';
    }
}

document.addEventListener('scroll', function() {
    const main = document.querySelector('main');
    const scrolled = window.scrollY > 100; // Altere este valor conforme necessário
    document.body.classList.toggle('scrolled', scrolled);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Realize o envio do formulário usando AJAX ou fetch API
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            // Exibe a mensagem de sucesso com transição suave
            const successMessage = document.getElementById('successMessage');
            successMessage.classList.add('show');
            successMessage.style.opacity = '1';

            // Limpa os campos do formulário
            this.reset();

            // Esconde a mensagem após alguns segundos (opcional)
            setTimeout(() => {
                successMessage.style.opacity = '0';
                setTimeout(() => successMessage.classList.remove('show'), 500);
            }, 5000);
        } else {
            // Trate o erro (se necessário)
            alert('Houve um problema ao enviar o formulário. Tente novamente mais tarde.');
        }
    });
});
