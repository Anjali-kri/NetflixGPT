import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, SUPPORTED_lg } from '../Utils/constant';
import {toggleGptSearchView} from '../Utils/gptSlice';
import { changeLanguage } from '../Utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const showGptSeach = useSelector(store => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });    
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {          
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClich = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img 
        className='w-44'
        src={LOGO}
        alt='Logo' 
        />
        {user && (<div className='flex p-2'>
          {showGptSeach && <select className='p-2 bg-gray-900 m-2 text-white' onChange={handleLanguageChange}>
            {SUPPORTED_lg.map(lang =>  <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> )}
           
          </select>}
          <button className='py-2 px-2 m-2 bg-purple-600 text-white my-2 rounded-md'
          onClick={handleGptSearchClich}
          >
            {showGptSeach ? "Homepage" : "GPT Search"}
            </button>
          <img className='w-12 h-12' alt='userIcon' src={user.photoURL}/>
          <button className=' font-bold text-white text-l bg-red-700 rounded-lg p-3' onClick={handleSignOut}>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header