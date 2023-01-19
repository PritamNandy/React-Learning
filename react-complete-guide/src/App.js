import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <ExpenseItem title='Car Wash' price='$7.68' date={new Date(2023, 2, 25)} />
    </div>
  );
}

export default App;
