import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ViewSponsorsComponent } from './pages/admin/view-sponsors/view-sponsors.component';
import { AddSponsorComponent } from './pages/admin/add-sponsor/add-sponsor.component';
import {MatTableModule} from '@angular/material/table';
import { ViewEventsComponent } from './pages/admin/view-events/view-events.component';
import { AddEventsComponent } from './pages/admin/add-events/add-events.component';
import { UpdateEventComponent } from './pages/admin/update-event/update-event.component';
import { ViewTrainerComponent } from './pages/admin/view-trainer/view-trainer.component';
import { AddPlayersComponent } from './pages/admin/add-players/add-players.component'; 
import {DataTablesModule} from 'angular-datatables';
import { PlayerDashboardComponent } from './pages/player/player-dashboard/player-dashboard.component';
import { PlayerSidebarComponent } from './pages/player/player-sidebar/player-sidebar.component';
import { PlayerEventsComponent } from './pages/player/player-events/player-events.component';
import { SubmitFeedbackComponent } from './pages/player/submit-feedback/submit-feedback.component';
import { ViewFeedbackComponent } from './pages/admin/view-feedback/view-feedback.component';
import { ContactTrainersComponent } from './pages/player/contact-trainers/contact-trainers.component';
import { TrainerDashboardComponent } from './pages/trainer/trainer-dashboard/trainer-dashboard.component';
import { TrainerSignupComponent } from './pages/trainer-signup/trainer-signup.component';
import { TrainerSidebarComponent } from './pages/trainer/trainer-sidebar/trainer-sidebar.component';
import { TrainerEventsComponent } from './pages/trainer/trainer-events/trainer-events.component';
import { PlayerListComponent } from './pages/trainer/player-list/player-list.component';
import { PlayerAttendanceComponent } from './pages/trainer/player-attendance/player-attendance.component';
import { ViewAttendanceComponent } from './pages/admin/view-attendance/view-attendance.component';
import { AddTrainersComponent } from './pages/admin/add-trainers/add-trainers.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    ViewSponsorsComponent,
    AddSponsorComponent,
    ViewEventsComponent,
    AddEventsComponent,
    UpdateEventComponent,
    ViewTrainerComponent,
    AddPlayersComponent,
    PlayerDashboardComponent,
    PlayerSidebarComponent,
    PlayerEventsComponent,
    SubmitFeedbackComponent,
    ViewFeedbackComponent,
    ContactTrainersComponent,
    TrainerDashboardComponent,
    TrainerSignupComponent,
    TrainerSidebarComponent,
    TrainerEventsComponent,
    PlayerListComponent,
    PlayerAttendanceComponent,
    ViewAttendanceComponent,
    AddTrainersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule,
    DataTablesModule,
    MatMenuModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
