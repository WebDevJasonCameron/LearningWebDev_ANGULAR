import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // ATT

  // CON
  constructor(
    private http: HttpClient 
  ) { }

  // LC


  // FUN
  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=10"`)
  }
  
  getMoreData(name: string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }

} //<--END
