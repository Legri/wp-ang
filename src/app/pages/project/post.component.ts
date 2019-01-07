import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';

import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';

@Component({
  selector: 'app-project',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postdata:any;
onepostid:any;
postdataimg:any;
postdatatitle:string;
postdatacontent:string;

 constructor(private activatedRoute: ActivatedRoute,private serv : GetcontentserviceService,private router: Router) {
  this.postdataimg='assets/img/pre.gif';
  this.activatedRoute.params.subscribe(params => {
    this.onepostid=params['id']; //log the value of id
  });

  this.serv.getcontentonepost(this.onepostid).subscribe((postdata) => {postdata;
  this.postdata=postdata;
  this.postdataimg=this.postdata['acf']['imgprog'];
  this.postdatatitle =postdata['title']['rendered'];
  this.postdatacontent =postdata['content']['rendered'];
    
  //console.log(postdata['title']['rendered']);
      },
      err => {
        console.log('err');
        this.router.navigate(['/page404'])
      },
      () => {
        // Do stuff after completion
        console.log(' Do stuff after completion');
      },
      );
 }

 ngOnInit() {}

 
  
}


