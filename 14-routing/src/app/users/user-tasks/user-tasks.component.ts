import {
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  //name an input with the same as the dynamic url segment
  // userId = input.required<string>();

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name
  // );

  userName = '';

  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    console.log(this.activatedRoute);
    const subscription = this.activatedRoute.paramMap.subscribe(() => {
      next: (paramMap: ParamMap) =>
        (this.userName =
          this.usersService.users.find((u) => u.id === paramMap.get('userId'))
            ?.name || '');
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
