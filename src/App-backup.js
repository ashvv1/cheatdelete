import './App.css';
import React, {useState, useEffect} from 'react';
import WebFont from 'webfontloader';



function App() {

//*******STATES*******************//

  const [weight, setWeight] = useState(0);
  const [input_window, setinput_window] = useState('input-closed');
  const [results_window, setresults_window] = useState('results-closed');
  const [foodChoice, setFood] = useState(0);
  const [kg,setkgToggle] = useState(true);
  const [weightOption, setWeightDisplay] = useState('Your Weight(kg)')
  const [kgselected, setkgselected] = useState('kgselected');
  const [lbselected, setlbselected] = useState('');
  const [lightCheck, setLight] = useState(false);
  const [modCheck, setMod] = useState(false);
  const [heavyCheck, setHeavy] = useState(false);
  const [calories, setCalories] = useState(0);
  const [foodName, setfoodName] = useState('');
  const [serving, setServing] = useState('');
  const [weightMissing, setweightMissing] = useState('')
  const [filterMissing, setfilterMissing] = useState('checkboxes')
  const [opening_text, setOpeningText] = useState('opening-open');
  const [forceUpdate, setUpdate] = useState(1);

/*let foodName = foods[foodChoice].name;
let calories = foods[foodChoice].calories;
let serving = foods[foodChoice].amount;
 */

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Nunito']
    }
  });
 }, []);
//***************Excercises***********//


const running = {
  name: 'RUN',
  mets: 7.5,
  intensity: 'heavy',
  time: 20,
  }
const deadlifts = {
  name: 'DO DEADLIFTS',
  mets: 6.2,
  intensity: 'heavy',
  time: 20,
}

const walkingLight = {
  name: 'WALK',
  mets: 2.6,
  intensity: 'light',
  time: 40,

}

const walkingHeavy = {
  name: 'FAST WALK',
  mets: 3.3,
  intensity: 'light',
  time: 30,
}

const mBike = {
  name: 'MOUNTAIN BIKE',
  mets: 6.5,
  intensity: 'heavy',
  time: 30,
}

const jumpRope = {
  name: 'JUMP ROPE',
  mets: 10,
  intensity: 'heavy',
  time: 10,
}

const jogging = {
  name: 'JOG',
  mets: 6,
  intensity: 'moderate',
  time: 30,
}

const crunches = {
  name: 'DO CRUNCHES',
  mets: 5,
  intensity: 'moderate',
  time: 20,

}

const pushups = {
  name: 'DO PUSHUPS',
  mets: 3.8,
  intensity: 'moderate',
  time: 10,
}

const yoga = {
  name: 'DO YOGA',
  mets: 3,
  intensity: 'light',
  time: 40,
}


//**FOOOOODSSSSSSS**/////

const pizza = {
  index: 0,
  name: 'pizza',
  amount: 'One slice',
  calories: 285,
}

const cake = {
  index: 1,
  name: 'cake',
  amount: 'One slice',
  calories: 1000,
}

const cupcake = {
  index: 2,
  name: 'cupcake',
  amount: 'One serving',
  calories: 400,
}

const skittles = {
  index: 3,
  name: 'skittles',
  amount: 'one pack(62g)',
  calories: 405,
}

const icecream = {
  index: 4,
  name: 'icecream',
  amount: 'one cup',
  calories: 267,
}

const twizzlers = {
  index: 5,
  name: 'twizzlers',
  amount: '4 pieces (45g)',
  calories: 160,
}

const frenchfries = {
  index: 6,
  name: 'frenchfries',
  amount: 'medium (117g)',
  calories: 365,
}

const eminems = {
  index: 7,
  name: 'eminems',
  amount: '32 pcs.(28g)',
  calories: 140,
}

const cheesecake ={
  index: 8,
  name: 'cheesecake',
  amount: 'one piece(125g)',
  calories: 401,
}


const selecteFood = {
  index: -1,
  name:'pickfood',

}

//FOODS LIST//
let foods =[pizza,cake,cupcake,skittles,icecream,twizzlers,frenchfries,eminems,cheesecake,icecream,twizzlers,frenchfries,eminems,cheesecake,pizza,cake,cupcake,skittles,frenchfries,eminems]

//WORKOOUT LIST??
let heavyworkouts = [running,deadlifts, mBike, jumpRope];
let modworkouts = [jogging,crunches,pushups];
let lightworkouts = [walkingLight,walkingHeavy,yoga];
let chosen_workOuts = [];

//CHOOSE WORKOUT
  
const lightToggle = () => {
  if (lightCheck==true) {
    setLight(false)
  }else{
    setLight(true);
    setfilterMissing('checkboxes')
  }
}
const modToggle = () => {
  if (modCheck==true) {
    setMod(false)
  }else{
    setMod(true);
    setfilterMissing('checkboxes')
  }
}
const heavyToggle = () => {
  if (heavyCheck==true) {
    setHeavy(false)
  }else{
    setHeavy(true);
    setfilterMissing('checkboxes')
  }
}

const toggleKg = () => {
  if (kg){
  setWeightDisplay('Your Weight(lb)')
  setkgToggle(false)
  setWeight((weight/2.205).toFixed(2))
  setkgselected('')
  setlbselected('lbselected')
  }else{
    setWeightDisplay('Your Weight(kg)')
    setkgToggle(true)
    setWeight((weight*2.205).toFixed(2))
    setkgselected('kgselected')
    setlbselected('')
  }
  }
  
  function submitInfo(e){
    if(weight==0){
      setweightMissing('weightMissing')
    }else if(!lightCheck && !modCheck && !heavyCheck){
      setfilterMissing('filterMissing')
    }else{
    setFood(e.target.value);
    setfoodName(foods[e.target.value].name)
    setCalories(foods[e.target.value].calories)
    setServing(foods[e.target.value].amount)
    setresults_window("results-opened")
    setinput_window('input-closed')
    }
  };
  
  //**RENDER FOOD TILES***/
  let food_tabs = foods.map((food) => {
    return (
        <button onClick={submitInfo} value ={food.index} id={food.name} className ='tile'>
          </button>
    )})
  //**CHOOSE WORKOUTS***/
  let calBurned = 0;
  const cpmC = 3.5 * weight/200

  //***LOAD WORKOUTS TO ARRAY***/

 

    while(calories > (calBurned+50) && weight > 0){
    let chosenWorkout = 40;

    if(heavyCheck){
      chosenWorkout = Math.floor(Math.random()*heavyworkouts.length);
      chosen_workOuts.push(heavyworkouts[chosenWorkout]);
      calBurned +=  ((((heavyworkouts[chosenWorkout].mets)*3.5*weight)/200)*heavyworkouts[chosenWorkout].time);
    }

    if (calBurned > calories + 50 && (lightCheck || modCheck)){
      chosen_workOuts.pop();
      calBurned -= ((((heavyworkouts[chosenWorkout].mets)*3.5*weight)/200)*heavyworkouts[chosenWorkout].time) 
      }

    if (lightCheck && calories - 50 > calBurned) {
    chosenWorkout = Math.floor(Math.random()*lightworkouts.length);
    chosen_workOuts.push(lightworkouts[chosenWorkout]);
    calBurned += (((lightworkouts[chosenWorkout].mets)*cpmC)*lightworkouts[chosenWorkout].time);
    }
    if(modCheck && calories - 50 > calBurned){
    chosenWorkout = Math.floor(Math.random()*modworkouts.length);
    chosen_workOuts.push(modworkouts[chosenWorkout]);
    calBurned += (((modworkouts[chosenWorkout].mets)*cpmC)*modworkouts[chosenWorkout].time);
    }
    if (calBurned > calories + 100 && lightCheck){
      chosen_workOuts.pop();
      calBurned -= (((modworkouts[chosenWorkout].mets)*cpmC)*modworkouts[chosenWorkout].time) 
      }
    
    if (lightCheck && calories > calBurned) {
      chosenWorkout = Math.floor(Math.random()*lightworkouts.length);
      chosen_workOuts.push(lightworkouts[chosenWorkout]);
      calBurned += (((lightworkouts[chosenWorkout].mets)*cpmC)*lightworkouts[chosenWorkout].time);
      }
}


const flame =require('./flame.png')

    let workoutList = chosen_workOuts.map((workout, i) => {
      return (
          <ul>
            <li key={i}>{workout.name}<span className='note'></span> x {workout.time} mins ({workout.intensity}) <br className='moblie-div'></br> <img src={flame} alt='flamepic'  width='5%' height='5%'></img> {(workout.mets*cpmC*workout.time).toFixed(2)} cal. <img src={flame} alt='flamepic'  width='5%' height='5%'></img></li>
          </ul> 
            
      )})

      function newList() {
        calBurned=0;
        setUpdate(forceUpdate+1)
          
      }

  //***RE-DEFINE WEIGHT WHEN CHANING BETWEEN KG AND LB***/

  const submitWeight = (e) => {
    if(kg){
    setWeight((e.target.value))
    setweightMissing('')
    }else{
      setWeight((e.target.value/2.205).toFixed(2))
      setweightMissing('')
    }
  };
//**OPEN/CLOSE RESULTS WINDOW***/

  const resetInput = () => {
    setinput_window('input-opened');
    setresults_window('results-closed')
    setfoodName('')
    setCalories(0)
    setOpeningText('opening-closed');
    calBurned = 0;
  }

  
  return (
    <div className="App">

  < div className = {opening_text}>
    <h1>CHEATDELETE</h1>
    <ol className='font-loader'>
      <li className='open-list'>Enter Weight in kg/lb</li>
      <li className='open-list'>Pick Workout Intensity</li>
      <li className='open-list'>Pick CHEAT Food</li>
      <li className='open-list'>DELETE the calories</li>
    </ol>
  <button onClick={resetInput} >PICK CHEAT FOOD</button>
    </div>
  < div id='input' className = {input_window}>
    <div className = 'filters'>
      <input className={weightMissing} onChange={submitWeight} placeholder={weightOption} 
      size='10' type="number" min='0' id="weight-input" 
      name='weight-input' />
      <button onClick={toggleKg} className = 'kgButton'><span className={kgselected}>kg</span>/<span className={lbselected}>lb</span></button>

   
    <div className={filterMissing}>
    <label>Workout Intensity:</label>
    <label for='light' className='space-right'>Light</label>
    <input onClick={lightToggle}className='checkbox' id='light' name='light' value='light' type='checkbox'></input>
    <label for='moderate' className='space-right'>Moderate</label>
    <input onClick={modToggle}className='checkbox' id='moderate' name='moderate' value='moderate' type='checkbox'></input>
    <label for='heavy' className='space-right'>Heavy</label>
    <input onClick={heavyToggle} className='checkbox' id='heavy' name='heavy' value='heavy' type='checkbox'></input>
    </div>
      </div>
      <div className = 'tiles'>
      {food_tabs}
      </div>
      
  </div>
  
  <div id='results' className = {results_window}>
  <div className='icon' id={foodName}width='10%' height='10%'></div>
  <h1>{serving}({calories} calories)</h1>
  
  <div className='list'>
    {workoutList}
    <h1>Burn {calBurned.toFixed(2)} in total</h1></div>
    <br className='break'></br>
  <div></div>
  <div className = 'buttons' >
      <button onClick={newList}>NEW LIST</button>
      <button onClick={resetInput}>GO BACK</button>
  </div> 
  </div>


 
  
  </div>
  );
}

export default App;
