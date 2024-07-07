import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { HistoryComponent } from './pages/history/history.component';
import { SensorComponent } from './pages/sensor/sensor.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { TripsComponent } from './pages/trips/trips.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { UserManagementComponent } from './pages/user-management/user-management.component';
import { DeviceManagementComponent } from './pages/device-management/device-management.component';
import { TicketManagementComponent } from './pages/ticket-management/ticket-management.component';
import { FuelPricesComponent } from './pages/fuel-prices/fuel-prices.component';
import { CommandsComponent } from './pages/commands/commands.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { RoutesComponent } from './pages/routes/routes.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo:'dashboard'
    },
    { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'sensor', component: SensorComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'device-management', component: DeviceManagementComponent },
  { path: 'ticket-management', component: TicketManagementComponent },
  { path: 'fuel-prices', component: FuelPricesComponent },
  { path: 'commands', component:  CommandsComponent},
  { path: 'documents', component: DocumentsComponent },
  { path: 'routes', component: RoutesComponent },
];
