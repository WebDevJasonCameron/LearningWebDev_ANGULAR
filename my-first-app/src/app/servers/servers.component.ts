import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'TestServer';
  userName = '';
  emptyUserName = true;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 
    2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUserNameCheck(event: any){
    if(event.target.value != '') this.emptyUserName = false;
  }

  onResetUserName(){
    this.userName = '';
    this.emptyUserName = true;
  }

}
