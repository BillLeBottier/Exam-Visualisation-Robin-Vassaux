document.addEventListener('DOMContentLoaded', () => {
    const counterElement = document.getElementById('counter');
    let counter = 0;

    const updateCounter = () => {
        counterElement.textContent = counter;
        checkSpecialAlert();
    };
    const checkSpecialAlert = () => {
        if (counter === 13) {
            alert('Attention Jason est peut-être derrière toi ...');
        }
    };
    document.getElementById('increase-btn').addEventListener('click', () => {
        counter++;
        updateCounter();
    });
    document.getElementById('decrease-btn').addEventListener('click', () => {
        counter--;
        updateCounter();
    });
    document.getElementById('reset-btn').addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });

    updateCounter();
});
