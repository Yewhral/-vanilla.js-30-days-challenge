function setDate() {
    const secondsHand = document.querySelector('.seconds');
    const minutesHand = document.querySelector('.minutes');
    const hoursHand = document.querySelector('.hours');

    const dateNow = new Date();
    const seconds = dateNow.getSeconds();
    const minutes = dateNow.getMinutes();
    const hours = dateNow.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 60) * 360) + 90;

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);