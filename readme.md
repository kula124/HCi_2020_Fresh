
## Uvod u React
U ovom poglavlju objašnjeni su ciljevi i motivacija korištenja Reacta. Razmotit ćemo nedostatke statičnog HTML-a i CSS-a i usporedit ćemo bitne razlike između oba pristupa i naravno time odgovorit na pitanje što je React i zašto bismo ga koristili. Proć ćemo kroz komponente i napravti jednostavnu stranicu u HTML-u i Reactu i usporedit ćemo pristupe.
### Što je ReactJS
Krenimo od definicije. ReactJS je Javascript biblioteka (libary) koja se koristi za izradu interaktivnih elemenata na web stranicama te kobiniranjem tih elementata izrađuje se i cijela stranica. Pod pretpostavkom da je poznato što je Javascript jezik, Javascript biblioteka je gotovi Javascript kod napisan na način da ga je lako koristiti iz vana. Koristi se da se spriječi izmišljanje tople vode poput običnih animacija, auto-complete tražilica, sortiranja i mapiranja i slično. ReactJS biblioteka omogučava korištenje JS funkcija za pisanje HTML koda. Iako na prvu zvuči nezgrapno, koristi se posebna sintaka koja se zove JSX (Javascript extension) za postizanje ove funkcionalnosti.
### JSX i HTML
JSX izrazi su zapravo pozivi JS funkcija koje onda vraćaju HTML kod. JSX izrazi su iz tog razloga napravljeni da izgledaju isto kao HTML kako bi se smanjila zbunjenost no bitno je znati da se ni u jednom trenutku tjekom korištenja Reacta **ne** piše HTML kod nego Javascript. Primjer:
```jsx
function helloDiv () {
return (
	<div>
		<p>Hello world</p>
	</div>
	)
}
```
Vidimo funkciju koja **vraća** HTML *div* tag u return izrazu. Iako ovo izgleda kao HTML, zapravo je riječ o JSX kodu. Kao što je rečeno, on izgleda kao HTML, ali zapravo to nije. Ta činjenica omogućuje ovo: 
```jsx
function helloPerson (personName) {
return (
	<div>
		<p>Hello ${personName}</p>
	</div>
	)
}
```
Ako pozovemo funkciju sa:
```javascript
helloPerson("Jure")
```
dobit ćemo
```html
<div>
	<p>Hello Jure</p>
</div>
```
tj:
 <div>
	<p>Hello Jure</p>
</div>
To znači da je moguće prosljediti parametre u ReactJS funkcije i mjenjati HTML koji vraćaju. Sad, pokušajmo postići istu stvar koristeći HTML i JS bez ReactJS-a. Ide u par koraka

- Potrebno je HTML tagu dati jedinstveni indentifikator (id)
- Zatim tražimo taj tag preko id-a pomoću `document.getElementById()` funkcije
- Ako element postoji, mjenjamo unutarnji HTML pmoću `element.innerHTML = "Hello " + name`

To bi sve skupa izgledalo ovako:
```html
<!DOCTYPE html>  
<html>  
<head>  
<title>Page Title</title>
<script>  
function  helloPerson(name) {  
	var element = document.getElementById("demo")
	if (!element)
		alert("Element not found)
	else
		element.innerHTML  = "Hello" + name 
}
window.onLoad = helloPerson("Jure")
</script>  
</head>
<body>
<div>
	<p id="demo"></p>
</div>
</body>  
</html>
```
Vidimo da nam treba okidač za funkciju, u ovom slučaju *onLoad* iako može biti i *onClick* ili nešto slično. Trebamo "id" za element. Kod ReactJSa ne trebamo nikad pristupati direktno u DOM što znači da se `document.get` nikad ne koristi. Također, ako želimo napraviti ovo u HTML-u za više elementata, svim tim elementima bismo dodali "class" atribut pa zvali *getElementByClass* i onda u petlji mjenjali *innerHTML*. Ako tekst nije za svaki element jednak, stvari se kompliciraju (trebamo više klasa ili *if* uvjete).

Sve je to slično ako se React koristi na ovaj način. Ono gdje React briljira je mogućnost podjele stranice na logičke cjeline i elemente. Zatim, moguće je stvoriti vlastite "HTML tagove" koji predstavljaju te cjeline (zapravo je riječ o JSX tagovima). Te cjeline su samostalne i mogu se koristiti više put na stranici. Takve cjeline se zovu __komponente__ (__Components__) i predstavljaju osnovnu gradivnu jedinicu ReactJS-a te ono što ga čini moćnim alatom za izradu web sučelja.
###  React components
Svaku web stranicu možemo podjeliti na logičke cjeline tj. komponente. React nam omogućava da svaku od koponenti napišemo kao zaseban JSX tag koji se na kraju sastoji od poznatih HTML tagova.
![Splitting webpage into components](https://github.com/n00ne1mportant/HCI_2021/blob/master/Res/componentsDiagram.png?raw=true)

Pogledajmo sljedeći [snippet](https://jsfiddle.net/8c9dm7zq/4/).
Stranica prikazuje ispis 3 osobe, svaka sa svojim imenom, avatarom i dva dugmeta za brisanje i editiranje. Za ovaj primjer, oni nisu u funkciji. Bitno je samo primjetiti malu razliku u stilu kod treće osobe. Ako se stranica podjeli na komponente, može se dobiti ovo:
 ![Component breakdown](https://github.com/n00ne1mportant/HCI_2021/blob/master/Res/componentsBreakdown.png?raw=true)
Hierarhiski:

- Heading
- Lista ljudi
	- Prikaz jedne osobe
		- Dugme

Sad ćemo prezentirati istu stranicu napisanu u ReactJS-u. Svaka od navedenih komponenti će se sastojati od JSX koda. Budući da su _Heading_ i _Lista_ na istoj razini u hiearhiji, nije bitan redosljed njihovog definiranja. Za ostale komponente je bitno. Kreće se od posljednjeg elementa, a to je _Dugme_.
#### Dugme
Sastoji se od 2 elementa: _div_ i _paragraf_. Paragraf sadrži text. Budući da je text u našem slučaju "Delete" ili "Edit", te dvije opcije će biti _zakucane_, a programer može birati što će biti prikazano tako da prosljedi tip dugmeta. Također, vidimo i da se mjenja boja pozadine ovismo o tipu ("Delete" -> crevna, "Edit"-> plava) te boja teksta koja je bijela ili crna.

Dakle imamo 3 promjenjiva svojstva: tekst, boja pozadine i boja teksta. Text i boja pozadine ovise o tipu gumba, a boja teksta ovisi što želimo. To ćemo definirati sa 2 parametra: tip i boja teksta (type, textColor).
Sljedeći kod definira _Button_:
```jsx
const Button = (props) => {
    return (
  	<div>
      <p>tekst koji dolazi ovdje</p>
  	</div>
  ) 
}
```
Za početak, da bismo izbjegli pisanje "props" kroz kod, možemo dekunstruirat props objekt na polja koja nam trebaju. U ovom slučaju, `type` i `textColor`. Dobivamo ovo:
`const Button = ({type, textColor}) => {...`
Tekst koji će biti prikazan unutar gumba ovisi o tipu gumba. Isto vrijedi i za pozadinu.
Znači da imamo **uvjet**. Za ovaj slučaj zbog preglednosti koristimo **switch**.
```jsx
const Button = ({type, textColor}) => {
  let text = ''
  let bgColor = ''
  switch (type.toUpperCase()) { // izbjegavanje Case problema
    case 'EDIT':
  	  text = "Edit"
      bgColor= 'blue'
      break;
    case 'DELETE':
      text = "Delete"
      bgColor= 'red'
      break;
    default:
  	  break;
  }
  
  return (
  	<div>
      <p>{text}</p>
  	</div>
  ) 
```
Sad smo definirali *text* i *bgColor* varijable koristeći **let**. Razmislite zašto (ili probajte koristii **const**). Varijablu *text* odmah koristimo u `<p></p>` izarzu pomoću `{}` sintakse koju smo vidjeli ranije. Što je sa *bgColor*? Ta varijabla je očito CSS svojstvo. Ako koristimo odvojeni CSS file, možemo u nju spremiti ime klase i samo to "zakačiti" na `<p></p>`. Međutim, u ovom primjeru vidimo da *bgColor* nije klasa nego *color* svojstvo. Za ovaj primjer ćemo koristiti inline stil pomoću style varijable. Također, dodat ćemo sve ostale stilove za *Button* iz [primjera](https://jsfiddle.net/8c9dm7zq/4/) u varijablu koja se zove *style*. Svaki JSX tag ima posebni atribut koji se zove **style**. To je ReactJS atibut, a koristi se za defniranje inline stilova. U našem slučaju, prima objekt koji se isto zove *style* iako to nije nužno. Primjetimo da su CSS svojstva prebačena u __camelCase__ iz __kebab-case__ (npr. background-color je backgroundColor). 
```jsx
const style = {
  	backgroundColor: bgColor,
    color: textColor || "black", //ako je textColor false (undefined/null) bit će "black"
    border: "1px solid black",
  	width: "80px",
  	textAlign: "center",
  	height: "20px"
  }
```
Sad pogledajmo puni kod za *Button*:
```jsx
const Button = ({type, textColor}) => {
  let text = ''
  let bgColor = ''
  switch (type.toUpperCase()) { // izbjegavanje Case problema
    case 'EDIT':
  	  text = "Edit"
      bgColor= 'blue'
      break;
    case 'DELETE':
      text = "Delete"
      bgColor= 'red'
      break;
    default:
  	  break;
  }
  const style = {
  	backgroundColor: bgColor,
    color: textColor || "black", //ako je textColor false (undefined/null) bit će "black"
    border: "1px solid black",
  	width: "80px",
  	textAlign: "center",
  	height: "20px"
  }
  
  return (
  	<div style={style}>
      <p>{text}</p>
  	</div>
  ) 
}
```
Pređimo sad na osobnu karticu.
#### PersonCard
Za prikaz osobe treba nam njeno ime i slika. Ali također, sad kad znamo da sadrži i dva gumba, trebaju nam svojstva i za njih (njihov tip i boja teksta kao što je definirano iznad). Budući da imamo 2 gumba trebaju nam 2 takva objekta. Možemo koristiti i jedan objekt koji sadži oboje, ali ići ćemo sa 2 u ovom primjeru.

- Ime i prezime
- Slika za avater (link na sliku)
- objekt sa parametrima za prvi gumb
- objekt sa parametrima za drugi gumb

Ovo bi onda bila prva skica *PersonCard* komponente:
```jsx
const PersonCard = ({imgSrc, fullname, firstButtonProps, secondButtonProps}) => {
  return (
  	<li>
      <img src={imgSrc} />
      <span>{fullname}</span>
      <Button {...firstButtonProps}/>
      <Button {...secondButtonProps}/>
    </li>
  )
}
```
<a id="personCard"></a>Kao i prije, koristimo dekonstrukciju za parametre. Primjetimo *Button* tag. Izgleda kao HTML tag, ali **nije**. To je naš *Button* koji smo definirali ranije. Sljedeća sintaksa: `{...firstButtonProps}` znači "dohvati svojsta objekta", a kad se koristi unutar deklaracije JSX taga (u našem slučaju *Button*) onda znači "uzmi svojstva objekta i pošalji ih kao atribute taga". Za objekt tipa:
```javascript
const obj = {
	prop1: "prvi prop",
	nekiBroj: 3
}
``` 
i `<Button {...obj} />` kod će se prevest u `<Button prop1='prvi prop' nekiBroj=3 />`. Za našu komponentu ovo nema smisla jer u *Button* nismo definirali *prop1* niti *nekiBroj*. Ali smo definirali *type* i *textColor*. Tako da ovo **ima** smisla. 
```javascript
const buttonProps = {
	type: "error",
	textColor: "white"
}
``` 
`<Button {...buttonProps} />` postaje `<Button type="error" textColor="white" />`.

Vratimo se sad na  *PersonCard* komponentu. Trebamo dodati još stil. Koristimo istu šemu kao i prije:
```jsx
const PersonCard = ({imgSrc, fullname, firstButtonProps, secondButtonProps}) => {
	const style = {
    display: "flex",
  	margin: "10px auto",
  	justifyContent: "space-around",
  	alignItems: "center",
  	width: "400px",
  	flexFlow: "row",
  	border: "1px solid black"
  }
  return (
  	<li style={style}>
      <img src={imgSrc} />
      <span>{fullname}</span>
      <Button {...firstButtonProps}/>
      <Button {...secondButtonProps}/>
    </li>
  )
}
```
#### VerticalListContainer
Ovo je lista koja sadrži elemente *PersonCard*. Ona prima poseban parametar koji se uvjek šalje u Reactu, a to je **children**. On sadrži komponente unutar neke komponente i koncept je koji dolazi iz čistog HTML-a:
```html
<section>
	<p>Paragraf</p>
	<img src="http://someimage/aaa" />
</section>
``` 
*section* tag ima dva djeteta, a to su `<p>` i `<img>`. U Reactu oni bi bili spremljeni u **children** prop.
Budući da lista koji koristimo nudi samo okvir unutar kojeg će se vertikalno prilazivat elementi liste te sama nije sadržaj stranice nego je samo oblikuje, ona se zove **container component** ili **HOC (Higher order component)** što međuostalim označava komponente koje se nalaze iznad drugih koponenti i iscrtavaju ih. 
U ovom slučaju lista će biti HTML tag za unordered list `<ul></ul>` i unutar sebe iscrtava list items `<li></li>` koji će joj doć kao djeca. Također, primjenjujemo stil kao i prije putem style objekta.
```jsx
const VerticalListContainer = (props) => {
	const style = {
  	display: "flex",
  	flexFlow: "column",
  	justifyContent: "space-evenly",
  	alignItems: "center"
	}
	return (
	<ul style={style}>
  	  {props.children}
  	</ul>
 	 )
}
```
Mogli smo izvući *children* iz *props* kao i prije: `const VerticalListContainer = ({children}) => ...`. Onda ne bismo trebali `props.children` nego samo `children`. Ali ostavljeno je ovako da se vidi i drugačiji pristup.
#### Heading
Heading je samostalan i ne prima props iz vanka. Nećemo ga puno komentirati, osim što koristi dva stila što radi isto kao i jedan. Kod:
```jsx
const Heading = () => {
  const styleH = {
    margin: "10px auto"
  }
  const styleP = {
  	fontWeight: "bold",
    borderBottom: "1px solid black"
  }
  return (
  	<header style={styleH}>
      <p style={styleP}>
        List of people
      </p>
    </header>
	)
}
```
#### Rezultat
Sad imamo sve djelove pulze te ih trebamo samo složiti skupa. Definirat ćemo *App* komponentu. Ona će sadržavati sve druge komponente i iscrtat ih. Koristeći *React.createElement* funkciju iscrtat ćemo App u DOM. Naš fokus je *App* koponenta:
```jsx
const App = () => {
	return (
	<div>
	  <Heading />
      <VerticalListContainer>
        <PersonCard />
        <PersonCard />
        <PersonCard />
      </VerticalListContainer>
	  </div>
  )
}
```
To je to što se tiče strukture. Ono što nismo napravili je prosljedili parametre u `<PersonCard />`. Trebamo definirati imena, slike i parametre za gumbove. Napravimo sad to:
```jsx
const App = () => {
	return (
	<div>
	  <Heading />
      <VerticalListContainer>
        <PersonCard fullname="Jhon Doe" imgSrc="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
        firstButtonProps={{
	      type: "edit",
  	      textColor: "black"
    	  }}
        secondButtonProps={{
      	  type: "delete",
      	  textColor: "black"
      	}} />
        <PersonCard fullname="Jane Doe" imgSrc="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
        firstButtonProps={{
	      type: "edit",
  	      textColor: "black"
    	}}
        secondButtonProps={{
      	  type: "delete",
      	  textColor: "black"
      	}} />
        <PersonCard />
      </VerticalListContainer>
	  </div>
  )
}
```
Definirali smo prve dvije osobe, ali nismo treću. Treću osobu ćemo pokušat definirati na malo čišći način. Definirat ćemo njene parametre u objektu i onda ćemo samo dekonstruirati taj objekt kao što smo vidjeli ranije u [PersonCard](#personCard).
Da stvari budu zanimljivije poslat ćemo ime normalno kao atribut, a sve ostalo ćemo definirat unutar objekta.
```jsx
const jackBlackProps = {
  	imgSrc: "https://static.thenounproject.com/png/363640-200.png",
    firstButtonProps: {
      type: "edit",
      textColor: "white",
    },
    secondButtonProps: {
      type: "delete",
      textColor: "blue",
    }
  }
```
To je objekt. Sad ćemo ga prosljedit i to je onda puni kod:
```jsx
const App = () => {
	const jackBlackProps = {
  	  imgSrc: "https://static.thenounproject.com/png/363640-200.png",
      firstButtonProps: {
    	type: "edit",
        textColor: "white",
      },
      secondButtonProps: {
    	type: "delete",
        textColor: "blue",
      }
  }
	return (
	<div>
	  <Heading />
      <VerticalListContainer>
        <PersonCard fullname="Jhon Doe" imgSrc="https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png"
        firstButtonProps={{
	      type: "edit",
  	      textColor: "black"
    	  }}
        secondButtonProps={{
      	  type: "delete",
      	  textColor: "black"
      	}} />
        <PersonCard fullname="Jane Doe" imgSrc="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/84-512.png"
        firstButtonProps={{
	      type: "edit",
  	      textColor: "black"
    	}}
        secondButtonProps={{
      	  type: "delete",
      	  textColor: "black"
      	}} />
        <PersonCard fullname="Jack Black" {...jackBlackProps}/>
      </VerticalListContainer>
	  </div>
  )
}
```

Puni kod je [ovdje](%5BFull%5D%28https://jsfiddle.net/6fe7aj4u/27/%29)
### React vs HTML
Kao što vidimo React se fokusira na pojedine komponente. Komponente se mogu koristiti više unutar stranice. Slične komponente se realiziraju i razlikuju kroz parametre koje prmaju. Čisti HTML ovo ne podržava. Njegov ekvivalent je copy-paste. Stilovi se uvjek pišu globalno u sa HTML-CSS-om. Kod Reacta može pisati stilove za pojedine komponente unutar komponente. Iako smo mi koristili inline stilove u ovom primjeru ista stvar se može postići sa CSS datotekama. Tako se inače radi u Reactu, ovo što je pisano ovdje je samo koncept. Ali taj koncept je da pišemo HTML i JS za pojedine komponente. HTML i JS definiraju strukturu i logiku (ponašanje) komponente. Zatim tu komponentu stiliziramo CSS-om isto na raini komponente. Komponente možemo djeliti s drugima i koristiti u drugim projektima. Svaka komponenta treba biti maksimalno samostalna. Ovaj modularan pristup Reacta jer izvor njegove moći i razlog zbog kojeg je postao popularan. Ali, ovo je samo površina. Nismo još ušli u njegovu Reactivu prirodu (brz i efikasan odgovori na promjene i događaje, odakle mu dolazi ime), dohvaćanje podataka sa servera, učitavanje slika, podataka uz loading spinere i slično što je ono gdje je React zbilja jak. Proć ćemo kroz sve te stvari i kroz GatsbyJS: framework koji se bazira na ReactJS-u i olakšava njegovo korištenje za statične stranice poput ove koju smo pisali danas (da, može i lakše od ovog uz Gastby). Statičke stranice nisu jača strana Reacta.  U sljedećim poglavljima istražit će se zašto i uvest ćemo se u Gatsby i JS ekosustav.