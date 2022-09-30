import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/components/not-found/not-found.component';
import { GetCharacterResolver } from './modules/libs/resolvers/get-character.resolver';

const routes: Routes = [
  {
    path:'',
    resolve:{
      character: GetCharacterResolver
    },
    children:[
      {
      path: '',
      redirectTo:'characters',
      pathMatch:'full'
      },
      {
        path:'characters',
        loadChildren: () => import('./modules/components/uno.module').then(m => m.UnoModule)
      },
      
  ]
  },
  {
    path:'**',
    component: NotFoundComponent,
    pathMatch:'full'
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
