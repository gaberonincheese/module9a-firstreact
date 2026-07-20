import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserProfile from "./UserProfile"

function App() {

  return (
    <>
      <UserProfile name = "Sarah Johnson" bio = "Full-stack developer passionate about creating user-friendly applications." profileImage = "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" />
      <UserProfile name = "Gabi Martinez" bio = "jus a little guy." profileImage = "https://unsplash.com/photos/dogs-face-2l0CWTpcChI" />
      <UserProfile name = "Bianca Donatto" bio = "I like to set myself against the observable world." profileImage = "https://unsplash.com/photos/adorable-white-bulldog-puppy-portrait-fBwMiyEagGg" />
    </>
  )
}

export default App;
