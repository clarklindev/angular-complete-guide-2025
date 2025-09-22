import { Routes } from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';

export const routes: Routes = [
  {
    path: '', //<your-domain>/
    component: NoTaskComponent,
    title: 'No tasks selected',
  },

  {
    path: 'users/:userId', //<your-domain>/users/<uid>
    component: UserTasksComponent,
    children: userRoutes,

    //adding static data to routes - app.config.ts requires withComponentInputBinding(),
    //any data key eg. 'message' will be provided as an input to the component for the route
    data: {
      message: 'Hello!',
    },
    resolve: {
      userName: resolveUserName,
    },
    title: resolveTitle,
  },
  {
    // catchall route
    path: '**',
    component: NotFoundComponent,
  },
];
