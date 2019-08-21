import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ClientsComponent } from './clients/clients.component';
import { AddroomComponent } from './addroom/addroom.component';
import { RemoveroomComponent } from './removeroom/removeroom.component';
import { UpdateroomComponent } from './updateroom/updateroom.component';


const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'reservations', component: ReservationsComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'addRoom', component: AddroomComponent},
  { path: 'removeRoom', component: RemoveroomComponent},
  { path: 'updateRoom', component: UpdateroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
