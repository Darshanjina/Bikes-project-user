import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  catrecords=[];

    imagepath="../../assets/uploads/";

  constructor(private data:DataService , private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.funCatdetails();
  }

  funCatdetails(){
    const method = "/clientcat-detail";
    const that = this;

    this.ngxService.start();
    this.data.funGetMethod(method)
    .then((res)=>{
      this.ngxService.stop();
      if(res['status'] === "OK"){
        that.catrecords = res['message'];
      }
      else{
        alert('failed to run')
      }
      console.log(that.catrecords);
    })
  }
  
}
