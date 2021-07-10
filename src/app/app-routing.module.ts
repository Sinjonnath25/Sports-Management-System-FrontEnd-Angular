import { AddTrainersComponent } from './pages/admin/add-trainers/add-trainers.component';
import { ViewAttendanceComponent } from './pages/admin/view-attendance/view-attendance.component';
import { PlayerAttendanceComponent } from './pages/trainer/player-attendance/player-attendance.component';
import { PlayerListComponent } from './pages/trainer/player-list/player-list.component';
import { TrainerSignupComponent } from './pages/trainer-signup/trainer-signup.component';
import { TrainerDashboardComponent } from './pages/trainer/trainer-dashboard/trainer-dashboard.component';
import { ContactTrainersComponent } from './pages/player/contact-trainers/contact-trainers.component';
import { ViewFeedbackComponent } from './pages/admin/view-feedback/view-feedback.component';
import { SubmitFeedbackComponent } from './pages/player/submit-feedback/submit-feedback.component';
import { PlayerEventsComponent } from './pages/player/player-events/player-events.component';
import { PlayerDashboardComponent } from './pages/player/player-dashboard/player-dashboard.component';
import { AddPlayersComponent } from './pages/admin/add-players/add-players.component';
import { ViewTrainerComponent } from './pages/admin/view-trainer/view-trainer.component';
import { UpdateEventComponent } from './pages/admin/update-event/update-event.component';
import { AddEventsComponent } from './pages/admin/add-events/add-events.component';
import { ViewEventsComponent } from './pages/admin/view-events/view-events.component';
import { AddSponsorComponent } from './pages/admin/add-sponsor/add-sponsor.component';
import { ViewSponsorsComponent } from './pages/admin/view-sponsors/view-sponsors.component';
import { Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { TrainerEventsComponent } from './pages/trainer/trainer-events/trainer-events.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'trainer-signup',
    component: TrainerSignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'add-players',
        component: AddPlayersComponent,
      },
      {
        path: 'view-trainers',
        component: ViewTrainerComponent,
      },
      {
        path: 'add-trainers',
        component: AddTrainersComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'sponsors',
        component: ViewSponsorsComponent,
      },
      {
        path: 'events',
        component: ViewEventsComponent,
      },
      {
        path: 'add-sponsors',
        component: AddSponsorComponent,
      },
      {
        path: 'add-events',
        component: AddEventsComponent,
      },
      {
        path: 'events/:eId',
        component: UpdateEventComponent,
      },
      {
        path: 'feedbacks',
        component: ViewFeedbackComponent,
      },
      {
        path: 'attendances',
        component: ViewAttendanceComponent,
      },
    ],
  },
  {
    path: 'player-dashboard',
    component: PlayerDashboardComponent,
    canActivate: [NormalGuard],
    children: [
    {
      path:'',
      component: PlayerEventsComponent,
      },
      {
        path: 'trainers',
        component: ContactTrainersComponent,
      },
      {
        path: 'feedback',
        component: SubmitFeedbackComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path:'trainer-dashboard',
    component :TrainerDashboardComponent,
    canActivate:[NormalGuard],
    children: [
      {
        path:'',
        component: TrainerEventsComponent,
        },
        {
          path: 'players',
          component: PlayerListComponent,
        },
        {
          path:"attendance",
          component: PlayerAttendanceComponent,
        },
        {
          path: 'profile',
          component: ProfileComponent,
        },
      ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
