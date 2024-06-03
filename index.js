function animateText(textElement, text, index) {
    const words = text.split(' ');
    
    if (index < words.length) {
        const word = words[index];
        if (word === 'Tech' || word === 'Club') {
            textElement.innerHTML += '<span style="color: #1affff">' + word + '</span> ';
        } else {
            textElement.textContent += word + ' ';
        }
        index++;
        setTimeout(function() {
            animateText(textElement, text, index);
        }, 400);
    } else {
        index = 0;
        textElement.textContent = '';
        setTimeout(function() {
            animateText(textElement, text, index);
        }, 0);
    }
}

const welcomeMessage = document.getElementById("welcome-message");

animateText(welcomeMessage, "Welcome to Tech Club", 0);
