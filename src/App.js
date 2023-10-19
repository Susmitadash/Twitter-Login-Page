
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="logo-box">
        <img src="./twitter.png" alt="logo" className="logo"></img>
        <h2>Sign In To Twitter </h2>
        <button>
        <img src="./google.png" alt="logo"></img>
        Sign In With Google
        </button>
        <button>
        <img src="./apple.png" alt="logo"></img>
        Sign In With Apple
        </button>
        <hr></hr>
        <span>Or</span>
        <form>
          <input type="text" placeholder="Phone Number,Email Or UserName"></input>
          <button>Next</button>
        </form>
        <button>Forget Password</button>
        <p>Don't Have An Account? <a>Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default App;
