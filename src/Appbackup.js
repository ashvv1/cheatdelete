import './App.css';
import React, {useState} from 'react';


function App() {

//*******STATES*******************//

  const [weight, setWeight] = useState(0);
  const [input_window, setinput_window] = useState('input-opened');
  const [results_window, setresults_window] = useState('results-closed');
  const [foodChoice, setFood] = useState(0);
  const [kg,setkgToggle] = useState(true);
  const [weightOption, setWeightDisplay] = useState('Weight(kg)')
  const [kgselected, setkgselected] = useState('kgselected');
  const [lbselected, setlbselected] = useState('');
  const [lightCheck, setLight] = useState(true)

/*let foodName = foods[foodChoice].name;
let calories = foods[foodChoice].calories;
let serving = foods[foodChoice].amount;
 */

//***************Excercises***********//


const running = {
  name: 'RUN',
  mets: 7.5,
  intensity: 'high',
  }
const deadlifts = {
  name: 'DO DEADLIFTS',
  mets: 6.2,
  intensity: 'high',
}

const walkingLight = {
  name: 'WALK',
  mets: 2.6,
  intensity: 'low',
}

const walkingHeavy = {
  name: 'WALK',
  mets: 3.3,
  intensity: 'moderate',
}

const mBike = {
  name: 'MOUNTAIN BIKE',
  mets: 6.5,
  intensity: 'high'
}

const jumpRope = {
  name: 'JUMP ROPE',
  mets: 10,
  intensity: 'high'
}

const jogging = {
  name: 'JOG',
  mets: 6,
  intensity: 'moderate',
}

const crunches = {
  name: 'DO CRUNCHES',
  mets: 5,
  intensity: 'moderate',
}


//**FOOOOODSSSSSSS**/////

const pizza = {
  index: 0,
  name: 'pizza',
  amount: 'One slice',
  calories: 500,
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
  amount: 'One cupcake',
  calories: 400,
}

const skittles = {
  index: 3,
  name: 'skittles',
  amount: 'one bag',
  calories: 250,
}

const icecream = {
  index: 4,
  name: 'icecream',
  amount: 'one scoop',
  calories: 400,
}

//FOODS LIST//
let foods =[pizza,cake,cupcake,skittles,icecream]


//WORKOOUT LIST??
let highworkouts = [running,deadlifts, mBike, jumpRope, crunches];
let modworkouts = [walkingHeavy,jogging];
let lightworkouts = [walkingLight];
let chosen_workOuts = [];

//CHOOSE WORKOUT
  let moderateCheck = false;
  let heavyCheck = false;


  const lightToggle = () => {
    if (lightCheck) {
      setLight(false)
    }else{
      setLight(true);
    }
  }
  
  const toggleKg = () => {
    if (kg){
    setWeightDisplay('Weight(lb)')
    setkgToggle(false)
    setWeight((weight/2.205).toFixed(2))
    setkgselected('')
    setlbselected('lbselected')
    }else{
      setWeightDisplay('Weight(kg)')
      setkgToggle(true)
      setWeight((weight*2.205).toFixed(2))
      setkgselected('kgselected')
      setlbselected('')
    }

  }
  //**RENDER FOOD TILES***/
  let food_tabs = foods.map((food) => {
    return (
        <button onClick={submitInfo} value ={food.index} id={food.name} className ='tile'>
          </button>
    )})
  //**CHOOSE WORKOUTS***/
  

  //***LOAD WORKOUTS TO ARRAY***/
  let workoutList = chosen_workOuts.map((workout, i) => {
    return (
        <ol>
          <li key={i}>{workout.name}<span className='note'>({workout.intensity} intensity)</span> x 20 mins</li>
        </ol> 
          
    )})
    

  //***RE-DEFINE WEIGHT WHEN CHANING BETWEEN KG AND LB***/

      const submitWeight = (e) => {
        if(kg){
        setWeight(e.target.value)
        }else{
          setWeight(e.target.value/2.205)
        }
      };

      function submitInfo(e){
        setFood(e.target.value);
        setresults_window("results-opened")
        setinput_window('input-closed')
        
      };
      
      let foodName = foods[foodChoice].name;
      let calories = foods[foodChoice].calories;
      let serving = foods[foodChoice].amount;


//**OPEN/CLOSE RESULTS WINDOW***/
  const resetInput = () => {
    setinput_window('input-opened');
    setresults_window('results-closed')
  }

  
  return (
    <div className="App">
<header>
  <h1 className = 'header'>What's Your Cheat Food?</h1>
  </header>
  < div id='input' className = {input_window}>
    <div className = 'filters'>
    <label for="weight">Current Weight:</label>
      <input onChange={submitWeight} placeholder={weightOption} 
      size='10' type="number" min='0' id="weight-input" 
      name='weight-input' />
      <button onClick={toggleKg} className = 'kgButton'><span className={kgselected}>kg</span>/<span className={lbselected}>lb</span></button>

    <div className ='divider'> </div>

    <div className='checkboxes'>
    <label>Workout Intensity:</label>
    <label  for='light' className='space-right'>Light</label>
    <input onChecked={lightToggle} className='checkbox' id='light' name='light' value='light' type='checkbox'></input>
    <label for='moderate' className='space-right'>Moderate</label>
    <input className='checkbox' id='moderate' name='moderate' value='moderate' type='checkbox'></input>
    <label for='heavy' className='space-right'>Heavy</label>
    <input className='checkbox' id='heavy' name='heavy' value='heavy' type='checkbox'></input>
    </div>
      </div>
      <div className = 'tiles'>
      {food_tabs}
      </div>
      <h1>index:{foodChoice}name:{foodName} cal:{calories} w:{weight} chk{chosen_workOuts}</h1>
  </div>

  <div id='results' className = {results_window}>

  <h1>{serving} of {foodName} ({calories} calories)</h1>
  <div className='list'>
    {workoutList}</div>
  
    <br className='break'></br>
  <div></div>
  <div className = 'button' >
      <button onClick={resetInput}>GO BACK</button>
  </div>
  </div>
  
  </div>
  );
}

export default App;
