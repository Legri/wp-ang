import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})




export class ContactsComponent implements OnInit {
  data:any;
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onClickSeandh(username,usermail,usertext){
    this.http.post('https://kusmirchuk.top/assets/mail.php',{username: username, usermail:usermail, usertext:usertext },this.httpOpt) .subscribe(
      (data) => {this.data=data;},
      error => console.log(error)
  );;
    console.log(this.data);

  }

}
