import { Image } from './../../../model/image';
import { ImageHotel } from './../../../model/ImageHotel';
import { KhenThuongKl } from './../../../model/khenthuong';
import { TamUng } from './../../../model/tamung';
import { HeSoLuong } from './../../../model/hesoluong';
import { LuongService } from './../../../Service/luong.service';
import { KyLuat } from './../../../model/kyluat';
import { PhongBan } from './../../../model/phongban';
import { NhanVien } from './../../../model/nhanvien';
import { ServicenhanvienService } from 'src/app/Service/servicenhanvien.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { PhuCap } from 'src/app/model/phucap';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
})
export class ProfilesComponent implements OnInit {
  nhanvien: NhanVien ;
  phongban: PhongBan ;
  kyLuat: KyLuat = new KyLuat();
  phuCap: PhuCap = new PhuCap();
  luong: HeSoLuong  = new HeSoLuong();
  tamUng: TamUng = new TamUng();
  khenthuong: KhenThuongKl  = new  KhenThuongKl();

  month: string  ;
  date: string;

  img : any;
  imageHotel:ImageHotel  = new ImageHotel();
  check: boolean = false;
data: Image;
  constructor(
    private service: ServicenhanvienService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private serviceluong: LuongService
  ) {}

  ngOnInit(): void {
    this.getone();
    // let momments = moment().format('yyyy-MM');
    // this.date = momments;

  }
  onUpdate():void {
    const id = this.route.snapshot.params.id;
    if(this.img !=null){
      this.nhanvien.img = this.img;
    }
    this.nhanvien.img = this.nhanvien.img
    this.nhanvien.phongbanid = this.nhanvien.phongBan.id;
    console.log(this.nhanvien);
    this.service.update(id,this.nhanvien).subscribe(
      data => {
        this.toastr.success('Cập nhật thành công', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/admin/profile/'+ this.nhanvien.id]);
       },
       err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/admin/profile/'+ this.nhanvien.id]);
       },
    )
  }
  onChange(file) {
    if (file && file) {
      var reader = new FileReader();

      reader.readAsDataURL(file); // read file as data url

      reader.onload = (file) => { // called once readAsDataURL is completed

       // this.hotel.img = file.target.result;
      }
    }
    this.check = true;
    this.service.upload(file)
      .subscribe(res => {
        console.log(this.data = res);

       // this.product.img = this.data.data.link;
       this.imageHotel.imagePath = this.data.data.link;
       this.img = this.data.data.link;
      });

  }



  kyluat(){
this.kyLuat.nhanvienid = this.route.snapshot.params.id;
this.kyLuat.date = this.kyLuat.ngayPhat;
console.log(this.kyLuat);
this.serviceluong.addkylua(this.kyLuat).subscribe(data =>{
  this.toastr.success('Thêm Kỷ Luật', 'thành công' , {
    positionClass: 'toast-top-center',
    timeOut: 3000,
   });

   this.router.navigate(['/admin/profile/'+ this.kyLuat.nhanvienid]);

})
  }
  addkhenthuong(){
    this.khenthuong.nhanvienid = this.route.snapshot.params.id;
    this.khenthuong.date = this.khenthuong.date;
    console.log(this.khenthuong);
    this.serviceluong.addkhenthuong(this.khenthuong).subscribe(data =>{
      this.toastr.success('Thêm khen thưởng', 'thành công' , {
        positionClass: 'toast-top-center',
        timeOut: 3000,
       });

       this.router.navigate(['/admin/profile/'+ this.khenthuong.nhanvienid]);

    })
      }
      addphucap(){
        this.phuCap.nhanvienid = this.route.snapshot.params.id;
        this.phuCap.date = this.phuCap.date;
        this.phuCap.ngayPhuCap =  this.phuCap.date;
        console.log(this.phuCap);
        this.serviceluong.addphucap(this.phuCap).subscribe(data =>{
          this.toastr.success('Thêm phụ cấp', 'thành công' , {
            positionClass: 'toast-top-center',
            timeOut: 3000,
           });

           this.router.navigate(['/admin/profile/'+ this.phuCap.nhanvienid]);

        })
          }
      addhsl(){
        this.luong.nhanvienid = this.route.snapshot.params.id;
        this.luong.date = this.luong.date;
        this.luong.NgayDieuChinhLuong = this.luong.date;
        console.log(this.luong);
        this.serviceluong.addhesoluong(this.luong).subscribe(data =>{
          this.toastr.success('Thêm Hệ số lương', 'thành công' , {
            positionClass: 'toast-top-center',
            timeOut: 3000,
           });
           this.router.navigate(['/admin/profile/'+ this.luong.nhanvienid]);

        })
          }
          addtamung(){
            this.tamUng.nhanvienid = this.route.snapshot.params.id;
            this.tamUng.date = this.tamUng.date;
            this.tamUng.ngayTamUng = this.tamUng.date;
            console.log(this.tamUng);
            this.serviceluong.addtamung(this.tamUng).subscribe(data =>{
              this.toastr.success('Thêm tạm ứng', 'thành công' , {
                positionClass: 'toast-top-center',
                timeOut: 3000,
               });
               this.router.navigate(['/admin/profile/'+ this.tamUng.nhanvienid]);

            })
              }

  getone() {
    const id = this.route.snapshot.params.id;
    this.service.getOneNhanVien(id).subscribe((data) => {
      this.nhanvien = data;
      // let phongban = JSON.parse();

    });
  }
}
