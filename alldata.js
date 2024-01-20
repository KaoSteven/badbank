
function AllData(){
  const ctx = React.useContext(UserContext);
  console.log(JSON.stringify(ctx))
  const i=ctx.users.length
  const DisplayData = ()=>{
    const rows=ctx.users.map((row,index)=>{
      return(
        <tr key={index}>
          <th scope="row">{index+1}</th>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>
          <td>{row.balance}</td>
        </tr>
      );
    });
    return rows;
  };
  
  
  return (
    <Card
    style={{width:"auto"}}
    bgcolor="primary"
    txtcolor="white"
    header="All Data"
    body={
    <>
    <h5>All Data in Store</h5>
    
    <div className="table-responsive">
      
			<table className="table table-striped" >
				<thead>
					<tr>
            <th>#</th>
					<th>Name</th>
					<th>Email</th>
					<th>Password</th>
          <th>Balance</th>
					</tr>
				</thead>
				<tbody>
					<DisplayData />
				</tbody>
			</table>
		</div>
    </>}
    />
    );
}