import './App.css';
import React, {useState, useEffect} from 'react';
import WebFont from 'webfontloader';



function App() {

//*******STATES*******************//

  const [weight, setWeight] = useState(0);
  const [input_window, setinput_window] = useState('input-closed');
  const [results_window, setresults_window] = useState('results-closed');
  const [filters_window, setfilters_window] = useState('filters-closed')
  const [foodChoice, setFood] = useState(0);
  const [kg,setkgToggle] = useState(true);
  const [kgselected, setkgselected] = useState('kgselected');
  const [lbselected, setlbselected] = useState('');
  const [lightCheck, setLight] = useState(false);
  const [modCheck, setMod] = useState(false);
  const [heavyCheck, setHeavy] = useState(false);
  const [calories, setCalories] = useState(0);
  const [foodName, setfoodName] = useState('');
  const [serving, setServing] = useState('');
  const [weightMissing, setweightMissing] = useState('weightFilter')
  const [filterMissing, setfilterMissing] = useState('checkbox')
  const [opening_text, setOpeningText] = useState('opening-open');
  const [forceUpdate, setUpdate] = useState(1);

/*let foodName = foods[foodChoice].name;
let calories = foods[foodChoice].calories;
let serving = foods[foodChoice].amount;
 */

useEffect(() => {
  WebFont.load({
    google: {
      families: ['Oswald']
    }
  });
 }, []);
//***************Excercises***********//


const running = {
  name: 'RUN ',
  inst: '(MODERATE/FAST PACE)',
  mets: 7.5,
  intensity: 'heavy',
  time: 20,
  }
const deadlifts = {
  name: 'DO DEADLIFTS',
  inst: '1x5reps, 2x10reps, 1x5reps(50% MAX WEIGHT)',
  mets: 6.2,
  intensity: 'heavy',
  time: 15,
}

const walkingLight = {
  name: 'WALK',
  inst: '(NORMAL/ CALM)',
  mets: 2.6,
  intensity: 'light',
  time: 40,
}

const walkingHeavy = {
  name: 'FAST WALK',
  inst: '(>3mpnh)',
  mets: 3.3,
  intensity: 'light',
  time: 30,
}

const mBike = {
  name: 'MOUNTAIN BIKE',
  inst: "(MODERATE INCLINE)",
  mets: 6.5,
  intensity: 'heavy',
  time: 30,
}

const jumpRope = {
  name: 'JUMP ROPE',
  inst: '(MODERATE TO FAST PACE)',
  mets: 10,
  intensity: 'heavy',
  time: 10,
}

const jogging = {
  name: 'JOG',
  inst: '(>5mph)',
  mets: 6,
  intensity: 'moderate',
  time: 30,
}

const crunches = {
  name: 'DO CRUNCHES',
  inst: '(4x20 REPS)',
  mets: 5,
  intensity: 'moderate',
  time: 10,

}

const pushups = {
  name: 'DO PUSHUPS',
  inst: '(3x20 REPS)',
  mets: 3.8,
  intensity: 'moderate',
  time: 10,
}

const yoga = {
  name: 'DO YOGA',
  inst: '(MATHA STYLE)',
  mets: 2.5,
  intensity: 'light',
  time: 40,
}

const yoga2 = {
  name: 'DO YOGA',
  inst: '(POWER STYLE)',
  mets: 4.0,
  intensity: 'moderate',
  time: 30,
}

const biking1 = {
  name: 'BIKE',
  inst: '(5.5 mph)',
  mets: 3.5,
  intensity: 'light',
  time: 30,
}

const biking2 = {
  name: 'BIKE',
  inst: '(9.4 mph)',
  mets: 5.8,
  intensity: 'moderate',
  time: 30,
}

const eliptical = {
  name: 'RIDE ELIPTICAL',
  inst: '10%(2 MIN), 30%(5MIN) 50%(5MIN) 70%(3MIN) 10%(5MIN)',
  mets: 5.0,
  intensity: 'moderate',
  time: 20,
}

const benchpress = {
  name: 'BENCHPRESS',
  inst: '(2x10reps, 1x5reps@50% MAX)',
  mets: 6.0,
  intensity: 'heavy',
  time: 15,
}

const stretching = {
  name: "STRETCH",
  inst: '(GENTLY)',
  mets: 2.3,
  intensity: 'very light',
  time: 20,
}

const hiking = {
  name: "GO FOR A HIKE",
  inst: '(15% INCLINE)',
  mets: 7.0,
  intensity: "heavy",
  time: 60
}


//**FOOOOODSSSSSSS**/////

const pizza = {
  index: 0,
  name: 'pizza',
  style: 'pizza',
  amount: 'One slice',
  calories: 285,
}

const cake = {
  index: 1,
  name: 'cake',
  style: 'cake',
  amount: 'One slice',
  calories: 1000,
}

const cupcake = {
  index: 2,
  name: 'cupcake',
  style: 'cupcake',
  amount: 'One serving',
  calories: 400,
}

const skittles = {
  index: 3,
  name: 'skittles',
  style: 'skittles',
  amount: 'one pack(62g)',
  calories: 405,
}

const icecream = {
  index: 4,
  name: 'icecream',
  style: 'icecream',
  amount: 'one cup',
  calories: 267,
}

const twizzlers = {
  index: 5,
  name: 'twizzlers',
  style: 'twizzlers',
  amount: '4 pieces (45g)',
  calories: 160,
}

const frenchfries = {
  index: 6,
  name: 'frenchfries',
  style: 'frenchfries',
  amount: 'medium (117g)',
  calories: 365,
}

const eminems = {
  index: 7,
  name: 'M&Ms',
  style: 'eminems',
  amount: '32 pcs.(28g)',
  calories: 140,
}

const cheesecake ={
  index: 8,
  name: 'cheesecake',
  style: 'cheesecake',
  amount: 'one piece(125g)',
  calories: 401,
}

const onionrings = {
  index: 9,
  name: 'onionrings',
  style: 'onionrings',
  amount: '6 rings',
  calories: 251,
}

const pancakes = {
  index: 10,
  name: 'pancakes',
  style: 'pancakes',
  amount: '2(232g)',
  calories: 520,

}

const bamba = {
  index: 11,
  name: 'bamba',
  style: 'bamba',
  amount: '1oz(28g)',
  calories: 160,
}

const xl = {
  index: 12,
  name: 'xl',
  style: 'xl',
  amount: '250ml',
  calories: 118,
}

const cola = {
  index: 13,
  name: 'cocacola',
  style: 'cocacola',
  amount: '1 can(355ml)',
  calories: 140,
}

const hamburger = {
  index: 14,
  name: 'hamburger(plain)',
  style: 'hamburger',
  amount: '180g',
  calories: 520,
}

const snickers = {
  index: 15,
  name: 'snickers',
  style: 'snickers',
  amount: '1 bar(57g)',
  calories: 280,
}

const mars = {
  index: 16,
  name: 'mars',
  style: 'mars',
  amount: '50g',
  calories: 250,
}

const cookies = {
  index: 17,
  name: 'chocolate chips cookies',
  style: 'cookies',
  amount: '100g',
  calories: 488,
}

const brownie = {
  index: 18,
  name: 'chocolate brownie',
  style: 'brownie',
  amount: '100g',
  calories: 466,
}

const worms = {
  index: 19,
  name: 'gummy worms',
  style: 'worms',
  amount: '4 pieces',
  calories: 120,
}

const selecteFood = {
  index: -1,
  name:'pickfood',

}

//FOODS LIST//
let foods =[pizza,cake,cupcake,skittles,icecream,twizzlers,frenchfries,eminems,cheesecake, onionrings, pancakes,bamba, xl, cola, hamburger,snickers,
mars, cookies, brownie, worms
]

//WORKOOUT LIST??
let heavyworkouts = [running,deadlifts, mBike, jumpRope,benchpress,hiking];
let modworkouts = [jogging,crunches,pushups,eliptical, yoga2];
let lightworkouts = [walkingLight,walkingHeavy,yoga,biking1,biking2,stretching];
let chosen_workOuts = [];

//CHOOSE WORKOUT
  
const lightToggle = () => {
  if (lightCheck==true) {
    setLight(false)
  }else{
    setLight(true);
    setfilterMissing('checkbox')
  }
}
const modToggle = () => {
  if (modCheck==true) {
    setMod(false)
  }else{
    setMod(true);
    setfilterMissing('checkbox')
  }
}
const heavyToggle = () => {
  if (heavyCheck==true) {
    setHeavy(false)
  }else{
    setHeavy(true);
    setfilterMissing('checkbox')
  }
}

const toggleKg = () => {
  if (kg){
  setkgToggle(false)
  setWeight((weight/2.205).toFixed(2))
  setkgselected('kgoff')
  setlbselected('lbselected')
  }else{
    setkgToggle(true)
    setWeight((weight*2.205).toFixed(2))
    setkgselected('kgselected')
    setlbselected('lboff')
  }
  }
  
  function submitInfo(e){
    setFood(e.target.value);
    setfoodName(foods[e.target.value].name)
    setCalories(foods[e.target.value].calories)
    setServing(foods[e.target.value].amount)
    setresults_window("results-opened")
    setinput_window('input-closed')
    }
  
  //**RENDER FOOD TILES***/
  let food_tabs = foods.map((food) => {
    return (
        <button onClick={submitInfo} value ={food.index} id={food.style} className ='tile'>
          </button>
    )})
  //**CHOOSE WORKOUTS***/
  let calBurned = 0;
  let totalTime = 0;
  const cpmC = 3.5 * weight/200

  //***LOAD WORKOUTS TO ARRAY***/

 

    while(calories > (calBurned+30) && weight > 0){
    let chosenWorkout = 0;

    if(heavyCheck){
      chosenWorkout = Math.floor(Math.random()*heavyworkouts.length);
      chosen_workOuts.push(heavyworkouts[chosenWorkout]);
      calBurned +=  ((((heavyworkouts[chosenWorkout].mets)*3.5*weight)/200)*heavyworkouts[chosenWorkout].time);
      totalTime += heavyworkouts[chosenWorkout].time;
    }

    if ((calBurned > (calories + 100)) && (lightCheck || modCheck) && heavyCheck){
      chosen_workOuts.pop();
      calBurned -= ((((heavyworkouts[chosenWorkout].mets)*3.5*weight)/200)*heavyworkouts[chosenWorkout].time);
      totalTime -= heavyworkouts[chosenWorkout].time;
      }

    if (lightCheck && calories - 50 > calBurned) {
    chosenWorkout = Math.floor(Math.random()*lightworkouts.length);
    chosen_workOuts.push(lightworkouts[chosenWorkout]);
    calBurned += ((((lightworkouts[chosenWorkout].mets)*3.5*weight)/200)*lightworkouts[chosenWorkout].time);
    totalTime += lightworkouts[chosenWorkout].time;
    }

    if(modCheck && calories - 50 > calBurned){
    chosenWorkout = Math.floor(Math.random()*modworkouts.length);
    chosen_workOuts.push(modworkouts[chosenWorkout]);
    calBurned += ((((modworkouts[chosenWorkout].mets)*3.5*weight)/200)*modworkouts[chosenWorkout].time);
    totalTime += modworkouts[chosenWorkout].time;
    }

    if (calBurned > calories + 100 && lightCheck && modCheck){
      chosen_workOuts.pop();
      calBurned -= ((((modworkouts[chosenWorkout].mets)*3.5*weight)/200)*modworkouts[chosenWorkout].time)
      totalTime -= modworkouts[chosenWorkout].time
      }
    
    if (lightCheck && calories > calBurned + 30) {
      chosenWorkout = Math.floor(Math.random()*lightworkouts.length);
      chosen_workOuts.push(lightworkouts[chosenWorkout]);
      calBurned += ((((lightworkouts[chosenWorkout].mets)*3.5*weight)/200)*lightworkouts[chosenWorkout].time);
      totalTime += lightworkouts[chosenWorkout].time
      }
}


const flame =require('./flame.png')

    let workoutList = chosen_workOuts.map((workout, i) => {
      return (
          <ul>
            <li key={i} className='list-item'>{workout.name} ({workout.intensity})<br className='moblie-div'></br><span className='note'>{workout.inst}</span><br className='moblie-div'></br>~ {workout.time} mins <br className='moblie-div'></br><img src={flame} alt='flamepic'  width='5%' height='5%'></img> {(((workout.mets*3.5*weight)/200)*workout.time).toFixed(2)} cal. <img src={flame} alt='flamepic'  width='5%' height='5%'></img></li>
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
    setweightMissing('weightFilter')
    }else{
      setWeight((e.target.value/2.205).toFixed(2))
      setweightMissing('weightFilter')
    }
  };
//**OPEN/CLOSE RESULTS WINDOW***/
  const openFilters = () => {
    setfilters_window('filters-opened');
    setOpeningText('opening-closed');
    setinput_window('input-closed')
  }
  const resetInput = () => {
    if ((weight > 0) && (lightCheck || modCheck || heavyCheck)){
    setinput_window('input-opened');
    setresults_window('results-closed');
    setfoodName('');
    setCalories(0);
    setOpeningText('opening-closed');
    setfilters_window('filters-closed');
    calBurned = 0;
    totalTime = 0;
  }else if(!weight>0){
      setweightMissing('weightMissing');
    }else{
      setfilterMissing('filterMissing')
    }

  }
  
  return (
    <div className="App">

  < div className = {opening_text}>
    <h1>CHEAT<span className='linethrough'>DELETE</span></h1>
    <ol>
      <li className='open-list' id='li1'>Enter Weight in kg/lb</li>
      <li className='open-list' id='li2'>Pick Workout Intensity</li>
      <li className='open-list' id='li3'>Pick CHEAT Food</li>
      <li className='open-list'id='li4'>DELETE the calories</li>
    </ol>
  <button className = 'button' onClick={openFilters} >GET STARTED</button>
    </div>

  <div className={filters_window}>
    
<div className='center'>
      <input className={weightMissing} onChange={submitWeight} placeholder='ENTER WEIGHT' 
      size='10' type="number" min='0' id="weight-input" 
      name='weight-input' /><br></br>
      <button onClick={toggleKg} className = 'kgButton'><span className={kgselected}>kg</span><span className={lbselected}>lb</span></button>
    </div>

    <label className = 'intensity'>Workout Intensity</label>

    <div className='workoutFilter'>
    

    <br></br>

    <div className='labels'>
    <label for='light' className='space-right'>LIGHT</label>
    <label for='moderate' className='space-right'>MODERATE</label>
    <label for='heavy' className='space-right'>HEAVY</label>
    </div>
    <div className='checkboxes'>
    <div className={filterMissing}>
    <input onClick={lightToggle}className='checkbox' id='light' name='light' value='light' type='checkbox'></input>
    </div>
    <br></br>
    <div className={filterMissing}>
    
    <input onClick={modToggle}className='checkbox' id='moderate' name='moderate' value='moderate' type='checkbox'></input>
    </div>
    <br></br>
    <div className={filterMissing}>
  
    <input onClick={heavyToggle} className='checkbox' id='heavy' name='heavy' value='heavy' type='checkbox'></input>
    </div>
    </div>
    </div>

    <button className= 'button' onClick={resetInput}>PICK CHEAT FOOD</button>
    </div>
  < div id='input' className = {input_window}>
    
      <div className = 'tiles'>
      {food_tabs}
      </div>

      <button className = 'button' onClick={openFilters}>BACK TO FILTERS</button>
  </div>


  
  <div id='results' className = {results_window}>
  <h1 >{foodName}</h1>
    
  <div className='icon' id={foods[foodChoice].style}width='50%' height='50%'></div>
  <h2>{serving}({calories} cal.)</h2>
  
  <div className='list'>
    {workoutList}
    <h1>Burn {calBurned.toFixed(2)} in {totalTime} mins.</h1></div>
    <br className='break'></br>
  <div></div>
  <div className = 'buttons'>
      <button className='button' onClick={newList}>NEW LIST</button>
      <button className='button' onClick={resetInput}>GO BACK</button>
  </div> 
  </div>

  
  </div>  );

}

export default App;
