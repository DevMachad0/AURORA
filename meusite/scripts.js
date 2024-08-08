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
