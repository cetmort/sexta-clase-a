import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UnoService } from '../../../services/uno.service';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})

export class UnoComponent implements OnInit {
  public personaje$!: Observable<any>
  // public nameMorty : number = 1
  public  name: string = ''

  constructor(private activeRouter: ActivatedRoute) {
    this.personaje$ = this.activeRouter.data.pipe(
      tap(console.log)
    )
   }
  ngOnInit(): void {

  }
  


}
