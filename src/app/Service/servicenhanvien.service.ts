import { DiemDanh } from './../model/diemdanh';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NhanVien } from '../model/nhanvien';
import { Image } from './../model/image';
@Injectable({
  providedIn: 'root'
})
export class ServicenhanvienService {
  productURL1 = 'http://localhost:8080/nhanvien/pages?';
  nhanvienURL = 'http://localhost:8080/nhanvien';
  private readonly IMGUR_UPLOAD_URL = 'https://api.imgur.com/3/image';
  private readonly clientId = '45c5e23c8fad260';
  private readonly clientsecret = '143676bf4d07804d0dc68f5e489b3787a9ae843e';
  constructor(private httpClient: HttpClient) { }
  public page(page: number, size: number, order: string, asc: boolean, id: number): Observable<any> {
    return this.httpClient.get<any>(this.productURL1 + `page=${page}&size=${size}&order=${order}&asc=${asc}&phongbanid=${id}`);
  }
  getAll(){
    return this.httpClient.get<any>(this.nhanvienURL + "/list");
  }
  timkiemnhanvien(name){
    return this.httpClient.get<any>(this.nhanvienURL + `/timkiem?ten=${name}`);
  }

  themnhanvien(nhanvien): Observable<NhanVien> {
    return this.httpClient.post<NhanVien>(`${this.nhanvienURL}/newNhanVien`, nhanvien);
  }
  public update(id:number, nhanvien: NhanVien): Observable<any>{
    return this.httpClient.put<any>(this.nhanvienURL + `/update/${id}`, nhanvien);
  }
  getOneNhanVien(id): Observable<NhanVien>{
    return this.httpClient.get<NhanVien>(this.nhanvienURL + `/${id}`);
  }
  upload(b64Image: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Client-ID ${this.clientId}`
      }),
    };
    const formData = new FormData();
    formData.append('image', b64Image);
    return this.httpClient.post<Image>(`${this.IMGUR_UPLOAD_URL}`, formData, httpOptions);
  }
  chamCong(nhanvien):Observable<DiemDanh> {
    return this.httpClient.post<DiemDanh>(`${this.nhanvienURL}/diemdanh`,nhanvien);
  }

}
