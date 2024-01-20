function Deposit (){
  const ctx = React.useContext(UserContext);
  const i = ctx.users.length
  const [deposit, setDeposit] = React.useState('');
  const [totalState, setTotalState] = React.useState(Number(JSON.stringify(ctx.users[i-1].balance)));
  //const [isDeposit, setIsDeposit] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const [validTransaction,setValidTransaction] = React.useState(false);
  
  let status = `Account Balance $ ${totalState} `;
  //console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  console.log(`valid: ${validTransaction}`);
  const handleChange = (event) => {
      console.log(event.target.value);
      if (isNaN(event.target.value)) {
       alert ('Not a number');
       return setValidTransaction(false);
      }
      if(Number(event.target.value)<0){
        alert('Must be a positive number')
      return setValidTransaction(false);
      }
      if(Number(event.target.value)==0){
        alert('Please enter number more than 0')
      return setValidTransaction(false);
      }else{
      setValidTransaction(true);
      }
      setDeposit(Number(event.target.value));
      
  };
  const handleSubmit = (event) => {
      let newTotal = totalState + deposit ;
      setTotalState(newTotal);
      ctx.users[i-1].balance=newTotal
      setValidTransaction(false);
      setShow(false);
      alert(`Deposit success`)
      event.preventDefault();
  };
  function clearForm(){
    setDeposit('')
    setShow(true);
  }
  
  return (
      <Card
      bgcolor="success"
      txtcolot="white"
      header="Deposit"
      status={status}
      body={show ? (
      <>
      <input  type="text"
              className="form-control"
              id="deposit"
              placeholder="0"
              value={deposit}
              onChange={handleChange}
              //onChange={(e)=>{setDeposit(e.currentTarget.value)}}
              
          />
          <br/>
          <input  type="submit"
                  value={'Deposit'}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!validTransaction}
          />
      </>):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Next</button>
        </>
      )}
      />
  )
}
