import { Lek } from "./Lek.js";
export class Unos {
    constructor(){
        this.container=null;
    }

crtajUnos(){
const body= document.querySelector("body");
//const linebreak = document.createElement("br");
//.appendChild(linebreak);
//const linebreak = '\n';

const Unos= document.createElement("div");
Unos.className="Unos";
this.container=Unos;
body.appendChild(Unos);

const ImeLab = document.createElement("label");
ImeLab.innerHTML="Ime:";
Unos.appendChild(ImeLab);

const Ime = document.createElement("input");
Ime.type="text";
Ime.id="ime";
Unos.appendChild(Ime);

const KolicinaLab = document.createElement("label");
KolicinaLab.innerHTML="Kolicina:";
Unos.appendChild(KolicinaLab);

const Kolicina = document.createElement("input");
Kolicina.type="number";
Kolicina.id="kolicina";
Unos.appendChild(Kolicina);

// const DebljinaLab = document.createElement("label");
// DebljinaLab.innerHTML="Debljina (u cm):";
// Unos.appendChild(DebljinaLab);

// const Debljina = document.createElement("input");
// Debljina.type="number";
// Unos.appendChild(Debljina);



 const TerapijskaGrupa = document.createElement("div");
 TerapijskaGrupa.className= "TerapijskaGrupa"
 Unos.appendChild(TerapijskaGrupa);

    const TerapijskaGrupaLab = document.createElement("label");
    TerapijskaGrupaLab.className="TerapijskaGrupaLab"
    TerapijskaGrupaLab.innerHTML="Terapijska grupa:";
    TerapijskaGrupa.appendChild(TerapijskaGrupaLab);

    const bolovidiv=document.createElement("div");
    TerapijskaGrupa.appendChild(bolovidiv);

    const pritisakdiv=document.createElement("div");
    TerapijskaGrupa.appendChild(pritisakdiv);

    const varenjediv=document.createElement("div");
    TerapijskaGrupa.appendChild(varenjediv);

    const antibiotikdiv=document.createElement("div");
    TerapijskaGrupa.appendChild(antibiotikdiv);

    const smirenjediv=document.createElement("div");
    TerapijskaGrupa.appendChild(smirenjediv);

    const vitaminidiv=document.createElement("div");
    TerapijskaGrupa.appendChild(vitaminidiv);

    const bolovi=document.createElement("input");
    bolovi.setAttribute("type", "radio");
    bolovi.name="izbor";
    bolovi.value="bolovi";
    bolovidiv.appendChild(bolovi);

    const boloviLab= document.createElement("label");
    boloviLab.innerHTML="bolovi";
    boloviLab.style.color="yellow";
    bolovidiv.appendChild(boloviLab);

    const pritisak =document.createElement("input");
    pritisak.type="radio";
    pritisak.name="izbor";
    pritisak.value="pritisak";
    pritisakdiv.appendChild(pritisak);

    const pritisakLab= document.createElement("label");
    pritisakLab.innerHTML="pritisak";
    pritisakLab.style.color="pink";
    pritisakdiv.appendChild(pritisakLab);

    const varenje=document.createElement("input");
    varenje.type="radio";
    varenje.name="izbor";
    varenje.innerHTML="varenje";
    varenje.value="varenje";
    varenjediv.appendChild(varenje);

    const varenjeLab= document.createElement("label");
    varenjeLab.innerHTML="varenje";
    varenjeLab.style.color="olivedrab";
    varenjediv.appendChild(varenjeLab);

    const antibiotik=document.createElement("input");
    antibiotik.type="radio";
    antibiotik.name="izbor";
    antibiotik.innerHTML="antibiotik";
    antibiotik.value="antibiotik";
    antibiotikdiv.appendChild(antibiotik);

    const antibiotikLab= document.createElement("label");
    antibiotikLab.innerHTML="antibiotik";
    antibiotikLab.style.color="plum";
    antibiotikdiv.appendChild(antibiotikLab);

    const smirenje=document.createElement("input");
    smirenje.type="radio";
    smirenje.name="izbor";
    smirenje.innerHTML="smirenje"
    smirenje.value="smirenje";
    smirenjediv.appendChild(smirenje);

    const smirenjeLab= document.createElement("label");
    smirenjeLab.innerHTML="smirenje";
    smirenjeLab.style.color="lightskyblue";
    smirenjediv.appendChild(smirenjeLab);

    const vitamini=document.createElement("input");
    vitamini.type="radio";
    vitamini.name="izbor";
    vitamini.innerHTML="vitamini"
    vitamini.value="vitamini";
    vitaminidiv.appendChild(vitamini);

    const vitaminiLab= document.createElement("label");
    vitaminiLab.innerHTML="vitamini";
    vitaminiLab.style.color="tomato";
    vitaminidiv.appendChild(vitaminiLab);

const PolicaLab=document.createElement("label");
PolicaLab.innerHTML="Polica (1-10):";
Unos.appendChild(PolicaLab);

const RedPolice=document.createElement("select");
RedPolice.id="selectRed";
Unos.appendChild(RedPolice);
const option = document.createElement("option");
    option.value= 0;
    option.text = "Izaberi red police";
    RedPolice.appendChild(option);
for (let i = 1; i < 11; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    RedPolice.appendChild(option);
}

const KolonaPoliceLab=document.createElement("label");
KolonaPoliceLab.innerHTML="Polica (1-8):";
Unos.appendChild(KolonaPoliceLab);

const KolonaPolice=document.createElement("select");
KolonaPolice.id="selectKolona";
Unos.appendChild(KolonaPolice);
 const optionK = document.createElement("option");
    optionK.value= 0;
    optionK.text = "Izaberi kolonu police";
    KolonaPolice.appendChild(optionK);
for (let i = 1; i < 9; i++) {
    const optionK = document.createElement("option");
    optionK.value = i;
    optionK.text = i;
    KolonaPolice.appendChild(optionK);
}

// const dodaj=document.createElement("button");
// dodaj.innerHTML="Dodaj lekove";
// dodaj.className="dugme";
// //let handler=true;
// Unos.appendChild(dodaj);

// dodaj.onclick=(ev)=>{
    
//     let imeU=document.querySelector('input[type="text"]').value;
//     let kolicinaU=parseInt(document.querySelector('input[type="number"]').value);
//     let svrhaU=document.querySelector('input[name="izbor"]:checked').value;

//     let policeRed=document.getElementById("selectRed").value;
//     let policeKolona=document.getElementById("selectKolona").value;
//     let policaID=policeRed+policeKolona;
//     let pozicija= document.getElementById(policaID);
    
//     let lek=new Lek();
//     lek.dodajLek(imeU,kolicinaU,svrhaU);
//     //if (handler==true){
//      lek.crtajZalihuLekova(pozicija);
//      console.log(lek);
//      //handler=false;
//     //}
//     //if (handler==false){

//         // let kolicinaU1=parseInt(document.querySelector('input[type="number"]').value);
//         // lek.azurirajZalihu(kolicinaU1);
//         // console.log(lek);
//     //}
// }

const brisi=document.createElement("button");
brisi.innerHTML="Dodaj lekove";
brisi.className="dugme";
Unos.appendChild(brisi);
brisi.onclick=(ev)=>{
    let policeRed=document.getElementById("selectRed").value;
    let policeKolona=document.getElementById("selectKolona").value;
    let policaID=policeRed+policeKolona;
    let pozicija= document.getElementById(policaID);

    let lista=pozicija.getElementsByClassName("popunjenost");
    
    console.log(lista);
    while(lista.length > 0){
        pozicija.removeChild(lista[0]);
    }
    
    let imeU=document.querySelector('input[type="text"]').value;
    let kolicinaU=parseInt(document.querySelector('input[type="number"]').value);
    let svrhaU=document.querySelector('input[name="izbor"]:checked').value;

    let lek=new Lek();
    lek.dodajLek(imeU,kolicinaU,svrhaU);
    //if (handler==true){
     lek.crtajZalihuLekova(pozicija,svrhaU);
     
}




}

}