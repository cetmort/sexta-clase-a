import { Injectable } from '@angular/core';
import { concatMap, catchError, tap} from 'rxjs/operators';

import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UnoService } from 'src/app/services/uno.service';

@Injectable({
  providedIn: 'root'
})
export class GetCharacterResolver implements Resolve<any> {
  public id! : number
  constructor (
    private dataS : UnoService,
    private router: Router,
    // public name : UnoComponent
  ){

  }
  
  // this.id =  route.queryParams = ['name'];
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const name: any = route.queryParams['nombre']

    console.log('Resolver', route);
    return this.dataS.getCharacters().pipe(
      tap(resp =>{
        console.log(resp);  
      }),

      concatMap((response: any) =>{
        console.log(response)
        let temp = (response.results as any[]).find(item =>{
          console.log(item);
          return item.name.includes(name)
        })?.name
        if (!temp) {
          throw {status : 404}
        }
        return this.dataS.getCharacter(temp)
      }),
      catchError((err: any)=>{
        if (err.status === 404) {
          this.router.navigate(['404'])
      }
      console.log(err);
      
      return of(err)
      })
    )
  }
}
