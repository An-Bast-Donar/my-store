import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  /*
  Esto es un ejemplo para descargar pdf desde un servicio
  */
  getFile(nombreArchivo: string, url: string, type: string) {
    return this.http.get(url, { responseType: 'blob' }).pipe(
      tap(content => {
        const blob = new Blob([content], { type });
        saveAs(blob, nombreArchivo);
      }),
      map(() => true)
    );
  }
}
