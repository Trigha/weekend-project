import './App.css';
import Header from './component/header';
import PageOne from './component/pages/page1';
import PageTwo from './component/pages/page2';

function App() {
  return (
    <div className="App">
      <Header />  
      <PageOne />
      <PageTwo />
    </div>
  );
}

export default App;
