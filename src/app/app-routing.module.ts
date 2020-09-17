import { LuongComponent } from './luong/luong.component';
import { ThemnhanvienComponent } from './nhanvien/themnhanvien/themnhanvien.component';

import { ThemphongbanComponent } from './Admin/themphongban/themphongban.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Navigation/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BodyAdminComponent } from './Navigation/Effects/body-admin/body-admin.component';
import { HomeComponent } from './Navigation/home/home.component';
import { QuanliphongbanComponent } from './Admin/quanliphongban/quanliphongban.component';
import { QuanlitaikhoanComponent } from './Admin/quanlitaikhoan/quanlitaikhoan.component';
import { ThemtaikhoanComponent } from './Admin/themtaikhoan/themtaikhoan.component';
import { DetailTaikhoanComponent } from './Admin/detail-taikhoan/detail-taikhoan.component';
import { DetailPhongbanComponent } from './Admin/detail-phongban/detail-phongban.component';

//Quản lí
import { NavigatorComponent } from './Navigation/navigator/navigator.component';
import { ProfilesComponent } from './Navigation/Effects/profiles/profiles.component';
import { EditComponent } from './Admin/quanliphongban/edit/edit/edit.component';
import { ChamCongComponent } from './Admin/cham-cong/cham-cong.component';

const routes: Routes = [
  { path: '', redirectTo: 'navigator', pathMatch: 'full' },
  { path: 'navigator', component: NavigatorComponent },
  { path: 'admin/login', component: LoginComponent },
  { path: 'nhanvien/login', component: LoginComponent },
  { path: 'quanli/login', component: LoginComponent },
  {
    path: 'admin', component: BodyAdminComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'taikhoan/:phongbanid', component: QuanlitaikhoanComponent},
      { path: 'phongban', component: QuanliphongbanComponent },
      { path: 'them', component: ThemphongbanComponent },
      { path: 'addtk', component: ThemtaikhoanComponent },
      { path: 'profile/:id', component: ProfilesComponent },
      { path: 'addpb', component: ThemphongbanComponent },
      { path: 'phongban/sua/:id', component: EditComponent },
      { path: 'themnv/:id', component: ThemnhanvienComponent },
      { path: 'chamcong', component: ChamCongComponent },
      { path: 'luong', component: LuongComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
