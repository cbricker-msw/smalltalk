import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { User } from '../core/models/user';
import { Observable } from 'rxjs/Observable';
import { HomeService } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    usersBeforeRefactoring: Observable<User[]>;
    users: Observable<User[]>;

    constructor(
        private usersService: UsersService,
        private homeService: HomeService
    ) {
    }

    ngOnInit() {
        this.usersBeforeRefactoring = this.getUsersBeforeRefactoring();
        this.users = this.getUsers();
    }

    private getUsersBeforeRefactoring(): Observable<User[]> {
        return this.usersService.getRef().snapshotChanges()
            .map((changes) => {
                return changes.map((change) => ({
                    key: change.key,
                    ...change.payload.val()
                }));
            });
    }

    private getUsers(): Observable<User[]> {
        return this.homeService.getUsers();
    }

}
