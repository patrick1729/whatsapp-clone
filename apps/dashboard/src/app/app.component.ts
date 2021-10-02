import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '@whatsapp-clone/shared/data-access-user';

@Component({
    selector: 'whatsapp-clone-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isLoggedIn$ = this.userService.isUserLoggedIn$;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
        this.isLoggedIn$
            .pipe(distinctUntilChanged())
            .subscribe((loggedIn) => {
                if (!loggedIn) {
                    console.log('Not Logged in');
                    this.router.navigate(['login']);
                } else {
                    console.log('Logged in');
                    this.router.navigate(['']);
                }
            });
    }
}
