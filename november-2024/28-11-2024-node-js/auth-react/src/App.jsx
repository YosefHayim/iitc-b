import './App.css'
import { useDispatch, useSelector } from 'react-redux' 

// import components
import Signin from './components/Signin'
import Signup from './components/SIgnup'

function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  console.log(user);
  
  return (
      <div>
        <h1>Redux and auth and jwt</h1>
        <div>
          <Signin />
          <Signup />
        </div>
        <h1> {user.email} </h1>
      </div>
  )
}

export default App
