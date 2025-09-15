import {
  Component,
  DestroyRef,
  effect,
  inject,
  // OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})

//implements OnDestroy
export class ServerStatusComponent implements OnInit {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: ReturnType<typeof setInterval>;

  private destroyRef = inject(DestroyRef);

  constructor() {
    //using a signal inside effect(), angular will setup a subscription
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  ngOnInit() {
    // this.interval =
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
