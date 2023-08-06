import './App.css';

function App() {
  const handleSubmit = e => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value

    const user = {email, name}
    console.log(user)

    //send client side data to the server side
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {"content-type": "application/json"},
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          alert('users added succecfully')
        }
        console.log(data)})
  }


  return (
    <>
      <h1>db management system</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" placeholder='enter ur name' />
        <br />
        <input type="email" name="email" id="email" placeholder='ur email' />
        <br />
        <br />
        <button type='submit'>submit</button>
      </form>

      <div>
        {
          // users.map(user => <p key={user.id}>{user.name}</p>)
        }
      </div>
  
    </>
  )
}

export default App
