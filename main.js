document.addEventListener("DOMContentLoaded", function () {
    const countDownDate = new Date('10 september,2022').getTime();
    setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60*60));
        let minutes = Math.floor((distance % (1000*60*60))/(1000*60));
        let seconds = Math.floor((distance % (1000*60)/1000));
        changeText('days', days)
        changeText('hours',hours)
        changeText('minutes',minutes)
        changeText('seconds', seconds)
      
    }, 1000)
 
    function changeText(ele,newText) {
        let element = document.querySelector("." + ele);
        return element.innerText = newText;
    }
   
 
})