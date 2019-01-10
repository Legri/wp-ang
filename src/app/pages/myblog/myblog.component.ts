import { Component, OnInit } from '@angular/core';
import { GetcontentserviceService} from '../../../app/services/getcontentservice.service';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-myblog',
  templateUrl: './myblog.component.html',
  styleUrls: ['./myblog.component.css']
})
export class MyblogComponent implements OnInit {
  bookdata:any;
  searchtext:string;
  message2:string;

  constructor(private serv : GetcontentserviceService, private mess:MessagesService) { }

  ngOnInit() {
    this.serv.getcontentbynews_book_all().subscribe((bookdata) => {bookdata;
      this.bookdata=bookdata;
      console.log(bookdata);
      });
      this.mess.get_message().subscribe(message => { this.message2 = message; 

      });
  }

  onClickSearch(searchtext){
    this.serv.getcontentbynews_book_search(this.searchtext).subscribe((bookdata) => {bookdata;
      this.bookdata=bookdata;
      if(this.bookdata.length == 0){
        this.mess.set_message("is login");
      }else{
        this.mess.set_message("found");
      }

      
      });
  }

}
