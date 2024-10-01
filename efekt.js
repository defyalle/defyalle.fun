document.addEventListener('DOMContentLoaded', () => {
    const sectionDiv = document.querySelector('section div');
    const socialLinks = document.querySelector('.social-links');

    sectionDiv.addEventListener('mousemove', (event) => {
        const { offsetWidth, offsetHeight } = sectionDiv;
        const x = (event.offsetX / offsetWidth) - 0.5;
        const y = (event.offsetY / offsetHeight) - 0.5;

        const rotateY = x * 25;
        const rotateX = -y * 20;

        sectionDiv.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
        sectionDiv.style.transition = 'transform 0.1s ease';
    });

    sectionDiv.addEventListener('mouseleave', () => {
        sectionDiv.style.transition = 'transform 0.3s ease';
        sectionDiv.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    socialLinks.addEventListener('mousemove', (event) => {
        event.stopPropagation();
    });
});
