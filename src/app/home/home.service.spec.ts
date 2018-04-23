import { HomeService } from './home.service';
import { MockUsersService } from '../core/models/mock';

describe('HomeService', () => {
    let service: HomeService;
    let mockUsersService: any;

    beforeEach(() => {
        mockUsersService = new MockUsersService();
        service = new HomeService(mockUsersService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
