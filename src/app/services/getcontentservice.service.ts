import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response, Http } from "@angular/http"
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetcontentserviceService {

  constructor(private http: HttpClient) { }

  getcontent(id){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/pages/'+id);
  }
  getcontentonepost(id){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/posts/'+id);
  }

  getcontentbypost(){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/posts?per_page=3');
  }

  getcontentbynews_book(){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/news_book?per_page=3');
  }

  getcontentoneblog(id){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/news_book/'+id);
  }

  getcontentbynews_book_all(){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/news_book/');
  }

  getcontentbynews_book_search(text){
     return this.http.get('https://restapi.kusmirchuk.top/wp-json/wp/v2/news_book?search='+text);
  }


}
