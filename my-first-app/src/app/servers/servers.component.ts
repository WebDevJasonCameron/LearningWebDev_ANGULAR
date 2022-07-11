import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {

  // ATT
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = [
    'testServer',
    'testServer2'
  ];

  // CON
  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 
    2000);
  }

  // BASE
  ngOnInit(): void {
  }


  // FUN
  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }



}
