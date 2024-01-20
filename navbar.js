function NavBar(){
  return(
    <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light" aria-label="Main navigation">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav" role="navigation">
        <ul className="navbar-nav">
          <li className="nav-item" title="Create an account and try it" >
            <a className="nav-link" href="#/CreateAccount/" aria-current="page">Create Account</a>
          </li>
          <li className="nav-item" title="Login Status" >
            <a className="nav-link" href="#/login/" aria-current="page">Login</a>
          </li>
          <li className="nav-item" title="put money in account" >
            <a className="nav-link" href="#/deposit/" aria-current="page">Deposit</a>
          </li>
          <li className="nav-item" title="money back in account">
            <a className="nav-link" href="#/withdraw/" aria-current="page">Withdraw</a>
          </li>
          <li className="nav-item" title="how much money in account">
            <a className="nav-link" href="#/balance/" aria-current="page">Balance</a>
          </li>
          <li className="nav-item" title="data on website">
            <a className="nav-link" href="#/alldata/" aria-current="page">AllData</a>
          </li>          
        </ul>
      </div>
      
    </nav>
    </>
  );
}