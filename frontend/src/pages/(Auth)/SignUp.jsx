import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { imageToBase } from '../../helpers/imageToBase.js'
import { toast } from 'sonner'
import SummaryApi from '../../common/index.js'
import useFetchData from '../../hooks/useFetchData.js'

const SignUp = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profilePic: '',
    gender: 'men',
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
    console.log(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.confirmPassword) {
      const { responseData } = await useFetchData(
        SummaryApi.SignUp.url,
        SummaryApi.SignUp.method,
        data
      )
      if (responseData.success) {
        toast.success('succesfully registered ✨✨✨', {
          style: {
            background: 'green',
            color: 'white',
          },
        })
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      }
      if (responseData.error) {
        toast.error(newdata.message, {
          style: {
            background: 'red',
          },
        })
      }
    } else {
      toast.error('please check password and confirm password', {
        style: {
          background: 'red',
        },
      })
    }
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]

    const imagePic = await imageToBase(file)
    setData((prev) => {
      return {
        ...prev,
        profilePic: imagePic,
      }
    })
  }

  return (
    <section
      className='flex h-screen w-screen items-center justify-center'
      id='signup'
    >
      <div className='container mx-auto p-2'>
        <div className='mx-auto w-full max-w-md rounded-xl bg-white px-2 pb-3 pt-6 shadow-xl'>
          <div className='relative mx-auto h-28 w-28 overflow-hidden rounded-full'>
            <div className=' '>
              <img
                src={data.profilePic ? data.profilePic : '/images/signin.gif'}
                alt=''
              />
            </div>

            <form>
              <label>
                <div
                  className={`absolute bottom-0 w-full cursor-pointer text-nowrap bg-slate-200 pb-6 pt-4 text-center text-sm transition hover:text-blue-500 ${data.profilePic ? 'bg-opacity-40' : 'bg-opacity-90'}`}
                >
                  Upload Photo
                </div>
                <input type='file' className='hidden' onChange={handleUpload} />
              </label>
            </form>
          </div>

          <form onSubmit={handleSubmit}>
            <div className='my-3 grid gap-y-1'>
              <label className='text-lg' htmlFor='name'>
                Name :
              </label>
              <div className='bg-slate-50 px-2 py-3 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='name'
                  value={data.name}
                  onChange={handleOnChange}
                  id='name'
                  type='text'
                  placeholder='enter your name'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='my-3 grid gap-y-1'>
              <label className='text-lg' htmlFor='email'>
                Email :
              </label>
              <div className='bg-slate-50 px-2 py-3 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='email'
                  value={data.email}
                  onChange={handleOnChange}
                  id='email'
                  type='email'
                  placeholder='enter your email'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='my-3 grid gap-y-1'>
              <label className='text-lg' htmlFor='password'>
                Password :
              </label>
              <div className='bg-slate-50 px-2 py-3 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  id='password'
                  type='password'
                  placeholder='enter your password'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='grid gap-y-1'>
              <label className='text-lg' htmlFor='confirm-password'>
                Confirm Password :
              </label>
              <div className='bg-slate-50 px-2 py-3 shadow-sm focus-within:shadow-md'>
                <input
                  required
                  name='confirmPassword'
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  id='confirm-password'
                  type='password'
                  placeholder='enter your password'
                  className='h-full w-full bg-transparent outline-none'
                />
              </div>
            </div>
            <div className='grid my-3 gap-1'>
              <label className='text-lg' htmlFor='gender'>
                gender :
              </label>
              <select
                value={data.gender}
                onChange={handleOnChange}
                className='py-2 px-4 bg-gray-100'
                name='gender'
                id='gender'
              >
                <option value='men'>men</option>
                <option value='women'>women</option>
              </select>
            </div>

            <button className='mx-w-[150px] my-hover mb-3 mt-6 w-full rounded-full px-6 py-2 text-xl text-white hover:scale-95'>
              Sign Up
            </button>
          </form>

          <p className='text-center text-sm'>
            already have an account ?{' '}
            <Link
              className='text-[1.1rem] text-blue-300 transition hover:text-blue-400'
              to='/login'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp
