# Uvod u Javascript
 
U ovom uvodnom dokumentu dan je pregled Javascript jezika i njegova moderna verzija.
Javascript je jezik koji se izvršava u pregledniku. Dosad se smatrao "igračkom", ali moderni JS je postao moćan jezik i alat
za izradu ne samo web aplikacija, nego i serverskih rješenja, ugradbenih sustava i desktop aplikacija kroz *elektron*. Sve to omogućio je **Node**.
 
Da bi postigao sve ovo, JS se morao modernizirati i standardizirati. To je
napravljeno kroz **ECMAScript** standard. Trenutno je u uporabi **ES6** i više za razvoj modernih aplikacija. Bitno je napomenuti da preglednik "razumije" samo **ES5**. To je onaj "stari" JS koji ste vjerojatno već vidjeli. Kako onda rade moderne aplikacije?
Uporabom **transpilera**.
 
## Babel transpiler
 
*Compiler* prevodi kod u strojni jezik, *interpreter* u niže razine jezika
ili liniju po liniju u strojni kod, a **_transpiler_** iz jednog jezika u drugi ili iz jednog dijalekta u drugi. Često se zovu *source-to-source* *compilers* jer je njihov output opet programski jezik. [Detaljnije](#https://scotch.io/tutorials/javascript-transpilers-what-they-are-why-we-need-them).
 
Najpoznatiji transpiler za JS je [Babel](#https://babeljs.io/). Svaki popularni alat i framework koristi transpilere i nove verzije Javascripta.
**Babel** ne rješava samo problem novog u stari JS. Implementacije **ES5**
se često razlikuju od preglednika do preglednika. Sa službene stranice:
> The initial issue was that unlike server languages, there was no way to guarantee that every user has the same support for JavaScript because users could be using different browsers with varying levels of support (especially older versions of Internet Explorer). If developers wanted to use new syntax (e.g. class A {}), users on old browsers would just get a blank screen due to the SyntaxError.
>
>Because of its ability to transform JavaScript code, it also can be used to implement new features: thus it has become a bridge to help TC39 (the committee that specifies the JavaScript language) get feedback on proposed JavaScript ideas and for the community to have a say in the future of the language.
>
>Babel is fundamental to JavaScript development today. There are currently over 1.3 million dependent repos on GitHub, 17 million downloads on npm per month, and hundreds of users including many major frameworks (React, Vue, Ember, Polymer), and companies (Facebook, Netflix, Airbnb). It has become such a foundation for JavaScript development that many people don't even know that it is being used. Even if you aren't using it yourself, it's highly likely your dependencies are using Babel.
 
U sljedećem poglavlju ćemo objasniti zašto. Navest ćemo neke zanimljive značajke novog standarda i objasniti zašto se koristi.
 
Također, gdje je JS sada i koji su standardi aktualni:
<https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964>.
 
## Novi JS: ES6/7++
 
Jedna od bitnih značajki je korištenje klasa i nasljeđivanja. Također, dinamička dekonstrukcija i konstrukcija objekata i nizova te asinkrono programiranje. Ovo naravno nisu sve promjene dodane u novi standard, ali spadaju u one koje su najbitnije.
Navedimo ih ovdje:
 
* [__let - const__](#lc)
* [__arrow functions__](#af)
* [__export and imports__](#ie)
* [__Classes__](#classes)
* [__Spread and Rest__](#rest-spread)
* [__Array iterators__](#ai)
 
Za pisanje JS koda online možemo koristiti sljedeće stranice:
- JS bin [ovdje](https://jsbin.com/?js,console)
- Repelit [ovdje](https://repl.it/repls/TroubledCruelChapter#index.js)  

Zbog boljeg razumjevanja, preporuka je pokrenut primjere koji slijede.

### let - const <a name="lc"></a>
 
Znamo da JS koristi **var** keyword za definicije varijabli. *var* je dosta problematičan (nećemo ulaziti u [zašto](#https://discuss.codecademy.com/t/whats-wrong-with-var/224975)).
 
Zamjena za *var* su **const** i **let**. Ključna riječ *const* definira varijablu koja je konstantna i neće se mijenjati tijekom izvođenja koda, a
*let* radi upravo suprotno. *const* se koristi preko 90% slučajeva pogotovo u React aplikacijama.
 
Na jednostavnom primjeru:
 
```javascript
const number = 10;
number = 11;
```
 
Kod iznad je **error**. Ne smije se pridruživati **const** varijablama.
Relativno razumljivo. A što je s objektima?
Za početak definirat ćemo objekt osoba i stvorit ćemo osobu:
 
```JavaScript
const person = {
    name: 'Ivan',
    lastName: 'Kulis',
    age: '25'
}
```
 
Što točno *const* ograničava?
 
Definirajmo dva tipa promjena:
 
1.
 
```JavaScript
person = {
    name: 'Ante',
    lastName: 'Pavic',
    age: 20
}
```
 
2.
 
```javascript
person.age = 26
```
 
Koja će baciti grešku, a koja je dopuštena?
 
Da bismo razumjeli odgovor na ovo pitanje, moramo prvo razumjeti način na koji JS rukuje s objektima. Svaki objekt ima svoju adresu, a varijabla je pokazivač na tu adresu (zamislimo da se svaki objekt stvara sa *malloc* u C-u). Ako napišemo ovo:
 
```javascript
const emptyObject = {}
if (emptyObject === {})
    console.log('true')
else
    console.log('false')
```
 
što će se ispisati? Možda će vas iznenaditi da će se ispisati *false*. Razlog je što *{}* definira stvaranje novog objekta čiju adresu uspoređujemo s varijablom *emptyObject*. Te dvije adrese nisu iste.
Sad definirajmo što ograničava *const*.
 
**_const_ zabranjuje promjenu vrijednosti varijable, odnosno pridruživanje nove vrijednosti varijabli. Za objekte, vrijednost varijable je adresa na taj objekt.**
 
Ako se vratimo na primjere iznad, trebalo bi biti očito da definiranje Ante Pavića na *const* varijablu nije moguće. Međutim, mijenjanje vrijednosti polja objekta *person* je dopušteno. Stoga će prvi kod baciti grešku, a drugi neće. Mijenjanjem svojstva objekta mijenjamo objekt, ali ne mijenjamo **adresu** objekta, tj. ne pridružujemo novu vrijednost varijabli.
 
U definicijama nekih tipova primijetit ćemo da su `immutable`. To znači da ne možemo promijeniti tu varijablu, nego napraviti promjene nad njom i onda ih kopirati u novu varijablu. Ovo je jako specifično za naš omiljeni __string__.
 
```javascript
const text = 'lower case'
console.log(text.toUpper())
// LOWER CASE
console.log(text)
// lower case
 
text = text.toUpper(); //<-- ERROR
const upper = text.toUpper(); // OK
```
 
Bitno je primijetiti da __*.funkcija__ NE mijenja objekt nego vraća novi! Ovo vrijedi za SVE string funkcije i za neke array funkcije. Bitno je ovo shvatiti za izbjegavanje glavobolja kasnije.
 
Ako je jasno kako radi *const* onda je ovo dovoljno da se shvati *let*:
 
```javascript
let text = 'lower case'
console.log(text.toUpper())
// LOWER CASE
console.log(text)
// lower case
 
text = text.toUpper(); // za let ovo je OK
console.log(text)
// LOWER CASE
```
 
### Arrow functions <a name="af"></a>
 
Jedna od najboljih značajki novog standarda.
Definiranje funkcije prije:
 
```javascript
function functionName (params, moreParams) {
   // do stuf
   return res;
}
```
 
ES6 arrow funkcije:
 
```javascript
const functionName = (params, moreParams) => {
    //do stuff
    return res
}
```
 
Ako funkcija prima jedan argument možemo izostaviti zagrade oko argumenata. Također, ako vraća nešto drugo odmah možemo izostaviti uglate zagrade.
 
```javascript
const multiply = (x, y) => x * y
 
const extractParamsAndMultiply = params =>
    multiply(params.x, params.y)
const myParams = {
    x: 10,
    y: 20
}
 
let res = extractParamsAndMultiply(myParams)
console.log(res)
// 200
res = multiply = (myParams.x, myParams.y)
console.log(res)
// 200
```
 
Ako imamo uglate zagrade moramo imati **return** za vraćanje vrijednosti. Inače ne. Ovo dosta olakšava rad s **callback** funkcijama što će biti pokazano
kroz razvoj projekta (*onClick, onChange* i sl.).
 
Funkcije mogu biti const i let.
 
### Import / Export <a name="ie"></a>
 
**Import** i **Export** se koriste za referenciranje objekata i funkcija između
različitih JavaScript datoteka. *Import* je ekvivalent **#include** direktive
u C jeziku. *Export* definira što se može uvesti s *Import* naredbom. Pogledajmo primjer:
 
```javascript
// unutar say.js datoteke
function sayHi(user) {
  console.log(`Hello, ${user}!`)
}
 
function sayBye(user) {
  console.log(`Bye, ${user}!`)
}
 
function sayNop(user) {
  console.log(`Nope, ${user}, won't work!`)
}
 
export {sayHi, sayBye}
//
/************************/
//
//unutar main.js datoteke u istom folderu
import {sayHi, sayBye} from './say.js'
sayHi('Ante')
// Hello, Ante!
sayBye('Mate')
// Bye, Mate!
sayNope('Jure')
// error: sayNope is not a function
```
 
*Export* smo pozvali nad novim objektom kojem smo pridružili *sayHi* i *sayBye*, ali mu **nismo** pridružili *sayNope* iako smo ga definirali unutar datoteke. Poziv te varijable dat će runtime error jer nije definirana (točnije, nismo je otkrili za *Import*).
 
Sad kad je opći koncept jasan, pokrit ćemo različite načine *import / export* naredbi.
 
#### Po varijabli <a name="ie-var"></a>
 
Možemo exportat varijable jednu po jednu prilikom definicije. Onda, kao u primjeru iznad, možemo importat varijable koje želimo:
 
```javascript
// say.js
export function sayHi(name) { ... }
export const say = (what, toWhom) => { ... }
export const thisIsAConstValue = "I will never change"
//
/***************/
//
//main.js
import {say, thisIsAConstValue} from './say.js'
say(thisIsAConstValue, 'Ante')
// I will never change, Ante
```
 
Primijetite dva načina definiranja funkcije. Poželjno je naviknuti se na lambda način (=>).  
Ime varijable u ovom primjeru izgleda dosta nezgrapno. Za to možemo koristiti **as** ključnu riječ:
 
 ```javascript
// say.js
export function sayHi(name) { ... }
const say = (what, toWhom) => { ... }
export const thisIsAConstValue = "I will never change"
 
export {say as s}
//
/***************/
//
//main.js
import {s, thisIsAConstValue as constVal} from './say.js'
s(constVal, 'Ante')
// I will never change, Ante
```
 
### Classes <a name="classes"></a>
 
Klase su jednostavne i prate sličnu sintaksu kao i drugi jezici:
 
```js
class User {
 
  constructor(name) {
    this.name = name;
  }
 
  sayHi() {
    alert(this.name);
  }
 
}
 
// Usage:
let user = new User("John");
user.sayHi();
```
 
Ono što je zanimljivo je uporaba u Reactu:
 
```jsx
class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "red"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}
```
 
Vidimo `extends` i `super()`. U nekim jezicima (npr. C#) `super` je `base`.
Očito je da `Car` nasljeđuje od `React.Component` i poziva `super()` što je
konstruktor `React.Component` klase (bazna ili super klasa) koja mu onda stvara
`state` objekt kojem `Car` pristupa. JS tu prati standard OOP.
 
### Spread and Rest <a name="rest-spread"></a>
 
*Rest* i *spread* operatori definiraju novi način stvaranja objekata i prosljeđivanja parametara.
Koriste se za "izvlačenje" varijabli iz objekta, dekonstrukciju objekta na njegova polja "properties" i kopiranje objekata.
 
#### Dekonstrukcija objekta
 
Recimo da imamo objekt `person` koji ima ime, prezime i dob. Želimo definirati tri varijable: `firstName`, `lastName` i `age`. Ovo je tipičan način:
 
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "22"
}
 
firstName = person.firstName;
lastName = person.lastName;
age = person.age;
```
 
Ovo je dekonstrukcijom objekta:
 
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "22"
}
 
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age)
// jhon doe 22
```
 
Ovo radi ako varijable unutar `{}` imaju **iste nazive** kao što su polja objekta. Znači da ako želimo da `firstName` postane `name` ova sintaksa neće proći.
 
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "22"
}
 
const { name, lastName, age } = person;
console.log(name, lastName, age)
// undefined doe 22
```
 
Što ako objekt ima više polja, a mi želimo izvući 3 zanimljiva i ostale spremiti u drugi objekt? Također, želimo imati `name` umjesto `firstName`.  
Prvo, promijenimo ime varijabli. Dovoljno je dodati ovo:
 
```js
const { firstName: name, lastName, age, ...addressInfo } = person;
```
 
To znači "pretvori `firstName` u `name`".  
Kako ostale parametre ubaciti u drugu varijablu? *rest* operatorom `...`:
 
```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: "22",
  address: "Unknown street",
  streetNumber: "131",
  city: "Gotham"
}
 
const { firstName: name, lastName, age, ...addressInfo } = person;
console.log(name, lastName, age)
// John Doe 22
console.log(addressInfo)
/*
{
  address: "Unknown street",
  city: "Gotham",
  streetNumber: "131"
}
*/
```
 
Sva ostala polja završila su u `addressInfo`. Uobičajen naziv za "ostala polja" je **rest**.
 
#### Dekonstrukcija parametara funkcije
 
Ovo je ono što je bitno. **React** jako često koristi ovu funkcionalnost za primanje argumenata.  
Ideja je primati "imenovane argumente" (*named arguments*) u funkciju. Na primjer, pogledajmo ovu funkciju:
 
```js
function LogInfo (name, lastName, age) {
  console.log(`Ime osobe je ${name}, prezime ${lastName} i ima ${age} godina`)
}
```
 
Dosta jednostavno. Pozovimo je s par argumenata:
 
```js
const name = "Jhon"
const lanme = "Doe"
const age = "22"
 
LogInfo (lastName, name, age)
// "Ime osobe je Doe, prezime John i ima 22 godina"
```
 
Greška? Zašto?  
Zamijenjeni su argumenti! Ovakav način pozivanja funkcija je standardan u svim jezicima.
Ali postoji još jedan način, a to su *imenovani argumenti*. Umjesto da se gleda poredak
argumenata funkcije, gleda se ime argumenta i po tome se pridjeljuje vrijednost.
Sintaksa se zasniva na dekonstrukciji pokazanoj ranije:
 
```js
function LogInfo ({name, lastName, age}) {
  console.log(`Ime osobe je ${name}, prezime ${lastName} i ima ${age} godina`)
}
```
 
Primijetimo `{}` u argumentima funkcije. Poziv sad ide ovako:
 
```js
LogInfo ({lastName, name, age})
// "Ime osobe je John, prezime Doe i ima 22 godina"
// ili
LogInfo (person)
// "Ime osobe je undefined, prezime Doe i ima 22 godina"
```
 
Vidimo da funkcija rastavlja objekt `person` i uzima polja. Ali imamo problem s `name`.
Kako ovo riješiti?  
Ovo se rješava kombinacijom varijable i rest operatora:
 
```js
LogInfo ({...person, name})
// "Ime osobe je John, prezime Doe i ima 22 godina"
// name NE DOLAZI iz person objekta, nego mu se dodaje
```
 
Ovo je ono što je zanimljivo. Ako imamo React komponentu koja izgleda ovako:
 
```jsx
const PersonComponent = ({name, lastName, age}) => (
  <div>
    <p>{`My name is ${name}`}</p>
    <p>{`My last name is ${lastName}`}</p>
    <p>{`I'm ${age} years old`}</p>
  </div>
)
// poziva se ovako:
//...
<PersonComponent name={person.name} lastName={person.lastName} age={person.age} />
```
 
Možemo napraviti ovo:
 
```jsx
<PersonComponent {...person, name} />
// ili
<PersonComponent {...person} name={person.firstName} />
```
 
> REDOSLIJED JE BITAN! Ako varijable imaju isto ime u objektu i izvan, ona koja je poslana zadnja će prebrisati prethodne.
 
#### Dekonstrukcija niza
 
Niz se može dekonstruirati na identičan način.
 
```js
const array = [1, 2 ,3 ,4]
const [one, two, three, four] = array
console.log(array)
// [1, 2, 3, 4]
console.log(one, two, three, four)
/*
1
2
3
4
*/
```
 
S tim da se mogu preskakati vrijednosti:  
 
```js
const array = [1, 2 ,3 ,4]
const [, , three, four] = array
console.log(array)
// [1, 2, 3, 4]
console.log(three, four)
/*
3
4
*/
```
 
Ovo se koristi kod **React hooks** poziva:
 
```js
const [state, setState] = useState()
 
// ili samo setState npr:
const [, setState] = useState()
```
 
Dekonstrukcija niza ima još dosta primjena i nije toliko jednostavna, ali se manje koristi od dekonstrukcije objekata pa ćemo zbog toga stati na ovome.
 
Više o Rest/Spread operatorima: [link](https://javascript.info/rest-parameters-spread)  
Više o dekonstrukciji i funkcijama: [link](https://medium.com/dailyjs/named-and-optional-arguments-in-javascript-using-es6-destructuring-292a683d5b4e)  
Više o nizovima: [link](https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/)
 
### Array iterators <a name="ai"></a>
 
Iteratori nizova nisu nova stvar, ali imaju novu formu sa **ES6**. Najbitniji je map.
Prvenstveno zbog novog pisanja funkcija koje olakšava rad s *callback* funkcijama.
Najbitniji iterator je `map` i koristi se jako često, pogotovo u Reactu.
 
#### Map
 
Funkcija `map` se poziva nad nekim nizom i pripada nizu (što je čini *metodom*). Funkcija vraća novi niz koji se dobiva od starog tako da se nad svakim elementom izvrši **callback**. Recimo da imamo niz brojeva i želimo niz kvadrata:
 
```js
const numbs = [2, 5, 7, 9]
const squares = numbs.map(el => el * el)
console.log(squares)
// [4, 25, 49, 81]
```
 
Vidimo da `map` prima funkciju koja prima element. Nad tim elementom onda izvršava radnju i vraća novi element. U ovom slučaju vraća `el * el`. Isto tako može vraćati i neki kompleksniji element. Zapravo, *callback* funkcija prima dva parametra, ne jedan. Drugi parametar je indeks elementa. Zbrojimo elemente s njihovim indeksima:
 
```js
const numbs = [2, 5, 7, 9]
const sums = numbs.map((el, index) => el + index)
console.log(sums)
// [2, 6, 9, 12]
```
 
Indeksi počinju od nula. U Reactu se ovo koristi jako često. Na primjer, stvorimo niz elemenata za navigaciju:
 
```jsx
const navElements = ["Home", "Profile", "About", "Products"]
// ... Neki kod i logika
const Navigatio = (props) => (
  <nav>
    {navElements.map(el => <a>{el}</a>)}
  <nav>
)
```
 
Ovaj kod će vratiti `<nav>` tag koji u sebi ima 4 linka na *Home, Profile, About* i *Products*.  
Više od `map` funkciji [Link](https://www.javascripttutorial.net/es6/javascript-map/)
 
#### forEach
 
Za razliku od map, ne vraća ništa. Samo izvršava callback nad svim elementima.  
Uglavnom se koristi umjesto *for* petlji nad nizovima. Dobar primjer je kad treba isprintati sve elemente niza.
 
```js
for (i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
 
// forEach:
 
numbers.forEach(number => console.log(number))
```
 
Šira primjena: [link](https://dmitripavlutin.com/foreach-iterate-array-javascript/)
 
## Review
 
Osnove javascripta se podrazumijevaju. Sadržaj ovog dokumenta je proširivanje znanja novim standardom.
Svaki od ovih koncepata bit će ponovljen kroz izradu projekta, ali se podrazumijeva da je donekle jasan što je i svrha ovog dokumenta.
 
### Za samostalno učenje
 
Za one kojima je draže gledati nego čitati (youtube):
 
- *Javascript in one hour* [link](https://www.youtube.com/watch?v=W6NZfCO5SIk)
- *Import / Export* [link](https://www.youtube.com/watch?v=cRHQNNcYf6s)
- *arrow functions* [link](https://www.youtube.com/watch?v=h33Srr5J9nY)
- *deconstruct* [link](https://www.youtube.com/watch?v=NIq3qLaHCIs)
- *map* [link](https://www.youtube.com/watch?v=G3BS3sh3D8Q)
 