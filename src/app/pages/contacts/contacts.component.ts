import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
  
})




export class ContactsComponent implements OnInit {
  data:any;
  username:any;
  usermail:any;
  usertext:any;
  sendok:boolean;
  httpOpt = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      
    })
  };
 

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onClickSeandh(username,usermail,usertext){
    if(username==null){username=''}
    if(usermail==null){usermail=''}
    if(usertext==null){usertext=''}
    if((username.length>0)&&(usermail.length>0)&&(usertext.length>0)){
      this.http.post('https://kusmirchuk.top/assets/mail.php',{username: username, usermail:usermail, usertext:usertext },this.httpOpt) .subscribe(
        (data) => {this.data=data;
        console.log(this.data);
        if (this.data==null){
          this.sendok=true;
        }else{
          this.sendok=false;
        }
        },
        error => console.log(error)
        );
    } else{
      this.sendok=false;
    }

  }

}
