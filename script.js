const dzien = document.querySelector('#dzien');
const profesor = document.querySelector('.profesor-img img');
const imie = document.querySelector('#tekst');
const btn = document.querySelector('.btn');
const miesiac = document.querySelector('#miesiac');
const btnZa = document.querySelector('.zatwierdz');
const answer = document.querySelector('.answer');
const answer2 = document.querySelector('.answer2');
const error = document.querySelector('.error');
const przepowiednia = document.querySelector('.urodzenie');
const welcome = 'nazywam się profesor Sybilla Trelawney .Uczę wróżbiarstwa w szkolę magi i czarodziejstwa w Hogwardzie .Jeśli masz ochotę to mogę ci opowiedzieć o twoim znaku zodiaku wystaczy że mi podasz swoją date urodzenia ';

var imieW = imie.value;


 time = 50;
indexText = 0;
let count = 0;

const zatwierdzenie = ()  => {
    imieW = imie.value;
  
    answer2.textContent = '';
    answer.textContent = '';
    zdjecie();
    tekst();


}

const addletter =()=>{

        const wel = `Witaj ${imieW} , ${welcome}`;
        answer.textContent += wel[indexText];
        indexText++;
        if (indexText === wel.length) clearInterval(indexTyping);
        

}


const data_Urodzenia = () => {
    przepowiednia.style.display = 'block';
}

const zdjecie = () => {
    profesor.classList.add('shake-animation')
    profesor.style.display = 'block';
}

const tekst = () => {

    

    if (imie.value !== '' ) {

        time = 50;
        indexText = 0;
        error.style.display='none';
        answer2.style.display='none';
        zdjecie();
        answer.classList.add('welcome-animation')
        answer.style.display = 'block';
        var imieW = imie.value;
      
        console.log(imieW);
       
        indexTyping = setInterval(addletter, time);
       
        setTimeout(data_Urodzenia, 13000);
    } else if(imie.value == '') {

        profesor.style.display="none";
    przepowiednia.style.display='none';
     answer.style.display='none';   
     error.style.display='block';
     
     error.textContent="Musisz podać imię";
     
       
    }


}




btnZa.addEventListener('click', zatwierdzenie)

btn.addEventListener('click', () => {
    answer2.style.display = 'block';
    const nMiesiaca = miesiac.value;
    const dMiesiaca = parseInt(dzien.value);

    if ((dMiesiaca >= 21 && nMiesiaca === 'Marzec') || (dMiesiaca <= 19 && nMiesiaca === 'Kwiecień')) {
        answer.textContent = 'Najważniejszym dążeniem człowieka spod znaku Barana jest osiąganie sukcesów i odnoszenie zwycięstw. To go napędza przez całe życie. Lubi rywalizować i jest przy tym dość agresywny. Porażka nie wchodzi w grę. Baran po prostu musi być we wszystkim najlepszy i zajmować pierwsze miejsce.Najważniejsze cechy: przywództwo – to główna domena tego znaku. Baran działa i ciągle posuwa się naprzód. Jest aktywny, czasami wręcz agresywny w swoim postępowaniu.';
    }
    if ((dMiesiaca >= 20 && nMiesiaca === 'Kwiecień') || (dMiesiaca <= 22 && nMiesiaca === 'Maj')) {
        answer.textContent = 'Zodiakalny Byk lubi wygodę oraz zmysłowe przyjemności. Człowiek urodzony pod tym znakiem jest zazwyczaj rzeczowy i praktyczny. Charakteryzuje się powolnością w działaniu, wytrwałością i cierpliwością. Często potrzebuje nieco więcej czasu na realizację zadań, ale za to wykonuje swoje obowiązki dokładniej i bardziej zwraca uwagę na szczegóły.Najważniejsze cechy: gromadzenie i posiadanie. Byk ceni dostatnie życie i rozkoszuje się nim. Jest stały, wytrwały, pracowity i zmysłowy.';
    } else if ((dMiesiaca >= 23 && nMiesiaca === 'Maj') || (dMiesiaca <= 21 && nMiesiaca === 'Czerwiec')) {
        answer.textContent = 'Bliźnięta są bardzo niezależne. Nie pozwolą na zniewolenie siebie przez drugiego człowieka ani na żadne krępujące zasady. Nikt nie będzie im dyktować warunków. Chcą odkrywać świat na własną rękę. Lubią zmiany i wolność – są to rzeczy niezwykle ważne dla Bliźniąt.Bliźnięta mają zdolność do natychmiastowego reagowania na sytuacje. Wynika to z ich nerwowego temperamentu. Można powiedzieć, że próbują wchłonąć wszystko na raz ze swojego otoczenia. To sprawia, że nie czekają z działaniem. Podejmują je szybko i zdecydowanie. Nie lubią długo zastanawiać się i rozważać wszystkich "za i przeciw".';
    } else if ((dMiesiaca >= 22 && nMiesiaca === 'Czerwiec') || (dMiesiaca <= 22 && nMiesiaca === 'Lipiec')) {
        answer.textContent = 'Człowiek urodzony pod znakiem Raka odczuwa silny związek z naturą i potrafi żyć z nią w doskonałej harmonii. Dba o ekologię i smucą go katastrofy naturalne oraz degradacja środowiska dokonywana przez ludzką cywilizację.Najważniejsze cechy: wrażliwy i nieśmiały – czasami wręcz chorobliwie. Bardzo mocno przywiązuje się do bliskich mu osób oraz do przedmiotów. Towarzyski, chętnie otacza się ludźmi.';
    } else if ((dMiesiaca >= 23 && nMiesiaca === 'Lipiec') || (dMiesiaca <= 23 && nMiesiaca === 'Sierpień')) {
        answer.textContent = 'Lew jest pełen energii, która działa jak magnes na innych ludzi. Przyciąga ich do Lwa jego dowcip, urok i wszystko, co ma do powiedzenia. A trzeba przyznać, że mówi o rzeczach wielkich i bardzo interesujących.Osoba urodzona pod tym znakiem nigdy nie zgodzi się być na drugim miejscu. Pod żadnym pozorem i w żadnej sytuacji czy sferze życia. Lew po prostu chce być najlepszy, co może być źródłem frustracji, także finansowej. ';
    } 
    else if ((dMiesiaca >= 24 && nMiesiaca === 'Wrzesiń') || (dMiesiaca <= 22 && nMiesiaca === 'Październik')) {
        answer.textContent = 'Waga jest personifikacją sprawiedliwości oraz dążenia do równowagi. Jest to nadrzędna cecha każdego człowieka urodzonego pod tym znakiem. Nie dziwi więc fakt, że Waga posiada niesamowitą umiejętność rozpoznawania motywów innych ludzi. Potrafi też głęboko analizować różne sytuacje, żeby wyciągnąć na światło dzienne ich prawdziwe znaczenie. Waga jest niczym sprawiedliwy sędzia bezbłędnie (zazwyczaj) rozstrzygający spór.';}  
    else if ((dMiesiaca >= 24 && nMiesiaca === 'Sierpień') || (dMiesiaca <= 22 && nMiesiaca === 'Wrzesień')) {
        answer.textContent = 'Człowiek urodzony ze słońcem w znaku Panny jest inteligentny i uwielbia zgłębiać różne dziedziny wiedzy. Przechowuje w głowie ogrom informacji na wszelakie tematy. W dodatku wszystkie dane ma starannie poukładane niczym w wielkim, wirtualnym katalogu. Umysł Panny pracuje trochę podobnie do encyklopedii, dzięki czemu może zaskakiwać otoczenie ogromną wiedzą.';
    } else if ((dMiesiaca >= 23 && nMiesiaca === 'Październik') || (dMiesiaca <= 21 && nMiesiaca === 'Listopad')) {
        answer.textContent = 'Człowiek urodzony pod znakiem Skorpiona odczuwa wielki lęk przed poniesieniem porażki w jakiejkolwiek dziedzinie. Z tego powodu przez większość życia jest bardzo skryty. Dzięki temu – jeśli coś się nie uda, kariera pójdzie nie po jego myśli albo przegra w dyskusji – będzie mógł szybko się przystosować bez okazywania, jak wielką poniósł porażkę.Najważniejsze cechy: zgłębia wiedzę i wszelkie tajemnice; szuka odpowiedzi. Drąży, póki nie ujawni całej prawdy.';
    } else if ((dMiesiaca >= 22 && nMiesiaca === 'Listopad') || (dMiesiaca <= 21 && nMiesiaca === 'Grudzień')) {
        answer.textContent = 'Strzelec wydaje się być prowadzony przez szczęście. Dobre rzeczy przytrafiają mu się cały czas. Najczęściej wynika to po prostu z optymistycznego patrzenia na świat i pozytywnego usposobienia. To cała tajemnica przyciągania szczęścia. Pomimo napotykanych trudności, Strzelec jest zawsze optymistą. Wierzy, że dobre rzeczy wydarzą się jutro, a przyszłość niesie pomyślność.Człowiek urodzony pod znakiem Strzelca ma żywą, wyrazistą osobowość – chce być wolny jak ptak. Przepełniony ciekawością świata, zawsze patrzy w przyszłość. Nie zamartwia się błędami przeszłości, wyciąga z nich wnioski i idzie dalej przed siebie.';
    } else if ((dMiesiaca >= 22 && nMiesiaca === 'Grudzień') || (dMiesiaca <= 19 && nMiesiaca === 'Styczeń')) {
        answer.textContent = 'Koziorożec ma bardzo aktywny umysł i zdolność głębokiej koncentracji. Stara się kontrolować wszystko i wszystkich w swoim otoczeniu. Postępuje bardzo ostrożnie, ale to tylko w celu wybadania sytuacji przed ruszeniem do boju. Nigdy nie będzie działać pośpiesznie.Koziorożec akceptuje zmiany, ale wprowadzane na tyle powoli, aby mógł się do nich przyzwyczaić i wdrożyć do swojego życia. Postrzega przy tym życie w czarno-białych barwach. Coś jest albo dobre, albo złe. Nie ma żadnych półśrodków ani odcieni szarości.';
    } else if ((dMiesiaca >= 20 && nMiesiaca === 'Styczeń') || (dMiesiaca <= 18 && nMiesiaca === 'Luty')) {
        answer2.textContent = 'Wodnik to znak wizjonerów, niekonwencjonalnej myśli i niezależności intelektualnej. Człowiek urodzony pod tym znakiem odbiega od reszty ludzkości i idzie własną drogą. Ciągle odkrywa coś nowego, tworząc nowe idee, i uparcie kroczy swoją drogą niezależnie od tego, co myślą inni.Wodnik jest pełen paradoksów. Pragnie rzeczy wzajemnie ze sobą sprzecznych. Przykładem może być jego podejście do związków międzyludzkich. Z jednej strony lubi spędzać czas w samotności, z drugiej jednak pragnie brylować w towarzystwie.';
    } else if ((dMiesiaca >= 19 && nMiesiaca === 'Luty') || (dMiesiaca <= 19 && nMiesiaca === 'Marzec')) {
        answer.textContent = 'Osoba urodzona pod znakiem Ryb bardzo dobrze rozumie ludzi, ponieważ posiada umiejętność zagłębiania się w ludzką psychikę i dostrzegania tego, co daną osobę napędza.Wielką wadą Ryb jest ich wrażliwość oraz ich niezdolność do odrzucenia innej osoby. Starają się traktować wszystkich tak, jak same chciałyby być traktowane. Odczuwają więc obawę przed powiedzeniem komuś, co naprawdę myślą. Nie chcą ranić czyichś uczuć. Chętnie pomogą w rozwiązywaniu cudzych problemów, ponieważ dzięki temu czują się dobrze.';
    }
})
