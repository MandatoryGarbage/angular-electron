import { MinimumViableProductComponent } from './minimum-viable-product/minimum-viable-product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

const routes: Routes = [
  {
    path: '',
    component: MinimumViableProductComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
