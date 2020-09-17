import { Luong } from './../model/luong';
import { LuongService } from './../Service/luong.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-luong',
  templateUrl: './luong.component.html',
  styleUrls: ['./luong.component.css']
})
export class LuongComponent implements OnInit {
  luong: Luong[];
   date: string ="2020-09";

  constructor(private service: LuongService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
this.onchaneDate();
  }
  onchaneDate(){
    this.getallluong();
  };
  getallluong(){
this.service.getAll(this.date).subscribe(data =>{
this.luong = data;
}, err => {
  this.toastr.error(err.error.message,"fail",{
    timeOut: 3000,  positionClass: 'toast-top-center',
  });

}
);
  }

}
