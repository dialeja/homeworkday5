import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, delay, pluck} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  resonse: Response;
  constructor(private http: HttpClient) { }
  getResource<T>(url:string,property:string):Observable<T[]>{
    return this.http.get<T[]>(url).pipe(map((collection:T[])=>{
      return collection.map((data)=>{
        return data[property];
      })
    }))
  }
}
