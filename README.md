# HCI vježbe

Ovaj repozitorij sadrži vježbe za izradu ReactJS stranice koristeći Gatsby.  
Sastoji se od dokumentacije i uputa za izradu demo web stranice.  
Bitno je napomenuti da se vježbe **NEĆE BODOVATI** i nisu zamjena za projekt iz HCI kolegija (bodovat će se samo zalaganje).

**Na ovom kolegiju potrebno je osmisliti, dizajnirati i izraditi funkcionalnu web stranicu koristeći Gatsby uz ReactJS**.

Ovaj repozitorij služi kao pomoć pri tome **ne kao zamjena**.

## Kako koristiti ovaj repozitorij

Ovaj repozitorij je zamišljen kao kolekcija resursa za samostalno učenje ReactJS-a i razvoja web aplikacija. Repozitorij se sastoji od više brancheva
gdje svaki sadrži veliki korak prema gotovoj web stranici. Svaki commit je koračić na tom putu.  

### Popis brancheva

Repozitorij se sastoji od 6 *project* brancheva, 2 *intro* brancha, jednog ili više *bonus* brancha (koji će se dodavati po potrebi) i naravno **master** brancha koji upravo gledate.

- **master**: sadrži gotov cjeloviti kod stranice, nastao je kao **merge** svih *project* brancheva
- **project**: sadrže dio koda koji vodi prema cjelovitoj stranici
  - praktični dio vježbi gdje ćemo pisati kod: *hands on* pristup
  - svaki koncept korišten u vježbama je pokriven teorijom
  - svaki branch uvodi novi **React koncept** i **segment stranice**
- **intro**: uvodni dio, neće biti pokriven vježbama, ali ćemo se referirati na njega. Služi kao uvod u ono što ćemo raditi
- **bonus**:
  - [Uvod u git](./git-workflow.md)
  - CSS / SASS (to be added)

Kroz vježbe stvorit ćete svoj repozitorij i pratiti upute branch po branch.  
Za projekt ćete imati odvojen repozitorij nevezan s ovim. To će biti vaš samostalan rad.

### Navigacija kroz repozitorij

Primijetit ćete da se svaki branch sastoji od commitova koji imaju ista imena kao i u uputama. Razlog je taj što je sav kod u repozitoriju napisan ručno i dodan kroz commitove. To znači da u bilo kojem trenutku možete provjeriti kod u bilo kojem commitu pomoću `git checkout hashCommita`. To će vas odvesti u [`detached head state`](https://medium.com/zero-to-code/what-is-the-detached-head-state-in-git-4bd47ed86bb4) gdje možete vidjeti točno kako izgleda projekt u tom danom trenutku. To bi trebalo biti korisno za traženje grešaka. Također, možete [izvući novi branch]((https://www.atlassian.com/git/tutorials/using-branches/git-checkout)) iz tog commita i testirati stvari u njemu (u *detached head stateu* napravite `git branch`).

## Sadržaj repozitorija

Intro branchevi vas uvode u React i JavaScript. Project branchevi sadrže
primjenu tih znanja kroz kod. Na [kraju dokumenta]() dan je popis literature korištene u svakom branchu.

### intro-js

Branch sadrži upoznavanje s Ecma Scriptom, Babelom i novim standardima JavaScripta koji se koriste u modernom razvoju web aplikacija. Objašnjeno je
što su transpileri i zašto se koriste. Kroz primjere prikazani su novi koncepti
i sintaksa koja se koristi u JavaScriptu. Na kraju je dan popis te sintakse i linkovi na vanjske resurse korištene u vježbama:

* __ES7+ standardi__ [[link](https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964)]
* __Babel__ [[link](https://babeljs.io/)]
---
* __let - const__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#lc)]
* __arrow functions__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#af)]
* __export and imports__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#ie)]
* __Classes__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#classes)]
* __Spread and Rest__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#rest-spread)]
* __Array iterators__ [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/intro-js/readme.md#ai)]

### intro-react

Ovaj dokument pokriva brzi *crash course* uvod u React. Izrađuje se jednostavna web stranica koristeći tradicionalni čisti HTML i CSS, a zatim ista stranica koristeći ReactJS. Ispod su linkovi na kod jedne i druge stranice:

- **React Components** [[link](https://reactjs.org/docs/thinking-in-react.html)]
- **Docs** [[link](https://reactjs.org/docs/getting-started.html)]
---
- **HTML stranica** [[link](https://jsfiddle.net/8c9dm7zq/4/)]
- **ReactJS stranica** [[link](https://jsfiddle.net/6fe7aj4u/27/)]

### project-0--gatsby-setup

Postavljanje Gatsby alata, instalacija potrebnih paketa (git, node), predstavlja
prve vježbe koje ćemo raditi.

- **Node ekosustav [[link](https://www.altexsoft.com/blog/engineering/javascript-ecosystem-38-tools-for-front-and-back-end-development/)]**
---
- **Node** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/project-0--gatsby-setup/readme.md#nodejs)]
- **git** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/blob/project-0--gatsby-setup/readme.md#git)]

### project-1--contact-bar

U prvim vježbama prolazimo kroz **CSS styling** u Reactu. Radimo prvu komponentu.  
Segment koji radimo je `ContactBar` komponenta:

<p align="center">
  <img src="https://github.com/n00ne1mportant/HCi_2020_Fresh/raw/project-1--contact-bar/readmeRess/sc2.png">
</p>

Sadržaj:
- **Styling** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-1--contact-bar#styling-sa-css-modulima-)]
- **Commits** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-1--contact-bar#sadr%C5%BEaj-commitova-)]

### project-2--navigation

Koncept pokriven u ovim vježbama je `array.map()`.
Segment koji radimo je `NavigationHeader` komponenta.

<p align="center">
  <img src="https://github.com/n00ne1mportant/HCi_2020_Fresh/raw/project-2--navigation/readmeRess/header3.png">
</p>

Sadržaj:
- **.map()** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-2--navigation#reactjs-concept-array-transform-with-map-)]
- **Commits** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-2--navigation#sadr%C5%BEaj-git-commitova-)]

### project-3--content-images

Koncepti pokriveni u ovim vježbama su *lazy loading*, *layout* i *moduli*.
Segment koji radimo je tijelo stranice koje se sastoji od slika i teksta.

<p align="center">
  <img src="https://github.com/n00ne1mportant/HCi_2020_Fresh/raw/project-3--content-images/readmeRess/vj4Composition.png">
</p>

Sadržaj:
- **Layout i moduli** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-3--content-images#react-concept)]
- **Commits** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-3--content-images#sadr%C5%BEaj-git-commitova-)]

### project-4--state-and-multipage

U ovim vježbama uvodimo dodavanje novih stranica i ono što je bitno: **React state**. Također, započinjemo korištenje **NPM paketa**. Nova stranica koja se dodaje je `contact` forma. Dodaje se i *lazy loaded BackgroundImage*.

<p align="center">
  <img src="https://github.com/n00ne1mportant/HCi_2020_Fresh/raw/project-4--state-and-multipage/readmeRess/ContactPlan.png">
</p>

Sadržaj:
- **State** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-4--state-and-multipage#react-concept)]
- **NPM** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-4--state-and-multipage#npm-i-node_modules-)]
- **Background image** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-4--state-and-multipage#4)]
- **Commits** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-4--state-and-multipage#sadr%C5%BEaj-git-commitova-)]

### project-5--cms

U ovim vježbama spajamo se na *Instagram* koristeći Gatsbyjev `graphql` API.  
Uvodi se pojam **CMS** i objašnjava se kako radi i zašto se koristi.

<p align="center">
  <img src="https://github.com/n00ne1mportant/HCi_2020_Fresh/raw/project-5--cms/readmeRess/vj7composition.png">
</p>

Sadržaj:
- **CMS** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-5--cms#react-concept-)]
- **Commits** [[link](https://github.com/n00ne1mportant/HCi_2020_Fresh/tree/project-5--cms#sadr%C5%BEaj-git-commitova-)]

## Savjeti za bezbolan rad i učenje

### Raditi projekt uz vježbe

Ovaj kolegij će baciti puno informacija na vas jako brzo. Preporučujem da paralelno uz praćenje vježbi radite na svom projektu i pokušavate primijeniti nove stvari koje naučite kroz vježbe odmah u projekt. Neće ići lako, ali zato smo tu za pomoć. Kao i uvijek, ako se projekt odgađa do zadnjeg dana bit će jako teško pružiti adekvatan savjet i pomoć. Uz to, učenje će postati otežano zbog nastale panike.  
Da bi se to izbjeglo potrebno je početi raditi na projektu što je to prije moguće.

### Prije vježbi pročitajte teoriju (nema je puno)

Svaka vježba ima teoretski dio gdje se objašnjava nešto novo što će se koristiti.  
Također, prije početka pisanja koda dan je *layout*, tj. grafički plan komponenti koje će se pisati u vježbi. Ako pročitate taj dio prije početka vježbe, bit će vam puno lakše pratiti što se događa.  
U prosjeku, to je oko 3 minute čitanja.

### Drugi materijali, pogotovo YouTube

Ovaj repozitorij je tekstualan. Kažu da je slika 1000 riječi, a video je 60 slika u sekundi.  
Učenje je lakše kad gledate i slušate nekoga dok radi, nego kad čitate kako se to radi.  
Svjesni smo tog nedostatka pa je uključen popis korisnih video materijala na [kraju dokumenta](#l).

### Pitajte što vam nije jasno često i uporno

Autor ovog repozitorija i koda je student koji je prije dvije godine počeo učiti web development. Slobodno mi se obratite kao i bilo kojem drugom studentu.  
Konkretan odgovor na konkretno pitanje je najbolji i najbrži način da naučite nešto.  
Iskoristite to. Manje ćete guglati.  
Kontakt Email:
ikulis00@fesb.hr  
Ili direktnom porukom na Teams.  
Nemojte prestati pitati dok pitanje nije odgovoreno ili vam osoba koju pitate kaže "ne znam". Tad pitajte drugu osobu.

## Vanjski sadržaji <a name="l"></a>

**Video resursi:**
 - Uvod u React 2H [[YT](https://www.youtube.com/watch?v=UtIOMUQ7nWM)]
 - Uvod u Gatsby 1H [[YT](https://www.youtube.com/watch?v=6YhqQ2ZW1sc)]
 - CSS: Općenito 20min [[YT](https://www.youtube.com/watch?v=1PnVor36_40)]
 - CSS: Flexbox 15min [[YT](https://www.youtube.com/watch?v=fYq5PXgSsbE)]
 
 **Gotov dizajn:**

 - Login page 18min [[YT](https://www.youtube.com/watch?v=L5WWrGMsnpw)]
 - Login page transparent 10min[[YT](https://www.youtube.com/watch?v=slu3pImFcRI)]
 - Landing page 30min [[YT](https://www.youtube.com/watch?v=HZv8YHYUHTU)]
 ---

 **Dizajn inspiracija:**  
 <https://www.webdesign-inspiration.com/>
 
 <https://www.dtelepathy.com/blog/inspiration/23-great-examples-of-innovative-navigation-for-your-inspiration>

 <https://medium.theuxblog.com/design-trends-all-the-best-big-hero-image-136061191451>
 
 **Gotov kod spreman za korištenje:**  
 Bootsrap za React  
 <https://react-bootstrap.github.io/>  
 
 Styled Components  
 <https://styled-components.com/>

 CSS animirani background:  
 <https://csspoint101.com/30-css-animated-background/>

**Kontakt:**
Email: ikulis00@fesb.hr  
MS Teams: Ivan Kuliš
