import {
  CanMatch,
  CanMatchFn,
  RedirectCommand,
  Router,
  Routes,
} from '@angular/router';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserName,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as userRoutes } from './users/users.routes';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segment) => {
  //return 'true' to allow access 'false' to deny or observable that returns a boolean or redirect command
  const router = inject(Router);

  const shouldGetAccess = Math.random();
  if (shouldGetAccess < 0.5) {
    return true;
  }

  //param of type UrlTree
  return new RedirectCommand(router.parseUrl('/unauthorized'));
};

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

    //route guard 'can...' keyword
    canMatch: [dummyCanMatch],

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
