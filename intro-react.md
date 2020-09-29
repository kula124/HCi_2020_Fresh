
## Uvod u React
U ovom poglavlju objašnjeni su ciljevi i motivacija korištenja Reactom. Razmotrit ćemo nedostatke statičnog HTML-a i CSS-a i usporedit ćemo bitne razlike između obaju pristupa i, naravno, time odgovoriti na pitanje što je React i zašto bismo se njime koristili. Proći ćemo kroz komponente i napravti jednostavnu stranicu u HTML-u i Reactu i usporedit ćemo pristupe.
### Što je ReactJS?
Definirajmo ga. ReactJS je Javascript biblioteka (library) koja se koristi za izradu interaktivnih elemenata na web-stranicama te kombiniranjem tih elementata izrađuje se i cijela stranica. Pod pretpostavkom da je poznato što je Javascript jezik, Javascript biblioteka je gotov Javascript kod napisan na način da ga je lako uključiti u projekt i koristiti. Koristi se da se spriječi izmišljanje "tople vode" poput običnih animacija, auto-complete tražilica, sortiranja, mapiranja i sličnoga. ReactJS biblioteka omogućuje korištenje JS funkcijama za pisanje HTML koda. Iako na prvu zvuči nezgrapno, koristi se posebna sintaksa koja se zove JSX (Javascript extension) za postizanje ove funkcionalnosti.
### JSX i HTML
JSX izrazi zapravo su pozivi JS funkcija koje onda vraćaju HTML kod. JSX izrazi iz tog su razloga napravljeni da izgledaju isto kao HTML kako bi se smanjila zbunjenost, no bitno je znati da se ni u jednom trenutku tijekom korištenja Reactom **ne** piše HTML kod nego Javascript. Primjer:
```jsx
function helloDiv () {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}
```
Vidimo funkciju koja **vraća** HTML *div* tag u *return* izrazu. Iako ovo izgleda kao HTML, zapravo je riječ o JSX kodu. Kao što je rečeno, on izgleda kao HTML, ali, zapravo, to nije. Ta činjenica omogućuje ovo:
 ```jsx
function helloPerson (personName) {
  return (
    <div>
      <p>Hello {personName}</p>
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
tj.:
 <div>
  <p>Hello Jure</p>
</div>
To znači da je moguće proslijediti parametre u ReactJS funkcije i mijenjati HTML koji vraćaju. Sad, pokušajmo postići istu stvar koristeći se HTML-om i JS-om bez ReactJS-a. Ide u par koraka:

- Potrebno je HTML tagu dati jedinstveni identifikator (ID).
- Zatim tražimo taj tag preko ID-a s pomoću `document.getElementById()` funkcije.
- Ako element postoji, mijenjamo unutarnji HTML pomoću `element.innerHTML = "Hello " + name`

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
Uočimo da nam treba okidač za funkciju, u ovom slučaju *onLoad* iako može biti i *onClick* ili nešto slično. Trebamo "id" za element. Kod Reacta ne trebamo nikad pristupati direktno u DOM što znači da se `document.get` nikad ne koristi. Također, ako želimo napraviti ovo u HTML-u za više elementata, svim tim elementima dodali bismo "class" atribut pa zvali *getElementByClass* i onda u petlji mijenjali *innerHTML*. Ako tekst nije za svaki element jednak, stvari se kompliciraju (trebamo više klasa ili *if* uvjete).

Sve je to slično ako se React koristi na ovaj način. Ono gdje React briljira jest mogućnost podjele stranice na logičke cjeline i elemente. Zatim, moguće je stvoriti vlastite "HTML tagove" koji predstavljaju te cjeline (zapravo je riječ o JSX tagovima). Takve su cjeline samostalne i mogu se koristiti više puta na stranici. Takve se cjeline zovu __komponente__ (__Components__) i predstavljaju osnovnu gradivnu jedinicu ReactJS-a te ono što ga čini moćnim alatom za izradu *web*-sučelja.

###  React components
Svaku *web*-stranicu možemo podijeliti na logičke cjeline, tj. komponente. React nam omogućuje da svaku od komponenti napišemo kao zaseban JSX tag koji se na kraju sastoji od poznatih HTML tagova.

![Splitting webpage into components](https://github.com/n00ne1mportant/HCI_2021/blob/master/Res/componentsDiagram.png?raw=true)

Pogledajmo sljedeći [snippet](https://jsfiddle.net/8c9dm7zq/4/).
Stranica prikazuje ispis 3 osoba, svaka sa svojim imenom, avatarom i dvama dugmetima za brisanje i editiranje. Za ovaj primjer, oni nisu u funkciji. Bitno je samo primijetiti malu razliku u stilu kod treće osobe ("Edit" je bijel). Ako se stranica podijeli na komponente, može se dobiti ovo:

![Component breakdown](https://github.com/n00ne1mportant/HCI_2021/blob/master/Res/componentsBreakdown.png?raw=true)
Hijerarhijski:

- Heading
- Lista ljudi
  - Prikaz jedne osobe
    - Gumb

Sad ćemo prezentirati istu stranicu napisanu u ReactJS-u. Svaka od navedenih komponenti sastojat će se od JSX koda. Budući da su _Heading_ i _Lista_ na istoj razini u hijerarhiji, nije bitan redoslijed njihova definiranja. Za ostale je komponente bitno. Kreće se od zadnjeg elementa, a to je _Button_.
#### Button
Sastoji se od 2 elemenata: _div_ i _paragraf_. Paragraf sadržava text. Budući da je text u našem slučaju "Delete" ili "Edit", te dvije opcije bit će _zakucane_, a programer može birati što će biti prikazano tako da prosljedi tip gumba. Također, vidimo i da se mijenja boja pozadine ovisno o tipu ("Delete" -> crevna, "Edit"-> plava) te boja teksta koja je bijela ili crna.

Dakle, 3 su promjenjiva svojstva: tekst, boja pozadine i boja teksta. Tekst i boja pozadine ovise o tipu gumba, a boja teksta ovisi o tome što želimo. To ćemo definirati 2 parametrima: tipom i bojom (type, textColor).
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
Za početak, da bismo izbjegli pisanje "props" kroz kod, možemo dekonstruirati props objekt na polja koja nam trebaju. U ovom slučaju, `type` i `textColor`. Dobivamo ovo:
`const Button = ({type, textColor}) => {...`
Tekst koji će biti prikazan unutar gumba ovisi o tipu gumba. Isto vrijedi i za pozadinu.
Znači da imamo **uvjet**. Za ovaj slučaj radi preglednosti koristimo se **switch** naredbom.
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
Sad smo definirali *text* i *bgColor* varijable koristeći **let**. Razmislite zašto (ili probajte se koristiti **const** pa će postat očito). Varijablom *text* odmah se koristimo u `<p></p>` izrazu s pomoću `{}` sintakse koju smo vidjeli prije. Što je s *bgColor*? Ta je varijabla očito CSS svojstvo. Ako se koristimo odvojenim CSS datotekom, možemo u nju spremiti ime klase i samo to "zakačiti" na `<p></p>`. Međutim, u ovom primjeru vidimo da *bgColor* nije klasa nego *color* svojstvo. Za ovaj primjer koristit ćemo se *inline* stilom pomoću _style_ varijable. Također, dodat ćemo sve ostale stilove za *Button* iz [primjera](https://jsfiddle.net/8c9dm7zq/4/) u varijablu koja se zove *style*. Svaki JSX tag ima posebni atribut koji se zove **style**. To je ReactJS atribut, a koristi se za definiranje *inline* stilova. U našem slučaju, prima objekt koji se isto zove *style* iako to nije nužno. Primijetimo da su CSS svojstva prebačena u __camelCase__ iz __kebab-case__ (npr. background-color je backgroundColor). 
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
Za prikaz osobe treba nam njezino ime i slika. Ali također, sad kad znamo da sadržava i dva gumba, trebaju nam svojstva i za njih (njihov tip i boja teksta kao što je definirano iznad). Budući da imamo 2 gumba, trebaju nam 2 takva objekta. Možemo koristiti i jedan objekt koji sadrži oboje, ali ići ćemo sa 2 u ovom primjeru.

- Ime i prezime
- Slika za avater (link na sliku)
- objekt sa parametrima za prvi *Button*
- objekt sa parametrima za drugi *Button*

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
<a id="personCard"></a>Kao i prije, koristimo se dekonstrukcijom za parametre. Primjetimo *Button* tag. Izgleda kao HTML tag, ali **nije**. To je naš *Button* koji smo definirali prije. Sljedeća sintaksa: `{...firstButtonProps}` znači "dohvati svojsta objekta", a kad se njome koristimo unutar deklaracije JSX taga (u našem slučaju *Button*) onda znači "uzmi svojstva objekta i pošalji ih kao atribute taga". Za objekt tipa:
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

Vratimo se na *PersonCard* komponentu. Trebamo dodati još stil. Koristimo se istom shemom kao i prije:
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
Ovo je lista koja sadržava elemente *PersonCard*. Ona prima poseban parametar koji se uvijek šalje u Reactu, a to je **children**. On sadržava komponente unutar neke komponente i koncept je koji dolazi iz čistog HTML-a:
```html
<section>
  <p>Paragraf</p>
  <img src="http://someimage/aaa" />
</section>
``` 
*section* tag ima dva djeteta, a to su `<p>` i `<img>`. U Reactu oni bi bili spremljeni u **children** prop.
Budući da lista kojom se koristimo nudi samo okvir unutar kojeg će se vertikalno prikazivati elementi liste te sama nije sadržaj stranice nego je samo oblikuje, ona se zove **container component** ili **HOC (Higher order component)** što, među ostalim označava komponente koje se nalaze iznad drugih komponenti i iscrtavaju ih.
U ovom slučaju lista će biti HTML tag za unordered list `<ul></ul>` i unutar sebe iscrtava list items `<li></li>` koji će joj doći kao djeca. Također, primjenjujemo stil kao i prije putem style objekta.
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
Heading je samostalan i ne prima props iz vanka. Nećemo ga puno komentirati, osim što koristi dva stila što radi na isti način kao i jedan. Kod:
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
To je to što se tiče strukture. Ono što nismo napravili je proslijedili parametre u `<PersonCard />`. Trebamo definirati imena, slike i parametre za gumbove. Napravimo to:
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
Definirali smo prve dvije osobe, ali nismo treću. Treću osobu pokušat ćemo definirati na malo čišći način. Definirat ćemo njezine parametre u objektu i onda ćemo samo dekonstruirati taj objekt kao što smo vidjeli prije u [PersonCard](#personCard).
Da stvari budu zanimljivije, poslat ćemo ime normalno kao atribut, a sve ostalo ćemo definirati unutar objekta.
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
To je objekt. Proslijedit ćemo ga i to je onda puni kod:
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

Puni kod je [ovdje](https://jsfiddle.net/6fe7aj4u/27/)
### React vs HTML
Kao što vidimo, React se fokusira na pojedine komponente. Komponente se mogu koristiti više unutar stranice. Slične komponente realiziraju se i razlikuju kroz parametre koje primaju. Čisti HTML ovo ne podržava. Njegov je ekvivalent copy-paste. Stilovi se uvijek pišu globalno sa HTML-CSS-om. Kod Reacta može pisati stilove za pojedine komponente unutar komponente. Iako smo se koristili *inline* stilovima u ovom primjeru, isto se može postići s CSS datotekama. Tako se inače radi u Reactu, ovo što je pisano ovdje samo je koncept. Ali taj je koncept da pišemo HTML i JS za pojedine komponente. HTML i JS definiraju strukturu i logiku (ponašanje) komponente. Zatim tu komponentu stiliziramo CSS-om isto na razini komponente. Komponente možemo dijeliti s drugima i njima se koristiti u drugim projektima. Svaka komponenta treba biti maksimalno samostalna. Ovaj modularan pristup Reacta izvor je njegove moći i razlog zbog kojeg je postao popularan. Ali, ovo je samo površina. Nismo još ušli u prirodu Reactiva (brz i efikasan odgovor na promjene i događaje, odakle mu dolazi ime), dohvaćanje podataka sa servera, učitavanje slika, podataka uz loading spinere i slično što je ono gdje je React zbilja jak. Proći ćemo kroz sve te stvari i kroz GatsbyJS: framework koji se bazira na ReactJS-u i olakšava korištenje njime za statične stranice poput ove koju smo pisali danas (da, može i lakše od ovog uz Gastby). Statičke stranice nisu jača strana Reacta. U sljedećim poglavljima istražit će se zašto i uvest ćemo se u Gatsby i JS ekosustav