const eventData = new Date("Apr 03, 2024, 19:00:00");
const eventTimeSpent = eventData.getTime();

const countHours = setInterval(function ()  {
    
    const now = new Date();
    const nowTimeSpent = now.getTime();
    const distanceEvent = eventTimeSpent - nowTimeSpent;

    const daysLefts = Math.floor(distanceEvent / (1000 * 60 * 60 * 24));
    const hoursLefts = Math.floor((distanceEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLefts = Math.floor((distanceEvent % (1000 * 60 * 60)) / (1000 * 60))
    const secondsLefts = Math.floor(distanceEvent % (1000 * 60) / 1000)

    document.getElementById('contador').innerHTML = `${daysLefts}d ${hoursLefts}h ${minutesLefts}m ${secondsLefts}s`

    if (distanceEvent < 0) {
        clearInterval(countHours);
        document.getElementById('contador').innerHTML = "Evento expirado"
    }

}, 1000);