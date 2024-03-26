import './App.css';
import CapacityBar from './components/CapacityIndicator/CapacityIndicator';
import { barData } from './components/CapacityIndicator/constant';
import CircularSlider from './components/CircularSlider/CircularSlider';

function App() {
  return (
    <div className="App">
      <h1>Custom widget </h1>
      <section className='widget-wrapper'>
      <CircularSlider/>
      <CapacityBar indicatorList={barData}/>
      </section>
    </div>
  );
}

export default App;
