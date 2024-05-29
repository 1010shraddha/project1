import React,{useState}from 'react'
import './form.css'
const Form= () => {
  const [user,setuser]=useState(
    {
      Name:'',Email:'',Phone:'',Password:'' 
    }
  )
  let name ,value
  const data= (e) =>
    {
      name=e.target.name;
      value=e.target.value;
      setuser({...user,[name]:value})
      console.log(user)
    }
    const getdata = async (e) =>
      {
        const {Name,Email,Phone,Password} =user;
        e.preventDefault();
        const options ={
          method:'POST',
          headers: {
            'Content-Type' : 'application/json'

        },
          body: JSON.stringify({
            Name,Email,Phone,Password
          })
        }
        const res = await fetch(
          'https://reactjs-22bfb-default-rtdb.firebaseio.com/UserData.json',
          options
        )
    
      if(res)
        {
          alert("Message Dropped")
        }
        else
        {
          alert("Error 404")
        }
      }
  return(
   <>
   <div className='form'>
    <div className='container'>
        <form method='POST'>
            <input type='text' name='Name' placeholder='your Name' value={user.Name} autoComplete='off' required onChange={data}></input>   
            <input type='email' name='Email' placeholder='Enter email' value={user.Email} autoComplete='off' required onChange={data}></input>   
            <input type='number' name='Phone' placeholder='your Phone-no' value={user.Phone} autoComplete='off' required onChange={data}></input>  
            <input type='password' name='Password' placeholder='Enter the password' value={user.Password} autoComplete='off' required onChange={data}></input>
            
                <button onClick={getdata}> Submit </button>
     </form>
    </div>
   </div>
   </>
  )
}

export default Form
