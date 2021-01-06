# Login

Login je ključan i čest koncept koji se koristi u gotovo svim aplikacijama.  
To znači da postoje testirani i prihvaćeni načini za njegovu implementaciju. Login je više poblem backenda nego frontenda. Sve što forntend radi je poziva funkciju za login i čuva *session* u obliku *coockiea* ili *tokena* koji server generia. Postoji više implementacija, ali danas najčešće se koristi **JWT** tj. **Json Web Token**. Video:

[![yt tn](https://img.youtube.com/vi/UBUNrFtufWo/0.jpg)](https://www.youtube.com/watch?v=UBUNrFtufWo)

Ono što ćemo pokazat u ovim vježbama je brza implementacija logina bez puno mozganja.

> NAPOMENA: Login se u stvarnosti NE RADI na ovaj način. U kodu koji sljedi spremat ćemo login u localStorage.  
> Stvarna implementacija bi imala neki globalni state pomoću Reduxa ili Context hookova.  
> Razlika je u tome što login treba biti stanje (state) aplikacije, a u našem primjeru on je samo varijabla localStoragea. Također, u stvarnosti spremamo JWT token u storage, ali posreduje global state manager npr. Redux

Svaka login logika ima 3 bitne sekcije:

- Izvršavanje samog logina, znači slanje auth podataka serveru
- Zaštita Protected ruta od neovlaštenog pristupa 
- Prikaz i izvršavanje Logouta

Za ove vježbe dodao sam kod na našu stranicu za apartmane. U 3 commita dodana je cijela login logika i login page.

## localStorage

Lokalno skladište vrijedosti kao što mu i ime kaže je poseban objekt koji postoji u browseru. Ono što se sprema u njega ostaje spremljeno nakon refresha i nakon gaašenja browsera.  
Radi se od *key-value-pair* objektu koji sprema vrijednosti po ključevima. Ono što se spremi u jednom dijelu aplikacije dostupno je u drugome.  
Jedno od ograničenja je što **sprema samo string!** Ako spremate objekt potrebno ga je pretvoriti u string (serilizirat). Serćom, u JS-u to je lako pomoću `JSON.stringify()` funkcije.

Ima 4 bitne funkcije:
- `.setItem(key, value)`: postavlja neku vrijednost na neki ključ. Čest poziv je `localStorage.setKey("mojKljuc", JSON.stringify(mojObjekt))`
- `.getItem(key)`: dohvaća posavljeni item. Ako ga nema vraća `null`
- `.removeItem(key)`: briše item iz memorije
- `.clear()`: briše sve spremljene iteme

Docs [ovdje](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

Tutorial [ovdje]()
## Commits

### Commit 1: Adding Login page
U pages dodajemo Login page. Login page se sastoji od 2 inputa, 2 labela, buttona i jednog paragrafa za prikaz grešaka i statusa.

```jsx
import React, {useState} from 'react'
import {navigate} from 'gatsby'

import styles from './login.module.css'

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
        localStorage.setItem("loggedIn", username)
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
```
Ali sastoji se i od dosta funkcija i varijabli pa ćemo ih objasnit:  

1) username and password
```jsx
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()
```

Pretsavljaju input koji korisnik upisuje. Vezani su uz input preko `onChange` handlrea. Za password npr. ide ovako: `onChange={e => setPassword(e.target.value)}`. Ovaj patern je uobičajen za rad sa `<Input/>` poljima. Na taj način se sprema ono što korisnik upisuje.

2) form state

```jsx
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
```

Error bi točnije bilo zvati `status` po mojoj implementaciji, ali neka ostane. Svrha te varijable je da forma zna da se dogodila greška (kriv password ili username) pa da može pokazati poruku. Ako je error postavljen, poruka će se pokazati:

```jsx
<p className={`${styles[error !== "Success" ? 'error' : 'success']} ${error ? styles.show : ''}`}>{error}</p>
```

Međutim, kod mene error može bit i "Success" pa se mjenja boja i sadržaj poruke. To je ovo što se vidi u kodu iznad. Kad vidite CSS bit će jasnije:

```css
.error {
  opacity: 0;
  color: red;
  margin: 20px auto;
  margin-top: 0;
}

.success {
  opacity: 0;
  color: greenyellow;
  margin: 20px auto;
  margin-top: 0;
}

.container .error.show,
.success.show {
  opacity: 1;
}
```

Loading je estetika. Stavio sam `setTimeout` na 2 sekunde da se dobije iluzija da se nešto događa. Prije poziva `setTimeout` funkcije stavim loading na `true` i kad se timeout callback izvrši nakon 2 sekunde on ga stavi na `false`. Ta varijabla se onda korsti da se pokaže "loading" na buttonu. Također, može se koristit i za `disable` buttona.

```jsx
<button className={styles.loginButton} onClick={() => submit()}>
  {loading ? 'Loading...' : 'Login'}
</button>
```

3) provjera podataka
```jsx
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
```

Lista korisnika. Inače ovaj dio i funkcija ispod se nalaze na serveu. Ali pošto nema servera....

```jsx
const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(user => user.username === username && user.password === password)
      setLoading(false)
      if (loginSuccessful) {
        localStorage.setItem("loggedIn", username)
        setError('Success')
        return navigate('/')
      }
        setError('Wrong username or password')
    }, 2000)
  }
```

Objašnjenje u koracima:

1) Svaki put kad se funkcija poziva **error** je false i loading je **true**. Error je false tako da se ne prokazuje pogreška dok traje login.
2) Unutar callbacka koji se poziva nakon 2000 ms ili 2 sekunde izvršava se logika. Poziv `user => user.username === username && user.password === password)` traži korisnika koji ima username i password koji je korisnik unio. Ako se nađe znači da je login ispravan. Ako ne, onda nije. Operator `!!` pretvara ono što vraća funkcija u `boolen`.
3) Loading je sad false.
4) Ako je login prošao (`!!` je dao `true`) `error` se stavlja na `Success`. Ono što je bitnije je `localStorage.setItem("loggedIn", username)`. To stavlja u ključ "loggedin" ime logiranog korisnika u localStorage.
5) Pozivamo `return` za izlazak iz funkcije uz `navigate('/')` tako da se nakon tog poziva nalazimo na početnoj stranici.
6) Ako provjera nije našla korisnika stavlja se `"Wrong username or password"` kao `error` koji će se onda prikazati ispod forme.

CSS: 

```css
.background {
  background-color: gainsboro;
  width: 100vw;
  height: 100vh;
}

.container {
  position: absolute;
  width: 360px;
  height: 320px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0px 0px 20px 5px gray;
  background-color: white;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 20px 30px;
}

.field {
  margin: 10px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
}

.field input {
  border: 0;
  margin: 30px 0;
  border-bottom: darkgray solid 1px;
  color: gray;
  font-size: 15px;
}

.field input:focus {
  outline: 0;
}

.field label {
  text-align: left;
  color: gray;
  font-size: 20px;
}

.container button {
  width: 100px;
  margin: 0 auto;
  padding: 10px 20px;
  border: 0;
  background-color: white;
  box-shadow: 0px 0px 5px 0 gray;
  cursor: pointer;
}

.container button:hover {
  background-color: gray;
  box-shadow: none;
  transition: all 0.5s ease-in-out;
}

.error {
  opacity: 0;
  color: red;
  margin: 20px auto;
  margin-top: 0;
}

.success {
  opacity: 0;
  color: greenyellow;
  margin: 20px auto;
  margin-top: 0;
}

.container .error.show,
.success.show {
  opacity: 1;
}
```

Ovime pokrivamo prvu od tri sekcije logina:
 
- ~~Izvršavanje samog logina, znači slanje auth podataka serveru~~
- Zaštita Protected ruta od neovlaštenog pristupa 
- Prikaz i izvršavanje Logouta

### Commit 2: Profile page

Sad dodajemo profilnu stranicu. Ova stranica je vidljiva samo ako se logiramo, a njen je url `/profile`. Kako to napravit?

Logika je jednostavna. Ako je korisnik logiran pokaži stranicu, ako nije pokaži poruku "niste logirani" i pošaljite korisnika dalje.

```jsx
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
```

Na vrhu stranice dohvaćamo korisnika iz `localStorage` sa  `getItem()`. Ako koisnik postoji, if koji sljedi je false pa se preskaće: 

```jsx
  if (!user) {
    setTimeout(() => navigate('/login'), 4000)
    return <p>
      You cannot view this page without login! <br/>You will be redirected to login page shortly
    </p>
  }
```

Ako nije, kod se izvršava. Pokazujemo `<p>` sa porukom i nakon 4 sekunde poziva se `navigate()` koji ide na `/login`.

Glavna stranica je:

```jsx
return (
    <main>
      You are logged in as {user}
    </main>
  )
```

gdje se samo pokaže ime korisnika. Na ovaj način ruta je zaštićena.

- ~~Izvršavanje samog logina, znači slanje auth podataka serveru~~
- ~~Zaštita Protected ruta od neovlaštenog pristupa~~ 
- Prikaz i izvršavanje Logouta

### Commit 3: Show profile and logout in navigation

Posljednji dio je prikazati `Profile` u navigaciji. Vjerovatno vam pada na pamet samo dodati profile u `/constants/nav` i to će radit. Ali, mi želimo prikazati `Profile` **samo ako** je korisnik logiran. Kako?

Isto kao i prije. Prvo provjerimo je li korinsik logiran. Ako je, pokažemo tab van `map()` funkcije koja se poziva u komponenti, ako nije logiran ne pokažemo ga. Isto vrijedi i za Login button. Ako je korisnik logiran, onda mora pisati `"Logout"`, inače `"Login"`. Za to koristimo ternarni operator.

A logout? Budući da je ovdje zgodno što isti tab radi i login i logout, možemo zakačiti funkciju odmah na taj tab. Ta funkcija treba samo izbrisati ključ `"loggedIn"` iz `localStorage` objekta. To se radi sa `localStorage.removeKey()`.

Kod za sve skupa:

```jsx
import { navs as navTabs } from '../../constants/const'
import styles from './style.module.css'
import { Link } from 'gatsby'

const loggedIn = () => !!localStorage.getItem('loggedIn')

const NavigationBar = ({ activeTab, useThisStyle }) => (
    <nav className={styles[useThisStyle || 'navigationBar']}>
        {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
        <Link to={'/login'}>
            <li onClick={loggedIn() ? () => localStorage.removeItem('loggedIn') : () => {}}>
                {loggedIn() ? 'Logout' : 'Login'}
            </li>
        </Link>
        {loggedIn() && <Link to={'/profile'}>
            <li>
                Profile
            </li>
        </Link>}
    </nav>
)

export default NavigationBar
```

- ~~Izvršavanje samog logina, znači slanje auth podataka serveru~~
- ~~Zaštita Protected ruta od neovlaštenog pristupa~~
- ~~- Prikaz i izvršavanje Logouta~~

### Commit 4: fixing SSR

Kao što znate Gatsby koristi SSR za generaciju stranica. To je problem za `localStorage`. Srećom, ne velik problem.  

Naš `localStorage` je browser side API što znači da ga Gatsby ne može pozvat kad stvara stranicu. Trebamo samo zaobići taj poziv tako što provjerimo je li postoji `window`. Ako nije, onda ne postoji ni `localStorage`. Riješenje je jednostavno. Stvorimo *wrapper* za `localStorage` koji provjerava postoji li `window`:

```js
const setItem = (key, item) => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.setItem(key, item)
}

const getItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  return localStorage.getItem(item)
}

const removeItem = item => {
  if (typeof window === 'undefined') {
    return null
  }
  localStorage.removeItem(item)
}

export const myLocalStorage = {
  getItem,
  setItem,
  removeItem
}
```

i sad gdje god smo koristili `localStorage`, koristimo ovaj novi. Primjer za profile:

```jsx
import React, {useState} from 'react'
import {navigate} from 'gatsby'

import {myLocalStorage} from '../helper'

const Profile = () => {
  const [user, setUser] = useState(myLocalStorage.getItem('loggedIn'))
...
```

Ako ne koristite Gatsby ovo nije potrebno. Ovaj korak je potreban samo za Server Side Rendering.

## Filtriranje
Cilj filtriranja je ograničiti sadržaj koji se prikazuje na stranici nekim uvjetom (filterom).
Postupak se sastoji od 3 komponente:
 
1) Originalni puni sadržaj (ono što se filtrira)
2) Filter: ono prema čemu filtriramo
3) Rezultantni sadržaj
 
Originalni sadržaj se čuva u memoriji, filter funkcija se poziva na zahtjev, a rezultantni sadržaj se prikazuje u renderu.
 
U nastavku slijedi primjer s vježbi:
[Interaktivni primjer](https://codesandbox.io/s/confident-borg-hr3y9?file=/src/App.js)
 
```jsx
import React, { useState } from "react";
import "./styles.css";
 
const nekiNiz = [
  { title: "Krema za lice", for: ["face"] },
  { title: "Krema za lice i ruke", for: ["face", "hands"] },
  { title: "Šampon za kosu", for: ["hair"] },
  { title: "Šampon za tijelo i kosu", for: ["hair", "body"] }
];
 
export default function App() {
  const puniNiz = nekiNiz;
  const [arrayToShow, setArray] = useState(nekiNiz);
  const filters = ["face"];
 
  return (
    <div className="App">
      <div
        onClick={() => {
          const filteredarray = puniNiz.filter(
            (el) => !!el.for.find((e) => filters.includes(e))
          );
          setArray(filteredarray);
        }}
        style={{
          backgroundColor: "yellow",
          display: "inline-block",
          padding: "10px",
          cursor: "pointer"
        }}
      >
        Filtriraj
      </div>
      <div
        onClick={() => setArray(puniNiz)}
        style={{
          backgroundColor: "red",
          display: "inline-block",
          padding: "10px",
          margin: "0 10px",
          cursor: "pointer"
        }}
      >
        Reset
      </div>
      <h1>Hello CodeSandbox</h1>
      <input
        onChange={(e) => {
          const value = e.target.value;
          const newArray = puniNiz.filter((el) => el.title.includes(value));
          setArray(newArray);
        }}
      />
      <h2>Start editing to see some magic happen!</h2>
      {arrayToShow.map((el) => (
        <div style={{ margin: "10px 0" }}>{el.title}</div>
      ))}
    </div>
  );
}
```
 
Nađimo 3 komponente filtriranja na ovom primjeru:
 
1) Originalni sadržaj: `nekiNiz` ili `puniNiz`
2) Filter funkcija poziva se na klik: `puniNiz.filter(
            (el) => !!el.for.find((e) => filters.includes(e))
          );`
3) Rezultantni sadržaj: `arrayToShow`
 
### Search
U gornji primjer dodana je "search" funkcija: 
 
```js
onChange={(e) => {
  const value = e.target.value;
  const newArray = puniNiz.filter((el) =>
    el.title.includes(value));
  setArray(newArray);
  }}
```
Sastoji se od par linija koda, a implementira pretraživanje po naslovima. Funkcija koristi opet `.includes()` i njime uspoređuje ono što je korisnik upisao s naslovima elemenata niza.
 
Search i filtriranje po tagovima neće raditi skupa u ovom primjeru. Može se koristiti jedno **ili** drugo.  
Naravno, uz dodavanje malo logike u funkciju može se implementirati filter koji koristi oboje, ali rješenje nije trivijalno i nije potrebno unutar okvira ovog kolegija pa nećemo zamarati njime.
 
### Bitne napomene
Originalni sadržaj je **nepromjenjiv**. Ne smije se mijenjati niti brisati.  
Ako ostane sačuvan može se lako napraviti "reset" filtera.
 
Filter funkcija ovisi o potrebama. U ovom primjeru ona radi presjek skupova, tj. provjerava je li ijedan od elemenata `for` unutar objekta iza također unutar niza filtera. Ako jest, sadržaj se pušta.  
Postoji nekoliko zgodnih filter funkcija koje možete koristiti:  
1) Filter: [array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
2) Find: [array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
3) Includes: [array.includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
4) Push za dodavanje elemenata u neki niz: [array.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
5) Za složenije upite i logiku tu je [lodash](https://medium.com/@hakhoipham/the-beginners-guide-to-lodash-58f98599da54) i njegov docs: [lodash_docs](https://lodash.com/docs/4.17.15)
 
Rezultat je ono što se prikazuje. On **mora** biti **state**. Razlog je jednostavan: ako nije state onda promjene koje radimo nad njim su zanemarene. Znači da se nakon filtriranja ništa neće promijeniti.
