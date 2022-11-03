import React,{useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader.js';
import AuthContext from './store/authContext.js';

function App() {
const ctx=useContext(AuthContext);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(()=>{
  //   const storedUserLoggedInInformation=localStorage.getItem('login');
  //   if(storedUserLoggedInInformation==='1'){
  //     setIsLoggedIn(true);
  //   }
  // },[]);
 
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   localStorage.setItem('login','1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('login');
  //   setIsLoggedIn(false);
  // };

  return (
   
      // <AuthContext.Provider value={{
      //   isLoggedIn:isLoggedIn,
      // }}>
      <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
      </React.Fragment>
      // </AuthContext.Provider>
   
  );
}

export default App;