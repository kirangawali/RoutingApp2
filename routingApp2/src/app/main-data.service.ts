import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlipkartData } from './flipkart-data';
import { Subject } from "rxjs";
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  private posts : FlipkartData[] = [];
  private msg : string;

  private postsUpdated = new Subject<FlipkartData[]>();

  constructor(private http: HttpClient) { }
  configUrl = 'assets/config.json';

  getConfig() {
   
    return this.http.get(this.configUrl);
  }

  a : Config[] = [];

  getConfigPost() {
        console.log('-- Before HTTP call..');
        let d = new Date();
        let url = 'http://127.0.0.1:8085?v='+d.toLocaleTimeString();
        //let url = 'http://localhost:3000/bye?v='+d.toLocaleTimeString();
        console.log(' ---   = url : '+url);
       return  this.http.get(url);
  }

  
  getConfigPostData() {
        console.log('-- Before HTTP call..');
        let d = new Date();
        let url = 'http://127.0.0.1:8085?v='+d.toLocaleTimeString();
      //  let url = 'http://localhost:4000?v='+d.toLocaleTimeString();
        console.log(' ---   = url : '+url);
       return  this.http.get(url);
  }


  getPost() : any
  {

    console.log('-- Before HTTP call..');
let d = new Date();
let url = 'http://127.0.0.1:8085?v='+d.toLocaleTimeString();
    //let url = 'http://localhost:3000/hello?v='+d.toLocaleTimeString();
    console.log(' ---   = url : '+url);
    this.http.get<{msg : string}>(url).
    subscribe(response =>{
      this.msg = response.msg;
      console.log('1- After HTTP call..postData :: '+ response.msg);
        //   this.posts = postData.post;
     });

    console.log('2- After HTTP call..message = '+ this.msg);
 /*   console.log('After HTTP call..'+ this.posts.length);
    for(var i = 0 ; i < this.posts.length;i++)
    {
      console.log('*** '+ this.posts[i].name + "  **  "+ this.posts[i].pinCode);
    }
*/
    return this.posts;

  }
}
