import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PhongBan } from 'src/app/model/phongban';
import { ServicephongbanService } from 'src/app/Service/servicephongban.service';


@Component({
  selector: 'app-quanliphongban',
  templateUrl: './quanliphongban.component.html',
  styleUrls: ['./quanliphongban.component.css']
})
export class QuanliphongbanComponent implements OnInit {
  phongbans : PhongBan[] ;

  constructor( private service: ServicephongbanService ) { }

  ngOnInit(): void {
  this.getphongphans();
  }
  getphongphans(){
 this.service.getphongban().subscribe(data =>{
  this.phongbans = data;
})
  }

}

