import './styles.css';


    const startBtn = document.querySelector('button[data-action="start"]');
    const stopBtn = document.querySelector('button[data-action="stop"]');
    const body = document.querySelector(`body`);

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

    let isActive = false;
    let intervalId = null;

    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

    startBtn.addEventListener(`click`,startColorSwitch);
    
    function startColorSwitch(arr){
              if(isActive){
                  return;
              }
              intervalId = setInterval(() => {
                isActive = true;
                console.log(body.style.background = colors[randomIntegerFromInterval(0, colors.length-1)]);
              }, 1000);
            };

            const stopColorSwitch = () =>{
                isActive = false;
                clearInterval(intervalId);
            }

            stopBtn.addEventListener(`click`,stopColorSwitch);









  