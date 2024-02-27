import HomePage from "./components/homePage/HomePage"
import Login from "./components/loginPage/Login"
import LandingPage from "./components/landingPage/LandingPage";


    
    
    
    

const App = () => {
  return (
    <div className="app">
      {/* <h1>Card Container with Modal</h1> */}
      {/* <Login/>  */}
      <div className="container" >
        <div className="row">
      <LandingPage imageUrl=".\pictures\Fixed_investment.jpg" modalTitle="Modal 1" modalContent="This is the content for Fixed Deposit." />
      <LandingPage imageUrl=".\pictures\gold_investment.jpg" modalTitle="Modal 2" modalContent="This is the content for Gold Investment."/>
      </div>
      <div className="row">
      <LandingPage imageUrl=".\pictures\mutual_funds.jpg" modalTitle="Modal 3" modalContent="This is the content for Mutual Funds."/>
      <LandingPage imageUrl=".\pictures\SIP's_investment.jpg" modalTitle="Modal 4" modalContent="This is the content for SIP's."/>
      </div>
      </div>
    </div>
  );
};

export default App;
