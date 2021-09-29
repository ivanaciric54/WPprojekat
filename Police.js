// import { Lek } from "./Lek.js";


export class Police {
    
    constructor() {
        this.container=null;
    }

    vratiPolicu(re,ko){
        let poz= re*10+ko;
        let pol=document.getElementById("poz");
        return pol;
    }

    crtajPolice(){
        const body= document.querySelector("body");
        const tabelaDiv=document.createElement("div");
        const tabelaPolica=document.createElement("table");
        tabelaPolica.className="tabelaPolica";
        tabelaDiv.className="tabelaDiv";
        this.container=tabelaDiv;
        body.appendChild(tabelaDiv);
        //tabelaDiv=tabelaPolica;
        tabelaDiv.appendChild(tabelaPolica);
        for (let i=1; i<=10;i++){
            const RedPolica=document.createElement("tr");
            tabelaPolica.appendChild(RedPolica);
            RedPolica.id=i;
            RedPolica.className="redoviPolica";
            this.crtajRedPolica(i,RedPolica);
        }
    }
    
    crtajRedPolica(i,RedPolica){
        for(let j=1;j<=8;j++){
            const celijaPolice=document.createElement("td");
            RedPolica.appendChild(celijaPolice);
            celijaPolice.id=i*10+j;
            celijaPolice.className="celije";
            const smanjiDugme=document.createElement("button");
            smanjiDugme.className="sDugme";
            smanjiDugme.id="sDugme"+(i*10+j);
            smanjiDugme.innerHTML="-";
            celijaPolice.appendChild(smanjiDugme);
            smanjiDugme.onclick=(el)=>{
                let uzmi=document.getElementById(i*10+j);//celija
                //console.log(uzmi);
                let uzmi1=uzmi.getElementsByClassName("Lek");//lista
                let p=uzmi.getElementsByClassName("popunjenost");
                let pop=p[0];
                //console.log(pop);
                //console.log(p);
                //console.log(uzmi1);
                if (uzmi1.length!=0)
                    pop.removeChild(uzmi1[0]);
                
                

            }
            }
    }
    
}