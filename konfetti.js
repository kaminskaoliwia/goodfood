
const form = document.querySelector('#form');
const canvas = document.querySelector('#konfetti');

const jsConfetti = new JSConfetti();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    jsConfetti.addConfetti({
        emojis: ['🍕', '🌮', '🍜', '🍙', '🥟', '🍔'],
    })

    setTimeout(() => {
        form.submit(); 
    }, 3000);
})

