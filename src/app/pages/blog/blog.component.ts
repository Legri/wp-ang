import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  onepostid:any;
  postdata:any;
  content:string;
  title:string;
  constructor(private activatedRoute: ActivatedRoute,private serv : GetcontentserviceService,private router: Router) { 
   
  this.activatedRoute.params.subscribe(params => {
    this.onepostid=params['id']; //log the value of id
    console.log(this.onepostid);
  });

  this.serv.getcontentoneblog(this.onepostid).subscribe((postdata) => {postdata;
  this.postdata=postdata;
  this.content=postdata['content']['rendered'];
  this.title=postdata['title']['rendered'];
    
  //console.log(postdata['title']['rendered']);
      },
      err => {
        console.log('err');
        this.router.navigate(['/404'])
        //test 2
      },
      );
  }

  ngOnInit() {
  }

}
