import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UsersService } from '../core/services/users.service';
import { MockAngularFireList, MockUsersService } from '../core/models/mock';
import { HomeService } from './home.service';
import { User } from '../core/models/user';
import * as _ from 'lodash';
import { Observable } from 'rxjs/Observable';

class MockHomeService {
    getUsers() {}
}

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockUsersService: any;
    let mockHomeService: any;
    let mockUsersBeforeRefactoring: MockAngularFireList<User>;
    let mockUsers: Observable<User[]>;
    let key: string;
    const testUser = {
        username: 'testUser',
        firstName: 'Test',
        lastName: 'User',
        email: 'testUser@test.com'
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [
                { provide: UsersService, useClass: MockUsersService },
                { provide: HomeService, useClass: MockHomeService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        mockUsersService = fixture.debugElement.injector.get(UsersService);
        mockHomeService = fixture.debugElement.injector.get(HomeService);

        key = `testUser${_.random(1, 1000)}`;
        mockUsersBeforeRefactoring = new MockAngularFireList([testUser], [key]);
        mockUsers = Observable.of([testUser]);

        // Have to setup multiple mocks and track multiple calls
        spyOn(mockUsersService, 'getRef').and.returnValue(mockUsersBeforeRefactoring);
        spyOn(mockUsersBeforeRefactoring, 'snapshotChanges').and.callThrough();

        // Simple
        spyOn(mockHomeService, 'getUsers').and.returnValue(mockUsers);

        fixture.detectChanges();
        expect(component.usersBeforeRefactoring).toEqual(jasmine.any(Observable));
        expect(component.users).toEqual(jasmine.any(Observable));

        // Now we have to verify the multiple mocks
        expect(mockUsersService.getRef).toHaveBeenCalled();
        expect(mockUsersBeforeRefactoring.snapshotChanges).toHaveBeenCalled();

        // Simple, again...
        expect(mockHomeService.getUsers).toHaveBeenCalled();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
