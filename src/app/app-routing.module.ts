import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsComponent } from './results/results.component';






export const appRoutes: Routes = [
    // 1st Route
    { path: 'result',  component: ResultsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
