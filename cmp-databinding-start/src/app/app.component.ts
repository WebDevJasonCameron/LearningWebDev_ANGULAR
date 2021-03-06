import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a Test'}];

  // ATT

  // CON

  // BAS

  // FUN
  onServerAdded(serverData: 
      {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: 
      {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onChangeFirstComponent(){
    this.serverElements[0].name = 'Changed'
  }

  onDestroyFirstComponent(){
    this.serverElements.splice(0, 1)
  }


}  //<--END
