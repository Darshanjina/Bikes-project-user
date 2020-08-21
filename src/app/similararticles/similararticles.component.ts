import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-similararticles',
  templateUrl: './similararticles.component.html',
  styleUrls: ['./similararticles.component.css']
})
export class SimilararticlesComponent implements OnInit {

  brand;
  imagepath="../../assets/uploads/";
  postrecord=[];
  constructor(private data: DataService , private rt:ActivatedRoute, private ngxService: NgxUiLoaderService) {
    this.rt.params.subscribe((res)=>{
      this.brand=res.bikename;
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
      cat_name:this.brand,
    }
    this.data.funPostMethod(method,{query:formdata})
    .then((res)=>{
      this.ngxService.stop();
      // console.log(res);
      this.postrecord=res['message'];
    })
  }
  

}
