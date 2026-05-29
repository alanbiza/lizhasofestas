// Configura a data do grande evento: 31 de Maio de 2026 às 10:00:00
const eventDate = new Date('May 31, 2026 10:00:00').getTime();

const updateCountdown = setInterval(() => {
    // Pega o momento atual
    const now = new Date().getTime();
    
    // Calcula a distância entre o agora e a data do show
    const distance = eventDate - now;
    
    // Cálculos de tempo para Dias, Horas, Minutos e Segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Injeta os valores calculados diretamente no HTML de forma bonita (adicionando o zero à esquerda)
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
    
    // Se o cronômetro chegar ao fim, exibe uma mensagem
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector('.countdown-container').innerHTML = "<p class='countdown-title' style='color:#00ff66; font-size:1.5rem;'>O SHOW JÁ COMEÇOU! 🚀</p>";
    }
}, 1000);