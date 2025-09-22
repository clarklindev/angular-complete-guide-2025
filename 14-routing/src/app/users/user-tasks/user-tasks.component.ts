import {
  Component,
  // computed,
  // DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import {
  // ActivatedRoute,
  // ParamMap,
  RouterOutlet,
  RouterLink,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  ActivatedRoute,
} from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit {
  //name an input with the same as the dynamic url segment
  // userId = input.required<string>();

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  // userName = '';
  userName = input.required<string>();
  message = input.required<string>();

  // private usersService = inject(UsersService);
  // private activatedRoute = inject(ActivatedRoute);
  // private destroyRef = inject(DestroyRef);

  // logic moves to resolveUserName()
  // ngOnInit() {
  //   console.log('Input data:' + this.message());

  //   console.log(this.activatedRoute);

  //   console.log(this.activatedRoute.snapshot.paramMap.get('userId')); //a snapshot

  //   const subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap: ParamMap) => {
  //       this.userName =
  //         this.usersService.users.find((u) => u.id === paramMap.get('userId'))
  //           ?.name || '';
  //     },
  //   });

  //   this.destroyRef.onDestroy(() => subscription.unsubscribe());
  // }

  private activatedRoute = inject(ActivatedRoute);

  // OPTION 2
  ngOnInit() {
    // this.activatedRoute.data holds the merged app.routes.ts route data:{} and resolve:{} data
    this.activatedRoute.data.subscribe({
      next: (data) => {
        console.log(data);
        //logs...

        /* {
          message: "Hello",
          userName: 'Mr X'
        }*/
      },
    });
  }
}

//outsourcing data fetching from component to resolver function
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  routerState: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);

  const userName =
    usersService.users.find(
      (u) => u.id === activatedRoute.paramMap.get('userId')
    )?.name || '';

  return userName;
};
