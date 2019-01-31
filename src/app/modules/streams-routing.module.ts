import { FollowingComponent } from './../components/following/following.component';
import { CommentsComponent } from './../components/comments/comments.component';
import { AuthGuard } from './../services/auth.guard';
import { StreamsComponent } from './../components/streams/streams.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PeopleComponent } from './../components/people/people.component';

const routes: Routes = [
  {
    path: 'streams',
    component: StreamsComponent,
    canActivate: [AuthGuard]
  },
  { path: 'post/:id', component: CommentsComponent, canActivate: [AuthGuard] },
  { path: 'people', component: PeopleComponent, canActivate: [AuthGuard] },
  { path: 'following', component: FollowingComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StreamsRoutingModule {}
