import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { Subject, takeUntil } from "rxjs";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isAdmin: boolean = false;
  notifier$: Subject<null> = new Subject();

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.router.events
      .pipe(takeUntil(this.notifier$))
      .subscribe((res) => {
        if (res instanceof NavigationEnd) {
          this.isAdmin = res.url === '/admin/users';
        }
      })
  }

  ngOnDestroy(): void {
    this.notifier$.next(null);
    this.notifier$.complete()
  }
}

