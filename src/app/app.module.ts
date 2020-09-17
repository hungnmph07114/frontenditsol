import { LuongService } from './Service/luong.service';
import { ServicenhanvienService } from './Service/servicenhanvien.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Navigation/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyAdminComponent } from './Navigation/Effects/body-admin/body-admin.component';
import { BodyQuanliComponent } from './Navigation/Effects/body-quanli/body-quanli.component';
import { BodyNhanvienComponent } from './Navigation/Effects/body-nhanvien/body-nhanvien.component';
import { SlidebarAdminComponent } from './Navigation/Effects/slidebar-admin/slidebar-admin.component';
import { SlidebarNhanvienComponent } from './Navigation/Effects/slidebar-nhanvien/slidebar-nhanvien.component';
import { SlidebarQuanliComponent } from './Navigation/Effects/slidebar-quanli/slidebar-quanli.component';
import { HomeComponent } from './Navigation/home/home.component';
import { QuanliphongbanComponent } from './Admin/quanliphongban/quanliphongban.component';
import { QuanlitaikhoanComponent } from './Admin/quanlitaikhoan/quanlitaikhoan.component';
import { SlideImageComponent } from './Navigation/Effects/slide-image/slide-image.component';
import { ThemtaikhoanComponent } from './Admin/themtaikhoan/themtaikhoan.component';
import { DetailTaikhoanComponent } from './Admin/detail-taikhoan/detail-taikhoan.component';
import { ThemphongbanComponent } from './Admin/themphongban/themphongban.component';
import { DetailPhongbanComponent } from './Admin/detail-phongban/detail-phongban.component';
import { NavigatorComponent } from './Navigation/navigator/navigator.component';
import { ProfilesComponent } from './Navigation/Effects/profiles/profiles.component';
import { QuanlichucvuComponent } from './Admin/quanlichucvu/quanlichucvu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ServicephongbanService } from './Service/servicephongban.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { EditComponent } from './Admin/quanliphongban/edit/edit/edit.component';
import { ThemnhanvienComponent } from './nhanvien/themnhanvien/themnhanvien.component';
import { ChamCongComponent } from './Admin/cham-cong/cham-cong.component';
import { LuongComponent } from './luong/luong.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BodyAdminComponent,
    BodyQuanliComponent,
    BodyNhanvienComponent,
    SlidebarAdminComponent,
    SlidebarNhanvienComponent,
    SlidebarQuanliComponent,
    HomeComponent,
    QuanliphongbanComponent,
    QuanlitaikhoanComponent,
    SlideImageComponent,
    ThemtaikhoanComponent,
    DetailTaikhoanComponent,
    ThemphongbanComponent,
    DetailPhongbanComponent,
    NavigatorComponent,
    ProfilesComponent,
    QuanlichucvuComponent,
    EditComponent,
    ThemnhanvienComponent,
    ChamCongComponent,
    LuongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [ServicephongbanService, ServicenhanvienService, LuongService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
