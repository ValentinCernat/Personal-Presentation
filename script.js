// Change background color

let colors = ['yellow', 'red', 'green', 'orange', 'white'];

let randombutton = document.getElementById('RandomButton'); 

let homebutton = document.getElementById('HomeButton'); 

randombutton.addEventListener('click', function(){
    //randomizer

    var randomColor = colors[Math.floor(Math.random() * colors.length)]

    //get container

    let container = document.getElementById('Right')

    container.style.background = randomColor;

})

homebutton.addEventListener('click', function(){
  
    let x = ['white'];

    let container = document.getElementById('Right')

    container.style.background = x

})



function AfisareRo(){

  document.getElementById('NameMe').innerHTML = 'Inginer Mecanic';
  document.getElementById('Nationality').innerHTML = 'Nationalitate: Roman';
  document.getElementById('SexM').innerHTML = 'Barbat';
  document.getElementById('DateBirth').innerHTML = 'Data nasterii: 01/13/1992';
  document.getElementById('RoBu').innerHTML = 'Bucuresti, Romania';
  document.getElementById('Education').innerHTML = 'Educatie';
  document.getElementById('MasterDegree').innerHTML = 'Master Inginer Mecanic';
  document.getElementById('UpbM').innerHTML = 'Universitatea Politehnica din Bucuresti';
  document.getElementById('BachelorDegree').innerHTML = 'Licenta Inginer Mecanic';
  document.getElementById('UpbL').innerHTML = 'Universitatea Politehnica din Bucuresti';
  document.getElementById('Language').innerHTML = 'Abilități lingvistice';
  document.getElementById('English').innerHTML = 'Engleza';
  document.getElementById('Romanian').innerHTML = 'Romana';
  document.getElementById('DigitalSkills').innerHTML = 'ABILITĂȚI DIGITALE';
  document.getElementById('ItCourse').innerHTML = 'IT curs';
  document.getElementById('CourseText').innerHTML = 'Voi prezenta câteva cunoștințe dobândite în urma cursurilor legate de domeniul IT astfel: JavaScript, CSS, HTML. Puteți găsi proiectele mele pe GitHub:';
  document.getElementById('DrivingL').innerHTML = 'Permis de conducere';
  document.getElementById('DrivingB').innerHTML = 'Permis de conducere: B';


  document.getElementById('Demo').innerHTML = 'Despre mine';
  document.getElementById('Description').innerHTML = 'Sunt foarte organizat cu timp si munca, abilitati bune de a lucra sub presiune pentru a respecta termenele limita, muncitor si bun comunicator. Ma pot adapta usor pentru ca sunt o persoana sociala si invat repede.';
  document.getElementById('Work').innerHTML = 'Experienta in munca';
  document.getElementById('Present').innerHTML = '2017 - Prezent';
  document.getElementById('CityTitu').innerHTML = 'Oras: Titu';
  document.getElementById('CountryRo').innerHTML = 'Tara: Romania';
  document.getElementById('Function').innerHTML = 'Lider inginerie T&C';
  document.getElementById('Job').innerHTML = 'Responsabilitate inginer lider T&C:';
  document.getElementById('Job1').innerHTML = '- Instruirea echipei privind neconformitățile datorate furnizorilor, cu reclamații, alerte și derogări;';
  document.getElementById('Job2').innerHTML = '- Instruirea echipei pentru audituri de calitate cu furnizorii;';
  document.getElementById('Job3').innerHTML = '- Monitorizarea procesului in linia de asamblare;';
  document.getElementById('Job4').innerHTML = '- Pregatirea si organizarea echipei de audit la furnizor;';
  document.getElementById('Job5').innerHTML = '- Intocmirea indicatorilor de calitate.';
  document.getElementById('Job6').innerHTML = 'Călătoria externă de afaceri:';
  document.getElementById('Job7').innerHTML = '22 .05.2021 - 27.07.2021 Călătorie de afaceri în Rusia, Togliatti - Avtovaz. Pregatirea echipei de calitate din Rusia';
  document.getElementById('Job8').innerHTML = '- Antrenament de măsurare 1D. Pregătirea și completarea fișierului 1D, pregătirea și distribuirea indicatorilor 1D.';
  document.getElementById('Job9').innerHTML = '- Instruirea echipei de reluare. Pregătirea și completarea fișierului de reluare. Urmărind stadiul reprelucrărilor, pregătirea și';
  document.getElementById('Job10').innerHTML = 'împărtășiți indicatorii de reluare';
  document.getElementById('Job11').innerHTML = '05 .09.2021 - 17 .12 .2021 Călătorie de afaceri în Franța, Paris - TCR.';
  document.getElementById('Job12').innerHTML = '- Suport pentru echipa Incoming Quality';
  document.getElementById('Job13').innerHTML = '- Training POE Geometry - validarea dispozitivelor de verificare.';
  document.getElementById('CityBu').innerHTML = 'Oras: Bucuresti';
  document.getElementById('ConRo').innerHTML = 'Tara: Romania';
  document.getElementById('JobWtb').innerHTML = 'Inspector de calitate';
  document.getElementById('JobWtb1').innerHTML = 'Walter Tosto este un producător lider mondial de echipamente critice cu plumb lung pentru petrol și gaze,';
  document.getElementById('JobWtb2').innerHTML = 'Piețe petrochimice, energie și energie';
  document.getElementById('JobWtb3').innerHTML = 'Responsabilitatea inspectorului de calitate:';
  document.getElementById('JobWtb4').innerHTML = '- Intocmirea si urmarirea planului de inspectie tehnica.';
  document.getElementById('JobWtb5').innerHTML = '- Pregatirea procedurilor de incercari nedistructive: VT, LP, MT, UT.';
  document.getElementById('JobWtb6').innerHTML = '- Intocmirea cartii de calitate.';
  document.getElementById('JobWtb7').innerHTML = '- Întâlnire periodică cu echipa de proiect pentru a prezenta stadiul proiectului și luarea în considerare a noilor sarcini.';
  document.getElementById('JobWtb8').innerHTML = '- Organizarea intalnirii periodice cu inspectorul furnizorului pentru validarea importantei sudurii si primirea finala';
  document.getElementById('JobWtb9').innerHTML = 'aprobare pentru livrare.';
  document.getElementById('JobWtb10').innerHTML = '- Verificarea datei echipamentului de măsurare și trimiterea pentru calibrare.';
  document.getElementById('ProfSkills').innerHTML = 'Abilități profesionale';
  document.getElementById('Interest').innerHTML = 'Activitati';
  document.getElementById('Gaming').innerHTML = 'Jocurile';
  document.getElementById('Music').innerHTML = 'Muzica';
  document.getElementById('Cooking').innerHTML = 'Gatitul';
  document.getElementById('Driving').innerHTML = 'Condusul';

}

function AfisareEn(){

    document.getElementById('NameMe').innerHTML = 'Mechanical Engineer';
    document.getElementById('Nationality').innerHTML = 'Nationality: Romanian';
    document.getElementById('SexM').innerHTML = 'Male';
    document.getElementById('DateBirth').innerHTML = 'Date of birth: 01/13/1992';
    document.getElementById('RoBu').innerHTML = 'Bucharest, Romania';
    document.getElementById('Education').innerHTML = 'Education';
    document.getElementById('MasterDegree').innerHTML = 'Master Degree Mechanical Engineer';
    document.getElementById('UpbM').innerHTML = 'Polytechnic University of Bucharest';
    document.getElementById('BachelorDegree').innerHTML = 'Bachelor Degree Mechanical Engineer';
    document.getElementById('UpbL').innerHTML = 'Polytechnic University of Bucharest';
    document.getElementById('Language').innerHTML = 'Languages skills';
    document.getElementById('English').innerHTML = 'English';
    document.getElementById('Romanian').innerHTML = 'Romanian';
    document.getElementById('DigitalSkills').innerHTML = 'ABILITĂȚI DIGITALE';
    document.getElementById('ItCourse').innerHTML = 'IT courses';
    document.getElementById('CourseText').innerHTML = 'I will present some knowledge acquired from courses related to IT area as follows: JavaScript,CSS,HTML. You can find my projects on GitHub: ';
    document.getElementById('DrivingL').innerHTML = 'Driving Licence';
    document.getElementById('DrivingB').innerHTML = 'Driving Licence: B';

    document.getElementById('Demo').innerHTML = 'About me';
    document.getElementById('Description').innerHTML = 'I am very organized with time and work, good skills at working under pressure to meet deadlines, hardworking and good communicator. I can adapt easily because I am a social person and I learn quickly.';
    document.getElementById('Work').innerHTML = 'Work experiance';
    document.getElementById('Present').innerHTML = '2017 - Present';
    document.getElementById('CityTitu').innerHTML = 'City: Titu';
    document.getElementById('CountryRo').innerHTML = 'Country: Romania';
    document.getElementById('Function').innerHTML = 'Leader engineer T&C';
    document.getElementById('Job').innerHTML = 'Leader engineer T&C responsibility:';
    document.getElementById('Job1').innerHTML = '- Training the team on non-compliances due to suppliers, with complaints, alerts and derogations;';
    document.getElementById('Job2').innerHTML = '- Training the team for quality audits with suppliers;';
    document.getElementById('Job3').innerHTML = '- Monitoring the process in the assembly line;';
    document.getElementById('Job4').innerHTML = '- Preparing and organizing the audit team at the supplier;';
    document.getElementById('Job5').innerHTML = '- Preparation of quality indicators.';
    document.getElementById('Job6').innerHTML = 'External business trip:';
    document.getElementById('Job7').innerHTML = '22 .05.2021 - 27.07.2021 Business trip to Rusia, Togliatti - Avtovaz. Training the Quality team from Russia';
    document.getElementById('Job8').innerHTML = '- 1D measuring training. Preparing and fill the 1D file, preparing and share the 1D indicators.';
    document.getElementById('Job9').innerHTML = '- Training the rework team. Preparing and fill the rework file. Following the status of the reworks, preparing and';
    document.getElementById('Job10').innerHTML = 'share the reworks indicators';
    document.getElementById('Job11').innerHTML = '05 .09.2021 - 17 .12 .2021 Business trip to France, Paris - TCR.';
    document.getElementById('Job12').innerHTML = '- Support for the Incoming Quality team';
    document.getElementById('Job13').innerHTML = '- POE Geometry training - validation of the checking fixtures.';
    document.getElementById('CityBu').innerHTML = 'City: Bucharest';
    document.getElementById('ConRo').innerHTML = 'Country: Romania';
    document.getElementById('JobWtb').innerHTML = 'Quality inspector';
    document.getElementById('JobWtb1').innerHTML = 'Walter Tosto is a worldwide leading manufacturer of critical, long lead equipment for the Oil & Gas,';
    document.getElementById('JobWtb2').innerHTML = 'Petrochemical, Power & Energy markets';
    document.getElementById('JobWtb3').innerHTML = 'Quality inspector responsibility :';
    document.getElementById('JobWtb4').innerHTML = '- Preparing and follow-up of the technical inspection plan.';
    document.getElementById('JobWtb5').innerHTML = '- Preparing the procedures for Non-destructive testing: VT, LP, MT, UT.';
    document.getElementById('JobWtb6').innerHTML = '- Preparing the quality book.';
    document.getElementById('JobWtb7').innerHTML = '- Periodic meeting with project team to present the status of the project and taking in account of the new tasks.';
    document.getElementById('JobWtb8').innerHTML = '- Organise periodic meeting with supplier inspector for validate the importance welding and to receive the final';
    document.getElementById('JobWtb9').innerHTML = 'approvement for delivery.';
    document.getElementById('JobWtb10').innerHTML = '- Checking the date of the measurement equipment and send for calibration.';
    document.getElementById('ProfSkills').innerHTML = 'Professional skills';
    document.getElementById('Interest').innerHTML = 'Interest';
    document.getElementById('Gaming').innerHTML = 'Gaming';
    document.getElementById('Music').innerHTML = 'Music';
    document.getElementById('Cooking').innerHTML = 'Cooking';
    document.getElementById('Driving').innerHTML = 'Driving';
  
  }
