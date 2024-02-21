
import './App.css';
import PieChartCustom from './components/PieChartCustomLabel';
import SimpleAreaChart from './components/SimpleAreaChart';
import SimpleBarChart from './components/SimpleBarChart';
import SimpleLineChart from './components/SimpleLineChart';
import SimplePieChart from './components/SimplePieChart';
import SimpleRadialBarChart from './components/SimpleRadialBarChart';

function App() {
  return (
    <div className="App">
      <SimpleLineChart />
      <SimpleAreaChart />
      <SimplePieChart />
      <PieChartCustom />
      <SimpleRadialBarChart />
      <SimpleBarChart />
    </div>
  );
}

export default App;
