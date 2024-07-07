import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ToobarComponent } from './components/toolbar/toobar.component';
import { SidebarComponentComponent } from "./components/sidebar-component/sidebar-component.component";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatSidenavModule, ToobarComponent, SidebarComponentComponent,MatToolbarModule,MatButtonModule,MatIconModule]
})
export class AppComponent {
  title = 'sidebar-angular-material';
  collapsed = signal(true);

  sidenavWidth = computed(()=> this.collapsed() ? '65px' : '250px')
}
