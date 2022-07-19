import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  // ATT
  pokemons: any[] = [];

  // CON
  constructor(
    private dataService: DataService
  ) { }

  // LC
  ngOnInit(): void {
    this.dataService.getPokemons().subscribe(
      (response: any) => {
        // console.log(response);
        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            })
        });
      }
    )
  };

  // FUN


} //<--END
