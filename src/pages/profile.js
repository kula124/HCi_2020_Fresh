import React, {useState} from 'react'

import {navigate} from 'gatsby'

const Profile = () => {
  const [user, setUser] = useState(localStorage.getItem('loggedIn'))

  if (!user) {
    setTimeout(() => navigate('/login'), 4000)
    return <p>
      You cannot view this page without login! <br/>You will be redirected to login page shortly
    </p>
  }

  return (
    <main>
      You are logged in as {user}
    </main>
  )
}

export default Profile
