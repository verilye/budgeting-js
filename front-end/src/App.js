import logo from './logo.svg';
import './App.css';
import LoginComponent from './splash/login-component';

function App() {
  return (
    <div className="App">

      <div className='graphic'>
        <div className='graphic-01 graphic-item'></div>
        <div className='graphic-02 graphic-item'> </div>
        <div className='graphic-03 graphic-item'></div>
        <div className='graphic-04 graphic-item'></div>
      </div>

      <div className='title'>budgeting-js</div>
      <div className='menu-items'>
        <div className='login item'>
          login
          https://blog.logrocket.com/react-onclick-event-handlers-guide/#:~:text=The%20React%20onClick%20event%20handler,handlers%20appear%20inside%20curly%20braces. 
          <div className='login visibile'>
            <LoginComponent/>
          </div>
        </div> 
        <div className='features item'>features</div>
        <div className='about item'>about</div>
      </div>
    </div>
  );
}

export default App;
