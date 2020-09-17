import { Image } from './../model/image';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PhongBan} from '../model/phongban';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicephongbanService {
  private api = 'http://localhost:8080/phongban';
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '45c5e23c8fad260';
  private readonly clientsecret = '143676bf4d07804d0dc68f5e489b3787a9ae843e';
  constructor(private http: HttpClient) { }
  Addphongban(phongBan): Observable<PhongBan>{
    return this.http.post<PhongBan>(`${this.api + '/add'}`, phongBan);
  }
  Editphongban(id , phongBan: PhongBan): Observable<PhongBan>{
    return this.http.put<PhongBan>(this.api + `/update/${id}`, phongBan);
  }
  getphongban(): Observable<PhongBan[]>{
    return this.http.get<PhongBan[]>(this.api);

  }
  getonephongban(id): Observable<PhongBan>{
    return this.http.get<PhongBan>(this.api + `/${id}`);
  }

  upload(b64Image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`
      }),
    };
    const formData = new FormData();
    formData.append('image', b64Image);
    return this.http.post<Image>(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }
}
