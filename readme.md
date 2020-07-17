

## Javascipt ekosustav i NodeJS
Javascript ekosustav je okolina javascripta koja se sastoji od biblioteka, softverskih paketa, editora i ostalih rezursa koji omogućavaju i olakšavaju razvoj JS aplikacija. 
[Izvor](https://www.altexsoft.com/blog/engineering/javascript-ecosystem-38-tools-for-front-and-back-end-development/)
U ovom poglavlju fokusirat ćemo se na *package manager* aplikaciju koja omogućava jedonstavan i brz pristup repozitoriju gotovog koda kako ne bismo nepotrebno riješavali riješene probleme. Korištenje ovih paketa je besplatno te su dani kao *open source* softver.
Kao što znamo, Javascript je jezik koji se isključivo izvršava unutar web pretraživaća (Chrome, Firefox i sl.), međutim postoji run-time okruženje za pokretanje Javascript koda izvan okvira pretraživaća, to okruženje je **NodeJS**.
### NodeJS
Radi jednosavnosti, NodeJS je program koji može pokretati Javasctipt kod sa tvrdog diska slično kao što to može i Java run-time. Princp rada je jednostavan: NodeJS enkasulira **V8** engine, što je upravo Javascript engine koji koristi Chrome pretraživać. Možemo reći da je NodeJS izvadio motor automobila i pokreće taj motor van automobila i koristi ga za druge namjene. Ta namjena je najčešće web server, stoga se NodeJS često zove "Javascript za servere". Način izvršavanja jako je sličan izvršavanju Java koda.
![enter image description here](https://www.freecodecamp.org/news/content/images/2019/06/1_sYPllpcAZLHmpuQSRPuO0Q.png)
Nećemo ulazit detaljnjije u izvedbu jer nije u okviru onog što se radi na ovom kolegiju, ali za one koje zanima ovdje je [izvor](https://www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/).
### NPM: Package manager
Instalacija NodeJS-a je neophodna za rad sa modernim Javascriptom čak iako ne radimo serverske aplikacije. Jedan od razloga je *NPM*. NPM je **Node Package Manager**. To je program koji je dio NodeJS-a i dio je JS ekosustava, a njegov cilj je instalacija softverskih paketa i upravljanje stablom ovisnosi paketa (dependency tree) što brže i efikasnije. NPM se može pozvati iz komandnog prozora nakon instalacije NodeJS-a. Korsitit ćemo ga za instalirati GatsbyJS.
### GatsbyJS: zašto i kako
GatsbyJS je framework za ReactJS. Možemo reći da imamo framework koji se oslanja na framework što se može činiti kao ogroman overhead, ali cilj Gatsby-a je upravo olakšavanje izrade statičkih web stranica. GatsbyJS je "static site generator" uporabom ReactJS-a. 

"Static site" znači da imamo HTML + CSS + JS. Tri datoteke (ili više ako ih razbijemo na više djelova, ali to je samo estetika) koje možemo stavit na USB pa prebacit na neki web server ili podić na Apache ili na samo otvorit u web pretraživaću na računalu. Ispred sebe onda vidimo gotovu stranicu i to je to. Sa ReactJS-om, trebamo dignuti server koji će služiti ReactJS aplikaciju. Trebamo NodeJS i NPM za instalaciju svih paketa koje ReactJS koristi. Ne možemo to jednostavno prebacit na USB ili samo otvorit u pretraživaću. Stoga se za statične stranice ReactJS ne preporuča jer stvara ogroman overhead (preporuča se ručno pisanje HTML-a ili WordPress). GatsbyJS rješava ovaj problem na jednostavan način: piše se pojednostavljena verzija ReactJS-a (nema navigacije i routinga npr.) i onda kad smo gotovi, GatsbyJS će sav taj ReactJS kod pretvorit u klasični HTML + CSS + JS statični site. 
GatsbyJS premošćuje most između ReactJS-a i statičnih stranica. 

## Instalacija alata
U sljedećim poglavljima korak po korak ćemo instalirati sve potrebne alate za početak rada. Krenut ćemo sa NodeJS-om koji nam daje NPM. NPM onda instalira GatsbyJS i sve ostale pakete koje ćemo možda trebati. 
### NodeJS i NPM
#### Windows
Za windows korisnike, potrebno je skinuti NodeJS instaler sa [službene stranice](https://nodejs.org/en/). Uvjek skidamo LTS verziju ("long term support"). Non-LTS verzije su **nešto kao** "beta" verzije.
Nakon instalacije, možemo potvrditi da je sve prošlo u redu koristeći terminal:
```bash
$ node -v  
v10.19.0
$ npm -v
6.10.3
```
Ako neka od naredbi daje error umjesto verzije softvera instalacija nije prošla ureno. Za Windows, čest error je da se `node.exe` ne doda u *system path variable*. Simpotom je da se naredba "node" ne može pronaći. Problem je lako [riješiti](https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10).
#### Linux (Ubuntu/Debian)
Prvo radimo repository update, zatim instalaciju softvera.
```bash
$ sudo apt-get update
-||-
$ sudo apt-get install nodejs
```
Pathing bi trebao radit po defaultu.
#### Arch based
```bash
$ sudo pacman -Syu
-||-
$ sudo pacman -S nodejs
```
#### WSL
Ovisi o verziji Linuxa. Postoji probem sa pathingom kod instalacije NPM ako je NPM instaliran i na Windowsu. Zbog šugavog načina na koji WSL radi (oslanja se na Windwos registre) pokušat će pokrenut NPM sa Windowsa što neće proć. Može se koristiti [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) ili se može samo unmountat `/mnt/c`. Također, [deinstalacija NodeJS-a u Windowsu i restart Linux shella riješava problem](https://github.com/microsoft/WSL/issues/3882) (ako se to može nazvati rješenjem). 
### GatsbyJS CLI
#### Instalacija CLI alata
Jednom kad imamo NodeJS i NPM spreman, potrebno je instalirati GatsbyCLI. To je alat koji služi za konfiguraciju i stvaranje GatsbyJS projekata. Instalira se pomoću NPM-a. Koristi se global flag `-g` za instalaciju kako bi se alat mogao koristiti globalno na sustavu (umjesto u samo jednom folderu). Naredba izgleda ovako:
`$ npm  install -g gatsby-cli`
Provjerimo sa `$ gatsby -v`:
```bash
~ gatsby -v 
║ Gatsby collects anonymous usage analytics
║ to help improve Gatsby for all users.  
║ If you'd like to opt-out, you can use `gatsby telemetry --disable`
║ To learn more, checkout https://gatsby.dev/telemetry
Gatsby CLI version: 2.12.61
```
Ako se prikazuje navedena poruka, sve je prošlo u redu.
#### Stvaranje novog projekta
Koristeći sad instalirani CLI stvaramo novi projekt: 
`$ gatsby new moj-projekt`
Proces će potrajati neko vrijeme. GatsbyCLI sad dohvaća sve potrebne pakete koristeći NPM ispod haube za rad sa  ReactJS-om i naravno alate koji će taj ReactJS na kraju pretvoriti u HTML/CSS/JS. Kad ne bismo koristili GatsbyJS nego samo ReactJS, ovaj proces instalacije alata trebali bismo ponoviti na svakom serveru sa kojeg serviramo našu stranicu. 
Nakon nekog vremena vidjet ćemo sljedeću poruku:
```bash
Your new Gatsby site has been successfully bootstrapped. Start developing it by running:  
  
cd moj-projekt  
gatsby develop
```
Napravimo kako piše:
```bash
cd moj-projekt && gatsby develop
```
Gatsby sad podiže development server koji servira React aplikaciju. 
Kad se proces završi vidimo sljedeće:
```bash
success Building development bundle - 7.165s
```
Sada u svom browseru upišemo danu adresu:
`localhost:8000`
![localhost:8000](https://github.com/n00ne1mportant/HCI_2021/blob/intro-gatsby/Res/address_bar.png?raw=true)
Trebali bismo vidjet "Hello world" Gastby stranicu.
![Hello world Gatsby!](https://github.com/n00ne1mportant/HCI_2021/blob/intro-gatsby/Res/gatsbyHelloWorld.png?raw=true)
Detaljne upute o instalaciji mogu se naći na službenoj [stranici](https://www.gatsbyjs.org/docs/quick-start/)
### Editor i kod projekta
Ok, sad je sve spremno, ali kako i gdje pišemo kod?
Ne postoji ograničenje za korištenje editora, ali preporuča se [VSCode](https://code.visualstudio.com/). Alternativa su[Atom](https://atom.io/) i [WebStorm](https://www.jetbrains.com/webstorm/) koji toplo preporučam ako vam se ne sviđa VSCode. Inače se plaća, ali ga studenti FESB-a [mogu dobiti besplatno](https://www.jetbrains.com/community/education/#students). Smatra se najboljim editorom trenutno, a u stopu ga sljedi VSCode.
Nakon instalacije, otvorimo folder koji sadrži naš projekt. 
![file -> open folder](https://github.com/n00ne1mportant/HCI_2021/blob/intro-gatsby/Res/VSCode_open.png?raw=true)
Trebalo bi nas dočekati ovo:
![project structure](https://github.com/n00ne1mportant/HCI_2021/blob/intro-gatsby/Res/VSCode_files.png?raw=true)
Prođimo kratko kroz strukturu projekta.
#### Folderi
Sve što vidimo automatski stvara Gastby alat. Većina tih foldera interno koristi Gatsby za postavljanje web servera te nisu naša briga. Ali idemo redom:
- .cache
- public
- node_modules
- src

*.cache* folder je upravo što mu i naziv govori: *cache*. Niakd ga ne diramo, ali ponekad kad mjenjamo konfiguraciju projekta *.cache* će trebati izbrasat da se promjene primjene. Van toga nama je beskoristan.

*public* folder sadrži radnu verziju statičke stranice u danom trenutku. Nikad ne trebamo gledat što se nalazi u njemu i nama nema nikakvu uporabu.

*node_modules* folder je ogroman. Postoji u svakom modernom JS projektu, a sadrži kod svih paketa koje smo dodali koristeći NPM ili u ovom slučaju, kod paketa koje je dodao GatsbyCLI. Tu se nalazi ReactJS kod, GatsbyJS kod i sve što njima treba za rad. Nikad ne trebamo ulazit u taj folder. Vratit ćemo se na njega kasnije

*src* označava *source*. Ovo je jedini folder koji nas zanima. Sav naš kod ide u ovaj folder. Vratit ćemo se na njega kad budemo detaljnjije pregledavali strukturu koda u Gatsby projektima.
 #### Datoteke
 Imamo:
 - .gitignore
 - .pretierignore  i .pretierrc
 - package.json i package.lock
 - gatsby-config.js
 
Osim njih imamo druge `gatsby-*.js` datoteke. One su dosta specifične te ih za većinu projekata ne trebamo. Ako budu potrebne, znat ćemo čemu služe (upute će nas dovesti do njih).

*.gitignore* je datoteka koja osigurava da *cache*, build files, *node_modules* logovi i slične stvari ne ulaze u git. Razlog je taj što ti podatci ne trebaju bit u gitu. Ne trebamo se zamarati tom datotekom, ona je unaprijed ispravno podešena. Detaljnije [ovdje](https://www.atlassian.com/git/tutorials/saving-changes/gitignore).

*.pretierignore  i .pretierrc* su datoteke koje sadrže postavke za [Prettier](prettier.io). Alat za formatiranje koda koji preporuča Gatsby. Ako ge ne želimo koristiti obe datoteke se mogu izbrisati.

*package.json* i *package.lock* sadrže popis paketa koji se koriste u projektu. *package.lock* se **ne** smije dirat ručno. On je autogenerated. *package.json* možemo mjenjati ako je to potrebno i ručno, ali pakete dodajemo i brišemo kroz NPM alat. *package.json* pokazuje što se nalazi u *node_modules* folderu. Ponekad paketi znaju "zapeti" i ostanu polu-instalirani. U tom slučaju potrebno je izbrisati *node_modules* folder i pokrenuti `npm i` da se napravi reinstalacija paketa. *lock* datoteka se  pri tome ne dira. 

*gatsby-config.js* je glavna datoteka za konfiguraciju Gatsbya. Dodavanje novih plug-ina, modula i ostala konfiguracija radi se kroz *gatsby-config.js*. Sve upute o tome se lako nađu na [službenim stranicama](https://www.gatsbyjs.org/docs/api-reference/). 

#### src
Sad prelazimo sa nebitnih i manje bitnih stvari na bitne. Folder *src* sarži naš kod i izgleda ovako:
![srouce files](https://github.com/n00ne1mportant/HCI_2021/blob/intro-gatsby/Res/VSCode_src.png?raw=true)
*components* sadrži sve naše ReactJS komponente koje ćemo definirat. *pages* sadrži stranice, poput */home /about /login* i sl. Vidimo da je većina koda u ovom floderu *js*.  Unutar *pages* vidimo *index.js*. To je početna stranica. Detaljnije o samom kodu i promjenama koje ćemo napravit sljedi u sljedećim poglavljima. 
