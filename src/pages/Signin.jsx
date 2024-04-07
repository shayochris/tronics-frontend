import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useMain } from '../contexts/MainContext'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

//components
import Alert from '../components/Alert'
import TextInput from '../components/TextInput'
import Button from '../components/Button'


export default function Signin() {
  const { baseURL } = useMain()
  const { loginUser } = useAuth()
  const navigate = useNavigate()
  const alert = useRef()
  const [loading,setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      email,
      password
    }
    setLoading(true)
    axios.post(`${baseURL}login/`,formData)
    .then(res =>{
      setLoading(false)
      loginUser(res.data)
      navigate('/')
    })
    .catch(({response})=>{
      setLoading(false)
      if(response.statusText === 'Unauthorized'){
        alert.current.showError(response.data.detail)
      }
      if(response.status === 400){
        alert.current.showError('invalid credentials')
      }
    })
  }

  return (
    <div className='w-full h-screen flex-c bg-gray-200'>
      <div className="p-4 w-[90%] sm:w-[50%] lg:w-[30%] mx-auto bg-white rounded-lg">
        <form onSubmit={handleSubmit} >
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
            label={'Email'}
            required={true}
            type={'email'}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <TextInput
            style={'mb-2'}
            block={true}
            label={'Password'}
            required={true}
            type={'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div className="mt-3">
            <Button
              background={'bg-primary'}
              textColor={'text-white'}
              block={true}
              text={loading ? 'signing in ...' : 'sign in'}
              disabled={!email || !password}
            />
          </div>
          <div className="my-3 text-sm">
            <p>
              Dont have an account? 
              <Link to='/signup' className='text-primary'>Signup</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
