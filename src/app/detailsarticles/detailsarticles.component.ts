import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-detailsarticles',
  templateUrl: './detailsarticles.component.html',
  styleUrls: ['./detailsarticles.component.css']
})
export class DetailsarticlesComponent implements OnInit {

  bikename;
  imagepath="../../assets/uploads/";
  postrecord=[];
  constructor(private data: DataService , private rt:ActivatedRoute, private ngxService: NgxUiLoaderService) {
    this.rt.params.subscribe((res)=>{
      this.bikename=res.bikename;
    })
  }

  ngOnInit() {
    this.funsort();
  }

  funsort(){
    const method = "/sort";
    const that = this;

    this.ngxService.start();
    const formdata = {
      title:this.bikename,
    }
    this.data.funPostMethod(method,{query:formdata})
    .then((res)=>{
      this.ngxService.stop();
      // console.log(res);
      this.postrecord=res['message'];
    })
  }
  
  


}
