import './App.css';
import Header from './component/header';
import PageOne from './component/pages/page1';
import PageTwo from './component/pages/page2';
import PageThree from './component/pages/page3';

function App() {
  return (
    <div className="App">
      <Header />  
      <PageOne />
      <PageTwo />
      <PageThree />
    </div>
  );
}

export default App;
