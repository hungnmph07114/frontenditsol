import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DiemDanh } from './../../model/diemdanh';
import { Component, OnInit } from '@angular/core';
import { NhanVien } from 'src/app/model/nhanvien';
import { ServicenhanvienService } from 'src/app/Service/servicenhanvien.service';
import * as moment from 'moment';

@Component({
  selector: 'app-cham-cong',
  templateUrl: './cham-cong.component.html',
  styleUrls: ['./cham-cong.component.css']
})
export class ChamCongComponent implements OnInit {
  name: string;
  nhanvien: NhanVien[];
  diemdanh: DiemDanh;
  masterSelected: boolean;
  checklist: any;
  checkedList: any[];
  unCheckedList: any[];
date: string; dilam: boolean = true; nhanvienid: number;

  constructor(

    private service: ServicenhanvienService,

    private router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    let momments = moment().format('DD/MM/YYYY');
    this.date = momments;
    this.masterSelected = false;
    this.getNhanVien();
  }
  timkiem(name){
this.service.timkiemnhanvien(name).subscribe(data =>{
  this.nhanvien = data;
});

  }

getNhanVien(){
  this.service.getAll().subscribe(data =>{
    this.nhanvien = data;

  })
}
checkUncheckAll() {
  for (var i = 0; i < this.nhanvien.length; i++) {
    this.nhanvien[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
}
isAllSelected() {
  this.masterSelected = this.nhanvien.every(function(item:any) {
      return item.isSelected == true;
    })
  this.getCheckedItemList();
}
getCheckedItemList(){
  this.checkedList = [{date:'17/09/2020',dilam:true,id:3}];
  this.unCheckedList= [{date:'17/09/2020',dilam:false,id:3}];
  this.checkedList.splice(0);
  this.unCheckedList.splice(0);
  for (var i = 0; i < this.nhanvien.length; i++) {
    if(this.nhanvien[i].isSelected)
   this.checkedList.push({date:this.date,dilam:true,id:this.nhanvien[i].id});
  }
}
async  chamCongAll (list){
  for (var i = 0; i < this.nhanvien.length;i++){
    if(this.nhanvien[i]){
      const diemdanh = new DiemDanh(this.date, this.dilam=false,this.nhanvienid = this.nhanvien[i].id);
     await this.chamCong(diemdanh);
    }
  }
 for (var i = 0; i < this.checkedList.length; i++){
   if(this.checkedList[i]){
     this.nhanvienid = this.checkedList[i].id;
     const diemdanh = new DiemDanh(this.date, this.dilam=true,this.nhanvienid = this.checkedList[i].id);
     console.log(diemdanh)
     await this.chamCong(diemdanh);
   }
 }
 this.toastr.success('Thêm mới thành công', 'OK', {
  timeOut: 3000, positionClass: 'toast-top-center'
});
this.router.navigate(['/admin/phongban']);
}
chamCong(diemdanh): void{

  this.service.chamCong(diemdanh).subscribe(
    data => {

      this.router.navigate(['/admin/phongban']);
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Fail', {
        timeOut: 3000,  positionClass: 'toast-top-center',
      });
      this.router.navigate(['/admin']);
    }
  );
}


}
