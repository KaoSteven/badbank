function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [valid,setValid] = React.useState(false)
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      
      if (!field) {
        setStatus('Error: ' + label);
        alert('Error: Please enter your ' + label)
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      if(password.length<8){
        alert('Error: Please enter at least 8 characters in your password')
        return false;
      }else{
      return true};
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return ;
    if (!validate(email,    'email'))    return ;
    if (!validate(password, 'password')) return ;
    ctx.users.push({name,email,password,balance:100});
    //ctx.users.unshift({name,email,password,balance:100});
    console.log(ctx);
    alert('Create account success')
    setShow(false);
  }    
 /*var ctx = {
  users: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]
};

ctx.users.unshift({name,email,password,balance:100});
console.log(ctx);*/

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!validate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm} >Add another account</button>
              </>
            )}
    />
  )
}