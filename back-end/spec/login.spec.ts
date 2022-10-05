import * as login from "../routes/login";
import {UserService} from "../services/user-service";


describe( 'Login Controller', function(){

    let mockUserService;

    beforeEach(async()=>{

        mockUserService = jasmine.createSpyObj(['getUser']);
        mockUserService.getUser.and.returnValue('[{ email: bob@gmail.com, password: 12312JDSda}]');

        TestBed.configureTestingModule ([
            providers: [{provide: mockUserService, useValue: mockUserService}];
        ]);



    });

    it('should query user service to look for user', ()=>{



    });

    it('should send an error when it fails to find user',()=>{

    });

    it('should return user object when user is found',()=>{

    });

});