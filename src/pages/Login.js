import React, { useState } from 'react'
import logo from '../assest/logo-login.png'
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefautl()
  }

  console.log("data login", data)

  return (
    <section id='login'>
      <div className='mx-auto container p-4 '>
        <div className='bg p-4 w-full max-w-sm mx-auto rounded' style={{ backgroundColor: '#CADBB7' }}>
          <div className='w-20 h-20 mx-auto'>
            <img src={logo} atl='login icon' />
          </div>

          <form className='pt-6' onSubmit={handleSubmit}>
            <div className='grid'>
              <label>Email: </label>
              <div className='bg-slate-100 p-2'>
                <input
                  type='email'
                  placeholder='enter email'
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
              </div>

            </div>

            <div>
              <label>Password: </label>
              <div className='bg-slate-100 p-2 flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='enter password'
                  value={data.password}
                  name='password'
                  onChange={handleOnChange}
                  className='w-full h-full outline-none bg-transparent' />
                <div className='cursor-pointer text-lg' onClick={() => setShowPassword((preve) => !preve)}>
                  <span>
                    {
                      showPassword ? (
                        <FaEyeSlash />
                      ) :
                        (
                          <FaEye />
                        )
                    }
                  </span>
                </div>
              </div>
              <Link to={'/forgot-password'} className='w-fit block ml-auto hover:underline hover:text-[#485935]'>
                Forgot password
              </Link>
            </div>

            <button className='px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6 bg-[#485935] hover:bg-[#273809] text-white '>Login</button>
          </form>

          <p className='my-5'> Don't have account? <Link to={'/sign-up'} className='hover:text-[#485935] hover:underline'>Sign up</Link></p>

        </div>

      </div>

    </section>
  )
}

export default Login