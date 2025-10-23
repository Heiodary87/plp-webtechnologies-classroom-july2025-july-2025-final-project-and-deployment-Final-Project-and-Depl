// ================= NAV MENU =================
const navList = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('nav ul li a');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
}

// ================= FEATURE BUTTONS =================
const bmiBtn = document.querySelector('.bmiBtn');
const workoutBtn = document.querySelector('.workoutBtn');
const sleepBtn = document.querySelector('.sleepBtn');
const mindBtn = document.querySelector('.mindBtn');

if (bmiBtn) {
  bmiBtn.addEventListener('click', () => {
    window.location.href = 'bmi.html';
  });
}

if (workoutBtn) {
  workoutBtn.addEventListener('click', () => {
    window.location.href = 'workout.html';
  });
}

if (sleepBtn) {
  sleepBtn.addEventListener('click', () => {
    window.location.href = 'sleep.html';
  });
}

if (mindBtn) {
  mindBtn.addEventListener('click', () => {
    window.location.href = 'mind.html';
  });
}

//====================BMI CALCULATOR=====================

const calculateBtn = document.getElementById('calculateBtn');
const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height'); 
const resultDiv = document.querySelector('.bmiResult');

if(calculateBtn){
   calculateBtn.addEventListener('click', ()=>{
     const weight= parseFloat(weightInput.value)
     const height= parseFloat(heightInput.value) / 100; // convert cm to meters

     if(isNaN(weight)|| isNaN(height)|| weight<=5 || height<=0){ 
      resultDiv.innerHTML= "<p class='error'>Please enter valid weight and height values.</p>";
      resultDiv.classList.add('on') 

      setTimeout(() => {
         resultDiv.innerHTML= '' 
         resultDiv.classList.remove('on')
         weightInput.value= ''; 
         heightInput.value= '' 
        }, 3000);

     }else{
       const bmi= (weight / (height * height)).toFixed(2);
        let category;
         if(bmi<18.5){ category= 'Underweight'; 

         }else if(bmi>=18.5 && bmi<24.9){ category= 'Normal weight';

          } else if(bmi>=25 && bmi<29.9){ category= 'Overweight'; 

          } else{ category= 'Obesity'; 

          } // Result Display
          
        function resultDiplay(bmi, category) { 
          const heading= document.createElement('h3');
          const bmiValue= document.createElement('p');
          const bmiCategory= document.createElement('p');
          const bmiExplanation= document.createElement('p');
          const image= document.createElement('img');
          const advice= document.createElement('p'); 
          const resetBtn= document.createElement('button')

          heading.textContent= 'Your BMI Result:';
          heading.classList.add('above');
          bmiValue.textContent= `Body Mass Index Value: ${bmi} kg/m²` ;
          bmiCategory.textContent= `Category: ${category}`;
          bmiCategory.classList.add('written')
          bmiValue.classList.add('written')
          bmiExplanation.textContent= 'Please read the chart below for confirmation.'
          bmiExplanation.classList.add('written')
          image.src= 'images/chart.jpg'; 
          image.alt= 'BMI Chart'; 
          image.classList.add('show') 
          if(category === 'Underweight'){
             advice.textContent= 'Advice: Consider a balanced diet to gain weight healthily.'; 
            } else if(category === 'Normal weight'){
             advice.textContent= 'Advice: Maintain your current lifestyle to keep a healthy weight.'; 
            } else if(category === 'Overweight'){ 
             advice.textContent= 'Advice: Incorporate regular exercise and a healthy diet to lose weight.'; 
            } else{ advice.textContent= 'Advice: Consult a healthcare professional for personalized guidance.';
            } 
            advice.classList.add('writtenLast')
            resetBtn.textContent= 'Calculate Again';
            resetBtn.addEventListener('click', () => { 
              resultDiv.innerHTML= ''; 
              weightInput.value= ''; 
              heightInput.value= ''; 
              resultDiv.classList.remove('on');
              resultDiv.style.display= 'none'; 
              }); 

            resultDiv.appendChild(heading); 
            resultDiv.appendChild(bmiValue); 
            resultDiv.appendChild(bmiCategory);
            resultDiv.appendChild(bmiExplanation); 
            resultDiv.appendChild(image); 
            resultDiv.appendChild(advice); 
            resultDiv.appendChild(resetBtn); 
            resultDiv.classList.add('on'); 
            resultDiv.classList.remove('bmiResult'); 
          } 
          resultDiplay(bmi, category); 
        } 
      
      }) 
    }


    //====================SLEEP TRACKER=====================

    const calculateSleep = document.getElementById('calculateSleep');
    const sleepStart = document.getElementById('sleepStart');
    const sleepEnd = document.getElementById('sleepEnd');
    const sleepRest = document.getElementById('sleepRest');
    const sleepResult= document.querySelector('.sleepResult')
    const sleepTips= document.querySelector('.sleepTips')

    if(calculateSleep){

      function sleepDisplay(sleepHours){
        const heading= document.createElement('h2')
        const totalSleep= document.createElement('p')
        const sleepReset= document.createElement('button')
        const tipSleep = document.createElement('button')
        let message;

        if(sleepHours< 6 ){
          message = ` 😴 Your running low on sleep! Try to rest earlier.`
        }else if(sleepHours>=6 && sleepHours<= 9){
          message = ` 🌙 Perfect! You're getting enough sleep.`
        }else{
          message = ` 💤 You're sleeping plenty! Please get healthy sleep(>=6hrs but <= 9hrs).`
        }

        
        
        heading.textContent= `Your Sleep Summary`
        heading.classList.add('sleepHead')
        totalSleep.textContent= `You slept for ${sleepHours} hours. ${message}`
        totalSleep.classList.add('sleepPar')
        sleepReset.textContent= `Reset Sleep hrs`
        sleepReset.addEventListener('click', ()=>{
          sleepStart.value= ''
          sleepEnd.value= ''
          sleepResult.innerHTML= ''
          sleepResult.classList.remove('sleepOn')
        })
        tipSleep.textContent=`Sleep Tips`
        tipSleep.addEventListener('click', ()=>{
          sleepTips.style.display = sleepTips.style.display === 'flex' ? 'none' : 'flex';
        })

        sleepResult.appendChild(heading)
        sleepResult.appendChild(totalSleep)
        sleepResult.appendChild(sleepReset)
        sleepResult.appendChild(tipSleep)

        sleepResult.classList.add('sleepOn')
      }

      calculateSleep.addEventListener('click', ()=>{

        
        const start = sleepStart.value
        const end = sleepEnd.value

        if(!start || !end){
          sleepResult.innerHTML= "<p class='error'>Please enter both sleep and wake times.</p>";
          
        }else{
          const [bedHour, bedMinutes] = start.split(':').map(Number)
        const [wakeHour, wakeMinutes] =end.split(':').map(Number)

        const bedTotal = bedHour*60 + bedMinutes
        const wakeTotal= wakeHour*60 + wakeMinutes

        let sleepMinutes = wakeTotal - bedTotal
        if(sleepMinutes<0 ){
          sleepMinutes+= 1440;
        }

        const sleepHours = (sleepMinutes/60).toFixed(1)


        sleepDisplay(sleepHours)

        setTimeout(() => {
          sleepStart.value= ''
          sleepEnd.value= ''
        }, 2000);
        }

        


      })
    }

//=========================WORKOUT PLANNER=================

const workoutGetStarted= document.querySelector('.workoutGetStarted')
const workoutFocus = document.querySelector('.workoutFocus')
const fullBodyBtn = document.querySelector('.fullBody')
const focusMoves= document.querySelector('.focusMoves')
const armsBtn= document.querySelector('.arms')
const legsBtn= document.querySelector('.legs')
const coreBtn= document.querySelector('.core')
const fullBodyCardIn= document.querySelector('.fullBodyCard')
const armsCardIn= document.querySelector('.armsCard')
const legsCardIn= document.querySelector('.legsCard')
const coreCardIn= document.querySelector('.coreCard')





if(workoutGetStarted){

  workoutGetStarted.addEventListener('click', ()=>{
    workoutFocus.style.display = workoutFocus.style.display === 'flex' ? 'none' : 'flex';
  })

  if(fullBodyBtn){
    fullBodyBtn.addEventListener('click', ()=>{

      if(!armsCardIn.classList.contains('armsCard') || !legsCardIn.classList.contains('legsCard') || !coreCardIn.classList.contains('coreCard')){

        armsCardIn.classList.add('armsCard')
        legsCardIn.classList.add('legsCard')
        coreCardIn.classList.add('coreCard')

        
        fullBodyCardIn.classList.remove('fullBodyCard')
        fullBodyCardIn.classList.add('card')
      }else{
        focusMoves.style.display = focusMoves.style.display === 'flex' ? 'none' : 'flex';
        fullBodyCardIn.classList.remove('fullBodyCard')
        fullBodyCardIn.classList.add('card')
      }
      
    })
  }

  if(armsBtn){
    armsBtn.addEventListener('click', ()=>{

      if(!fullBodyCardIn.classList.contains('fullBodyCard') || !legsCardIn.classList.contains('legsCard') || !coreCardIn.classList.contains('coreCard')){

        fullBodyCardIn.classList.add('fullBodyCard')
        legsCardIn.classList.add('legsCard')
        coreCardIn.classList.add('coreCard')

        armsCardIn.classList.remove('armsCard')
        armsCardIn.classList.add('card')
      }else{
        focusMoves.style.display = focusMoves.style.display === 'flex' ? 'none' : 'flex';
        armsCardIn.classList.remove('armsCard')
        armsCardIn.classList.add('card')
      }
      
    })
  }
  
   if(legsBtn){
    legsBtn.addEventListener('click', ()=>{

      if(!armsCardIn.classList.contains('armsCard') || !fullBodyCardIn.classList.contains('fullBodyCard') || !coreCardIn.classList.contains('coreCard')){

        armsCardIn.classList.add('armsCard')
        fullBodyCardIn.classList.add('fullBodyCard')
        coreCardIn.classList.add('coreCard')

        
        legsCardIn.classList.remove('legsCard')
        legsCardIn.classList.add('card')
      }else{
        focusMoves.style.display = focusMoves.style.display === 'flex' ? 'none' : 'flex';
        legsCardIn.classList.remove('legsCard')
        legsCardIn.classList.add('card')
      }
      
    })
  }

   if(coreBtn){
    coreBtn.addEventListener('click', ()=>{

      if(!armsCardIn.classList.contains('armsCard') || !legsCardIn.classList.contains('legsCard') || !fullBodyCardInCardIn.classList.contains('fullBodyCard')){

        armsCardIn.classList.add('armsCard')
        legsCardIn.classList.add('legsCard')
        fullBodyCardIn.classList.add('fullBodyCard')

        
        coreCardIn.classList.remove('coreCard')
        coreCardIn.classList.add('card')
      }else{
        focusMoves.style.display = focusMoves.style.display === 'flex' ? 'none' : 'flex';
        coreCardIn.classList.remove('coreCard')
        coreCardIn.classList.add('card')
      }
      
    })
  }



  
  
  

}

//=====================WORKOUT TIMER================

const timerMinutes= document.getElementById('minutes')
const timerSeconds= document.getElementById('seconds')
const startTimerBtn= document.getElementById('startTimer')
const resetTimerBtn= document.getElementById('resetTimer')
const timerStartDisplay= document.querySelector('.timerStart')

let timerId;

if(startTimerBtn){
  startTimerBtn.addEventListener('click', ()=>{
    let totalSeconds= 
    Number(timerMinutes.value)*60 + Number(timerSeconds.value)

    if(isNaN(totalSeconds) || totalSeconds<0 ){
      timerStartDisplay.textContent= `Please enter a valid input`
      return
    }

    clearTimeout(timerId);

    function timerCountDown(totalSeconds){
      
      let mins= Math.floor(totalSeconds/60);
      let secs =totalSeconds%60;

      timerStartDisplay.textContent= `${mins.toString().padStart(2, '0')}: ${secs.toString().padStart(2, '0')}`


      if (totalSeconds>0) {
        timerId= setTimeout(() => {
          timerCountDown(totalSeconds-1)
        }, 1000);
      }else{

        timerMinutes.value= ''
        timerSeconds.value= ''
        timerStartDisplay.textContent= `Time's Up!`
      }
    }

    timerCountDown(totalSeconds)
  })

  resetTimerBtn.addEventListener('click', ()=>{

    clearTimeout(timerId)
    timerMinutes.value= ''
    timerSeconds.value= ''
    timerStartDisplay.textContent= `Timer Reset`
  })
}


// =================== AFFIRMATIONS ===================
const affirmations = [
  "You are capable of amazing things.",
  "Your mind is stronger than your worries.",
  "Breathe deeply — you’re doing great.",
  "Progress, not perfection, is what matters.",
  "You are enough, just as you are."
];

const newAffirmationBtn = document.getElementById('newAffirmationBtn');
const affirmationText = document.getElementById('affirmationText');

if (newAffirmationBtn) {
  newAffirmationBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    affirmationText.textContent = affirmations[randomIndex];
  });
}

// =================== MOOD TRACKER ===================
const moodButtons = document.querySelectorAll('.moodBtn');
const moodResult = document.getElementById('moodResult');

moodButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mood = button.getAttribute('data-mood');
    moodResult.textContent = `You are feeling ${mood} today 🌤️`;
  });
});

// =================== BREATHING EXERCISE ===================
const startBreathingBtn = document.getElementById('startBreathingBtn');
const breathingGuide = document.getElementById('breathingGuide');

if (startBreathingBtn) {
  startBreathingBtn.addEventListener('click', () => {
    let steps = ["Breathe In 🌬️", "Hold...", "Breathe Out 😮‍💨", "Relax..."];
    let index = 0;

    function breathingCycle() {
      breathingGuide.textContent = steps[index];
      index = (index + 1) % steps.length;
      setTimeout(breathingCycle, 3000);
    }

    breathingCycle();
  });
}

