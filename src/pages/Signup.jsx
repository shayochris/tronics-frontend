import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMain } from '../contexts/MainContext'
import axios from 'axios'

//components
import Alert from '../components/Alert'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

export default function Signup() {
  const { baseURL } = useMain()
  const navigate = useNavigate()
  const alert = useRef()
  const [loading,setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.length < 3){
      return alert.current.showError('name should contain at least 3 characters')
    }
    if(!name.match(/^[a-zA-Z ]+$/)){
      return alert.current.showError('name should only contain letters')
    }
    if(password.length < 8){
      return alert.current.showError('password should contain at least 8 characters')
    }

    const formData = {
      name,
      email,
      password
    }
    setLoading(true)
    axios.post(`${baseURL}signup/`, formData)
    .then(res =>{
      setLoading(false)
      navigate('/login')
    })
    .catch(({response}) =>{
      setLoading(false)
      if(response.status === 400){
        if(response.data.email){
          alert.current.showError(response.data.email[0])
        }
      }
    })
  }

  return (
    <div className='w-full h-screen flex-c bg-gray-200'>
      <div className="p-4 w-[90%] sm:w-[50%] lg:w-[30%] mx-auto bg-white rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="p-3 text-center">
            <p className="text-xl">Logo</p>
            <p className='text-sm '>Login to your account</p>
          </div>
          <div className="mb-2">
            <Alert ref={alert}/>
          </div>
          <TextInput
            style={'mb-2'}
            block={true}
            label={'Fullname'}
            placeholder={'e.g John Doe'}
            required={true}
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <TextInput
            style={'mb-2'}
            block={true}
            label={'Email'}
            required={true}
            type={'email'}
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextInput
            style={'mb-2'}
            block={true}
            label={'Password'}
            required={true}
            type={'password'}
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <div className="mt-3">
            <Button
              background={'bg-primary'}
              textColor={'text-white'}
              block={true}
              text={loading ? 'creating user..' :'sign up'}
              disabled = {!name || !email || !password}
            />
          </div>
          <div className="my-3 text-sm">
            <p>
              Already have an account? 
              <Link to='/login' className='text-primary'>Signin</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
