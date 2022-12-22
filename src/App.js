import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
  let data = [
    {
      id:1,
      img:elephant
    },
    {
      id:2,
      img:elephant
    },
    {
      id:3,
      img:elephant
    },
    {
      id:4,
      img:elephant
    }
  ]
  return data;
}

function App() {
 let d=imageData()
 return(
  <div>
  <h1>Kalvium Gallary</h1>
  
  {d.map(e => {
    return(  
      <img className='elephant' src={e.img} alt="" />
    )
  })}
  </div>
 )
}

export default App;
