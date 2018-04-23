import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { UsersService } from '../core/services/users.service';
import { MockUsersService } from '../core/models/mock';
import { HomeService } from './home.service';

class MockHomeService {
    getUsers() {}
}

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockUsersService: any;
    let mockHomeService: any;

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
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
