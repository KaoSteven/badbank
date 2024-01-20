function Balance(){
  const ctx = React.useContext(UserContext);
  const i=ctx.users.length
  return (
  <Card
    bgcolor="primary"
    header="Balance"
    body={
    <>
    <h1>Balance</h1>
    <h2>{"$"+ctx.users[i-1].balance}</h2>
    </>
    }
    />
  );
}
