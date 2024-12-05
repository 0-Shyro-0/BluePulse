document.addEventListener('DOMContentLoaded', function() {
    // Header en bas
    const header = document.createElement('header');
    header.textContent = "Je suis le header mais en bas.";
    header.style.position = 'fixed';
    header.style.bottom = '0';
    header.style.width = '100%';
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.textAlign = 'center';
    header.style.padding = '10px';
    document.body.appendChild(header);

    // Footer en haut
    const footer = document.createElement('footer');
    footer.textContent = "Je suis le footer mais en haut.";
    footer.style.position = 'fixed';
    footer.style.top = '0';
    footer.style.width = '100%';
    footer.style.backgroundColor = '#555';
    footer.style.color = '#fff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    document.body.appendChild(footer);

    // Phone number slider
    const phoneSlider = document.getElementById('phone');
    const phoneDisplay = document.getElementById('phoneDisplay');
    
    phoneSlider.addEventListener('input', function() {
        phoneDisplay.textContent = `Current number: ${this.value}`;
        document.body.style.backgroundColor = `#${this.value.slice(0, 6)}`;
    });

    // Scroll en bas automatiquement
    function scrollToBottom() {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    // Random popup generator
    setInterval(() => {
        if (Math.random() < 0.1) {
            showPopup();
        }
    }, 5000);

    // Auto-playing music (browser might block this)
    const audio = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgA');
    audio.loop = true;
    document.body.addEventListener('click', () => audio.play());

    // Random element movement with auto-scroll
    document.querySelectorAll('*').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transform = `translate(${Math.random() * 20}px, ${Math.random() * 20}px)`;
            scrollToBottom();
        });
    });

    // RGB dynamique sur le body
    setInterval(() => {
        document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }, 500);

    // Bouton qui se téléporte
    const button = document.createElement('button');
    button.textContent = "Clique-moi si tu peux !";
    button.style.position = 'absolute';
    button.style.left = '50%';
    button.style.top = '50%';
    button.style.transform = 'translate(-50%, -50%)';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    document.body.appendChild(button);

    button.addEventListener('click', () => {
        button.style.left = `${Math.random() * 90}vw`;
        button.style.top = `${Math.random() * 90}vh`;
    });

    // Annoying popup function
    function showPopup() {
        const messages = [
            "🎉 CONGRATULATIONS! You're the 1,000,000th visitor!",
            "⚠️ WARNING: Your computer needs cleaning!",
            "💥 CLICK OK TO CLAIM YOUR FREE PRIZE!",
            "🎯 Hot singles in your area want to meet you!",
            "🌟 You've won a free iPhone 15! (from 1970)"
        ];
        
        alert(messages[Math.floor(Math.random() * messages.length)]);
    }

    // Increment visitor counter randomly
    setInterval(() => {
        const counter = document.getElementById('counter');
        if (counter) {
            counter.textContent = parseInt(counter.textContent) + Math.floor(Math.random() * 100);
        }
    }, 1000);

    // Make cursor follow rainbow trail
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.width = '10px';
        trail.style.height = '10px';
        trail.style.borderRadius = '50%';
        trail.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.pointerEvents = 'none';
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    });

    // Scroll en bas en boucle
    setInterval(scrollToBottom, 2000);
});
