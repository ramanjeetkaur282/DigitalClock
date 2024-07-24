window.onload=()=>{

    function digClock(){
    console.log("Raman");

    const date= new Date();
    console.log(date);

    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();

    hours=hours <10 ? "0" + hours : hours;
    minutes=minutes <10 ? "0" + minutes : minutes;
    seconds=seconds <10 ? "0" + seconds : seconds;

    document.querySelector('#clockHours').innerText=hours;
    document.querySelector('#clockMinutes').innerText=minutes;
    document.querySelector('#clockSeconds').innerText=seconds;

    setTimeout(digClock,1000);
    }
    digClock();
}