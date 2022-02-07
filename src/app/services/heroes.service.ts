import { Injectable } from '@angular/core';

//import { Http, Headers } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Heroe } from '../interfaces/heroe.interfaces';

import 'rxjs/Rx';



// {
//   providedIn: 'root'
// }
@Injectable()
export class HeroesService {

  heroesURL: string = "https://heroesapp-3d564-default-rtdb.firebaseio.com/heroes.json"

  constructor( private http:HttpClient) { }

  nuevoHeroe ( heroe:Heroe ){

    let body = JSON.stringify( heroe );
    let headers = new HttpHeaders ({
      'Content-Type':'application/json'
    });

    return this.http.post( this.heroesURL, body, { headers } )
        .map( res =>{ 
        console.log(res.json());
        return res.json();
  })
}
}
