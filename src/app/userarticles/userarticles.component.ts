import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-userarticles',
  templateUrl: './userarticles.component.html',
  styleUrls: ['./userarticles.component.css']
})
export class UserarticlesComponent implements OnInit {
  postrecord=[];

    imagepath="../../assets/uploads/";

  constructor(private data : DataService , private ngxService: NgxUiLoaderService) { }

  ngOnInit() {
    this.funPostdetails();
  }

  funPostdetails(){
    const method = '/clientpost-detail';
    const that = this;

    this.ngxService.start();  
    this.data.funGetMethod(method)
    .then((res)=>{
      this.ngxService.stop();
      if(res['status'] === "OK"){
        that.postrecord = res['message'];
      }
      else{
        alert('failed to run');
      }
      console.log(that.postrecord);
    })
  }

}
