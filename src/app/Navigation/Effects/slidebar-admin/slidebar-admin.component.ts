import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenserviceService } from './../../../Service/tokenservice.service';
@Component({
  selector: 'app-slidebar-admin',
  templateUrl: './slidebar-admin.component.html',
  styleUrls: ['./slidebar-admin.component.css']
})
export class SlidebarAdminComponent implements OnInit {
  isLogged: boolean;
  userName: string;
  constructor(
    private tokenService: TokenserviceService,
              private  router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.tokenService.getUserName();
  }
  logout(): void{
    // tslint:disable-next-line: no-unused-expression
    if (this.userName){
      this.tokenService.logOut();
      this.router.navigate(['/']);
    }

  }
}
