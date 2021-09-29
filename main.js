import { Unos } from "./Unos.js";
import { Police } from "./Police.js";
import { Lek } from "./Lek.js";
import { Prikaz } from "../Prikaz.js";

const body=document.querySelector("body");
body.className="body";

let unos= new Unos();
unos.crtajUnos();

let police=new Police();
police.crtajPolice();

let prikaz=new Prikaz();
prikaz.crtajPrikaz();
//prikaz.izracunaj();



// let p=document.createElement("label");
// p.innerHTML="nnsn";
// body.appendChild(p);



