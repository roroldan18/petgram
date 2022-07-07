import React, { Suspense, useContext, useEffect} from 'react'
import { GlobalStyle } from './styles/GlobalStyles';
import { Logo } from './components/Logo/Logo';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom';

/* import { Home } from './pages/Home'; */
/* import { Detail } from './pages/Detail'; */
/* import { Favs } from './pages/Favs'; */
/* import { User } from './pages/User'; */
/* import { NotRegisteredUser } from './pages/NotRegisteredUser'; */
/* import { NotFound } from './pages/NotFound'; */

import { NavBar } from './components/NavBar/NavBar';
import { AuthContext } from './Context';


//IMPORT DINAMICOS CON LAZY
const Favs = React.lazy(() => import('./pages/Favs'));
const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const User = React.lazy(() => import('./pages/User'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


export const App = () => {

  const { isAuth } = useContext(AuthContext)

  type propRedirect = {
    to: string
  }

  const Redirect = ({to}:propRedirect) => {
    let navigate = useNavigate();
    useEffect(() => {
      navigate(to);
    });
    return null;
  };




  return (
      <Suspense fallback={<div/>} >
        <BrowserRouter>
          <GlobalStyle />
            <Logo />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={ <Home />} /> 
              <Route path='/pet/:id' element={ <Home /> } />
              <Route path='/detail/:detailId' element={<Detail />} />
              {!isAuth && <Route path='/login' element={<NotRegisteredUser />} />}
              {!isAuth && <Route path='/favs' element={<Redirect to='/login' />} />}
              {!isAuth && <Route path='/user' element={<Redirect to='/login' />} />}
              {isAuth && <Route path='/login' element={<Redirect to='/' />} />}
              <Route path='/favs' element={<Favs />} />
              <Route path='/user' element={<User />} />
            </Routes>
            <NavBar />
        </BrowserRouter>
      </Suspense>
  )
}