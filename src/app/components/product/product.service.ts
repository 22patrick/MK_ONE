import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProductService {

  // -------------------------------- VARIAVEIS --------------------------------
  // -------------------------------- VARIAVEIS --------------------------------
  // -------------------------------- VARIAVEIS --------------------------------

  baseUrl = "http://localhost:3001/products";
  baseUrlEquipamento = "http://localhost:3001/equipamentos";
  baseUrlEmpresa = "http://localhost:3001/empresas";
  centralIp = "http://172.16.233.170:3000/";
  centralMaringa = "http://192.168.250.222:3000/";


  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }


  // ----------------------------------- MSG -----------------------------------
  // ----------------------------------- MSG -----------------------------------
  // ----------------------------------- MSG -----------------------------------
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success'],
    });
  }

  // ---------------------------------- CREATE ----------------------------------
  // ---------------------------------- CREATE ----------------------------------
  // ---------------------------------- CREATE ----------------------------------
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  createEquipamento(equipamento: any) {
    return this.http.post<Product>(this.baseUrlEquipamento, equipamento);
  }

  createConta(conta: any) {

    console.log(conta);

    return this.http.post<Product>(this.baseUrlEmpresa, conta);
  }

  // ------------------------------------ READ ----------------------------------
  // ------------------------------------ READ ----------------------------------
  // ------------------------------------ READ ----------------------------------
  read(): Observable<any> {
    return this.http.get(this.baseUrl)
  }

  readEquipamentos(): Observable<any> {
    return this.http.get(this.baseUrlEquipamento)
  }

  readEmpresa(): Observable<any> {
    return this.http.get(this.baseUrlEmpresa)
  }

  readCentral(dados: any): Observable<any> {
    return this.http.get(this.centralIp + dados).pipe(res => res)    
  }

  readCentralMaringa(dados: any): Observable<any> {
    return this.http.get(this.centralMaringa + dados).pipe(res => res)    
  }
  // -------------------------------- READ ID ------------------------------------
  // -------------------------------- READ ID ------------------------------------
  // -------------------------------- READ ID ------------------------------------
  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url)
  }

  readByIdEquipamento(id: string): Observable<Product> {
    const url = `${this.baseUrlEquipamento}/${id}`
    return this.http.get<Product>(url)
  }

  readByIdEmpresa(id: string): Observable<Product> {
    const url = `${this.baseUrlEmpresa}/${id}`
    return this.http.get<Product>(url)
  }
  // ---------------------------------- UPDATE ----------------------------------
  // ---------------------------------- UPDATE ----------------------------------
  // ---------------------------------- UPDATE ----------------------------------
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  updateEquipamento(product: Product): Observable<Product> {
    const url = `${this.baseUrlEquipamento}/${product.id}`
    return this.http.put<Product>(url, product)
  }

  updateEmpresa(product: Product): Observable<Product> {
    const url = `${this.baseUrlEmpresa}/${product.id}`
    return this.http.put<Product>(url, product)
  }
  // ---------------------------------- DELETE ----------------------------------
  // ---------------------------------- DELETE ----------------------------------
  // ---------------------------------- DELETE ----------------------------------
  deleteById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url)
  }

  deleteByIdEquipamento(id: string) {
    const url = `${this.baseUrlEquipamento}/${id}`
    return this.http.delete<Product>(url)
  }

  deleteByIdEmpresa(id: string) {
    const url = `${this.baseUrlEmpresa}/${id}`
    return this.http.delete<Product>(url)
  }
}
