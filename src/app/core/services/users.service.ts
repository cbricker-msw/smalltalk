import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';

@Injectable()
export class UsersService {

    constructor(private db: AngularFireDatabase) {
    }

    getRef(): AngularFireList<any> {
        return this.db.list('/users');
    }

    getByKeyRef(key: string): AngularFireObject<any> {
        return this.db.object(`/users/${key}`);
    }

}
