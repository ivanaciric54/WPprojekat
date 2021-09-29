export class Lek {
    constructor ()
    {
        let Ime= null;
        let Kolicina= null;
        this.container=null;
    }

    dodajLek(ime, kolicina,svrha ){

        this.Ime=ime;
        if (kolicina<=14)
            this.Kolicina=kolicina;
            else
            throw new Error ("Ne moze stati!");
        this.svrha=svrha;
      
    }

    postojiLek(){
        if (!this.vratiIme())
            return false;
        else
            return true;
    }

    brisiZalihu(host){
        let node = this.popunjenost;
          
                host.removeChild(node);

    }

    azurirajZalihu(kol){
        this.Kolicina=parseInt(this.Kolicina)+kol;

    }

    vratiIme(){
        return this.Ime;
    }

    smanjiZalihu(){
        this.Kolicina= this.Kolicina--;
    }

    vratiKolicinu() {
        return this.Kolicina;
    }

    // vratiDebljinu() {
    //     return this.Debljina;
    // }
    
     crtajLek(host,sv) {
        //  if (!host)
        //  throw new Error ("ne postoji!");

        let lekPrikaz=document.createElement("td");
        lekPrikaz.className="Lek";
        lekPrikaz.id=sv;
        host.appendChild(lekPrikaz);

    }

    crtajZalihuLekova(host,sv) {
        //this.Kolicina=6;
        //console.log(this.Kolicina);
        // let zaliha = new Array(this.Kolicina);
        let popunjenost= document.createElement("td");
        
        this.container=popunjenost;
        host.appendChild(popunjenost);
        popunjenost.className="popunjenost";
        // zaliha.forEach(el=>{
        //     el.crtajLek(popunjenost);
        // })
        for(let i=0;i<this.Kolicina;i++){
            this.crtajLek(popunjenost,sv);
        }
    }



    
}