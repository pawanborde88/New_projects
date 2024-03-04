import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HospitalComponent } from './Hospital_Project/hospital/hospital.component';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { UpdatesComponent } from './Pages/updates/updates.component';
import { NavbarComponent } from './Pages/navbar/navbar.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { TemplageComponent } from './templage/templage.component';
import { LoginComponent } from './Pages/login/login.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TooltipModule } from 'primeng/tooltip';
import { HomeComponent } from './Pages/home/home.component';
import { EventsComponent } from './Pages/events/events.component';
import { SingleeventComponent } from './Pages/events/singleevent/singleevent.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    NavbarComponent,
    UpdatesComponent,
    EventsComponent,
    FooterComponent,
    TemplageComponent,
    LoginComponent,
    HomeComponent,
    SingleeventComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatDialogModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    TooltipModule


  ],
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
