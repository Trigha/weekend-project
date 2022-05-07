import './App.css';
import Header from './component/header';
import PageOne from './component/pages/page1';
import PageTwo from './component/pages/page2';
import PageThree from './component/pages/page3';
import Footer from './component/footer';

function App() {
  return (
    <div className="App">
      <Header />  
      <PageOne />
      <PageTwo />
      <PageThree />
      <Footer />
    </div>
  );
}

export default App;
