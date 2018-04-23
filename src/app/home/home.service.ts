import { Injectable } from '@angular/core';
import { UsersService } from '../core/services/users.service';
import { User } from '../core/models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HomeService {

    constructor(private usersService: UsersService) {
    }

    getUsers(): Observable<User[]> {
        return this.usersService.getRef().snapshotChanges()
            .map((changes) => {
                return changes.map((change) => ({
                    key: change.key,
                    ...change.payload.val()
                }));
            });

    }
}
