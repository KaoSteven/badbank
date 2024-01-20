function Withdraw (){
  const ctx = React.useContext(UserContext);
  const i = ctx.users.length
  const [withdraw, setWithdraw] = React.useState('');
  const [totalState, setTotalState] = React.useState(Number(JSON.stringify(ctx.users[i-1].balance)));
  //const [isWithdraw, setIsWithdraw] = React.useState(true);
  const [show, setShow] = React.useState(true);
  const [validTransaction,setValidTransaction] = React.useState(false);
  
  let status = `Account Balance $ ${totalState} `;
  //console.log(`Account Rendered with iswithdraw: ${isWithdraw}`);
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
      }
      if(Number(event.target.value)>Number(totalState)){
        alert('Balance is not enough')
        return setValidTransaction(false);
      }else{
      setValidTransaction(true);
      }
      setWithdraw (Number(event.target.value));
      
  };
  const handleSubmit = (event) => {
      let newTotal = totalState - withdraw ;
      setTotalState(newTotal);
      ctx.users[i-1].balance=newTotal;
      setValidTransaction(false);
      setShow(false);
      alert(`Withdraw :${withdraw} success. Balance: ${newTotal}`)
      event.preventDefault();
  };
  function clearForm(){
    setWithdraw('')
    setShow(true);
  }
  return (
      <Card
      bgcolor="success"
      txtcolot="white"
      header="Withdraw"
      status={status}
      body={show ? (
      <>
      <input  type="text"
              className="form-control"
              id="withdraw"
              placeholder="0"
              value={withdraw}
              onChange={handleChange}
              //onChange={(e)=>{setWithdraw(e.currentTarget.value)
          
          />
          <br/>
          <button type="submit"
                  value={'Withdraw'}
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={!validTransaction}
          >Withdraw</button>
      </>):(
        <>
        <h5>Success</h5>
        <button type="submit" className="btn btn-light" onClick={clearForm}>Next</button>
        </>
      )}
      />
  )
}