
import './App.css';
import{useState} from 'react'

function App() {
  const TopComponent =()=>{
    const[ state, setState] = useState();

  }
  return (
    <div className="App">
      <MiddleDomponent state = {state} />
    </div>
  );
}
const MiddleDomponent = (state)=>{
  return(
    <div>
      <BottomComponent state = {state} />
    </div>
  )}
  const BottomDomponetn =(state)=>{
    return <div>{state}</div>
  }

export default App;
