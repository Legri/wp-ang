import { Component, OnInit } from '@angular/core';
import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  title: string;
  container : any;
  slider_img1:any;
  data:any;
  postdata:any;
  bookdata:any;
  imgprog:string;

  constructor(private serv : GetcontentserviceService) { }

  ngOnInit() {
    this.serv.getcontentbypost_all().subscribe((postdata) => {postdata;
      this.postdata=postdata;
       //console.log(postdata);
        });
  }

}
