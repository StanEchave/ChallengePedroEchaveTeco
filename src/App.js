import './assets/css/App.css';
import  icon from './assets/images/wheel.png'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        

      <div className='login'>

        <div className='brandContainer'> 
          <img src={icon}></img>
          <h2 className='brandTittle'>CleanMyCar</h2>
          <p className='brandSub'>
            Indias's first waterless car cleaning company
          </p>
        </div> 

        <div className='formContainer'> 

          <a className='loginHelp' href=''> Need help? </a>

          <div className='loginCointainer'>
            <h1 className='loginTittle'> Log in </h1>
            
            <form className='loginForm'>
            
              <label className='loginLabel'>Email </label>
              <input className='loginInput' placeholder="robert@gmail.com"></input>
            
              <label className='loginLabel'>Password </label>
              <input className='loginInput' placeholder='Enter your Password' ></input>
            
              <a className='loginPassword' href='' >forgot password?</a>
            
              
              <input className='loginButton' type="submit" value="Login"/>
            
            </form>
          </div>
        </div>          
        </div>
            
        
      </header>
      

     
    </div>
    
  );
}



export default App;
