import React, {useState} from 'react'
import {navigate} from 'gatsby'

import styles from './login.module.css'

import { myLocalStorage } from '../helper'

const users = [
{
  username: "mate",
  password: "123"
},
{
  username: "jure",
  password: "123"
},
]

const Login = () => {
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", username)
        setError('Success')
        return navigate('/')
      }
        setError('Wrong username or password')
    }, 2000)
  }
  
  return (
  <main className={styles.background} onKeyDown={key => {
    if (key.key === "Enter")
      return submit()
  }}>
    <section className={styles.container}>
      <section className={styles.field}>
        <label htmlFor="username">
          Username
        </label>
        <input name="username" onChange={e => setUserName(e.target.value)}/>
      </section>
      <section className={styles.field}>
        <label htmlFor="password">
          Password
        </label>
        <input name="password" type="password" onChange={e => setPassword(e.target.value)} />
      </section>
      <p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
      <button className={styles.loginButton} onClick={() => submit()}>
        {loading ? 'Loading...' : 'Login'}
      </button>
    </section>
  </main>
)}

export default Login
