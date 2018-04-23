import { UsersService } from './users.service';
import { MockAngularFireDatabase } from '../models/mock';
import * as _ from 'lodash';

describe('UsersService', () => {
    let service: UsersService;
    let mockAngularFireDatabase: any;
    let key: string;

    beforeEach(() => {
        key = `user${_.random(1, 1000)}`;
        mockAngularFireDatabase = new MockAngularFireDatabase();
        service = new UsersService(mockAngularFireDatabase);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('#getRef should call list for users', () => {
        spyOn(mockAngularFireDatabase, 'list');
        service.getRef();
        expect(mockAngularFireDatabase.list).toHaveBeenCalledWith('/users');
    });

    it( '#getByKeyRef should call object for a specific user when called', () => {
        spyOn(mockAngularFireDatabase, 'object');
        service.getByKeyRef(key);
        expect(mockAngularFireDatabase.object).toHaveBeenCalledWith(`/users/${key}`);
    });
});
