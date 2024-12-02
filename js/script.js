if (768 >= window.innerWidth) {
  const dashboardToggle = document.querySelector('.icon-dashboard');

  dashboardToggle?.addEventListener('click', () => {
    document.documentElement.classList.toggle('close-dashboard');
  });
}
