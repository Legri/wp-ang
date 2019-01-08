import { Component, OnInit } from '@angular/core';
import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string;
  container : any;
  slider_img1:any;
  data:any;
  postdata:any
  imgprog:string;

  constructor(private serv : GetcontentserviceService) { }

  ngOnInit() {

    // this.spinnerService.show();
  this.serv.getcontent(84).subscribe((data) => {data;
  this.title = data['title']['rendered'];
  this.container=data['content']['rendered'];
  this.data=data;
  this.slider_img1=this.data['acf']['slider_img1'];
  });
   
 
  this.serv.getcontentbypost().subscribe((postdata) => {postdata;
  this.postdata=postdata;
  //this.imgprog=postdata[2]['acf']['imgprog'];

  console.log(postdata);
    });
  }

}
