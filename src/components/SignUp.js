import React from 'react'
import {useState} from 'react'

const SignUp = () => {
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const[phone,setPhone]=useState('')

    const submitUser=(e)=>{
        e.preventDefault();

        if(!name||!email||!password||!phone){
            alert("All Fields are mandatory")
        }

        if(password.length<8){
            alert("Password length should be greater than or equal to 8")
        }

        console.log(typeof password)
        let b=password.split('');
        let caps=0;
        let special=0;
        let numeric=0;
        let small=0;
        for(let i=0;i<b.length;b++){
          if(b[i].charCodeAt(0)>64 && b[i].charCodeAt(0)<91){
          caps++;
         }
        if((b[i].charCodeAt(0)>32 && b[i].charCodeAt(0)<48) || (b[i].charCodeAt(0)>57 && b[i].charCodeAt(0)<65) || (b[i].charCodeAt(0)>90 && b[i].charCodeAt(0)<97) || (b[i].charCodeAt(0)>122 && b[i].charCodeAt(0)<127)){
        special++;
         }
        if(b[i].charCodeAt(0)>47 && b[i].charCodeAt(0)<58){
        numeric++;
        }
        if(b[i].charCodeAt(0)>96 && b[i].charCodeAt(0)<123){
            small++;
            }
        }
        if(!caps || !numeric || !small || !special){
            alert("Password should contain atleast 1 cap letter 1 small letter 1 numeric and 1 special symbol")
        }


    
  return (
    <div className='container'>
        <form className='add-form' onSubmit={submitUser}>
            <div className='bottom'>
                <label>Name</label>
        <input type='text' value={name}  placeholder='Add Name' onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div  className='bottom'> 
            <label>Email</label>
        <input type='email' value={email}  placeholder='Add Email' onChange={(e)=>setEmail(e.target.value)}/>
        </div>
       <div  className='bottom'>
        <label>Phone</label>
        <input type='tel' value={phone} placeholder='123-45-678' pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}' onChange={(e)=>setPhone(e.target.value)}/>
        </div>
        <div  className='bottom'>
             <label>Password</label>
        <input type='text' value={password} placeholder='Add Password' onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       
        <input type='submit' value='SignUp' className='btn'/>
        </form>
    </div>
  )
}}

export default SignUp;