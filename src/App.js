
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import QuestionAnswers from './components/theuryQuestion/QuestionAnswers';

function App() {
  return (
    <div className="App">
       <Header></Header>
       <Home/>
       <QuestionAnswers/>
    </div>
  );
}

export default App;
