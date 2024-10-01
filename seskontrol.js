document.addEventListener('DOMContentLoaded', () => {
    const btnmuzik = document.getElementById('muzik-ackapa');
    const bgmuzik = document.getElementById('arkaplan-muzik');

    bgmuzik.volume = 0.5;

    let baslatilik = true;

    bgmuzik.play().catch(error => {
        console.error('muzik bozuk abi / header', error);
    });

    function toggleSound(event) {
        const btnmuzik = event.currentTarget;
        if (baslatilik) {
            bgmuzik.pause();
            btnmuzik.innerHTML = '<i class="fa fa-volume-mute"></i>';
            console.log('muzik durdu');
        } else {
            bgmuzik.play().then(() => {
                btnmuzik.innerHTML = '<i class="fa fa-volume-up"></i>';
                console.log('muzik basladi');
            }).catch(error => {
                console.error('muzik bozuk abi', error);
            });
        }
        baslatilik = !baslatilik;
    }

    btnmuzik.addEventListener('click', toggleSound);
});
