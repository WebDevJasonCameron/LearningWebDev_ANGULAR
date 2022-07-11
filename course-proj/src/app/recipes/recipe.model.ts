export class Recipe {

  // ATT
  public name: string;
  public description: string;
  public imagePath: string;

  // CON
  constructor(name: string, desc: string, imagePath: string){
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
  }



  
}