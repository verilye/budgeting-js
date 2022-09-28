import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component : LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;
  let service : AccountService;
  let router : Router;

  beforeEach(async () => {

    const accountServiceSpy = jasmine.createSpyObj<AccountService>(['getAccount']);
    accountServiceSpy.getAccount.and.callFake(function(){
      return of({
        results:[
          {
            name: 'King',
            email: 'Julian'
          }
        ]
      })
    });

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it ('should display a login form', () =>{

    const loginForm = fixture.debugElement.query(By.css('#loginForm')).nativeElement;
    expect(loginForm.toBeTruthy);

  });

  it ('should display a login button', ()=>{

    const loginButton = fixture.debugElement.query(By.css('#loginButton')).nativeElement;
    expect(loginButton.toBeTruthy);

  });

  it ('should call onLogin when button is clicked', ()=>{

    const loginButton = fixture.debugElement.query(By.css('#loginButton')).nativeElement;
    loginButton.click();

    fixture.whenStable().then(()=>{
      expect(component.login).toHaveBeenCalled();
    });
  });

  it("should contact AccountService when login() is called",()=>{
    
    const accountSpy = spyOn(service, 'getAccount');
    component.login();
    expect(accountSpy).toHaveBeenCalled();

  });

  it('should display an error message when an error is thrown',()=>{

    expect(()=>{component;}).toThrowError();

    expect(window).toHaveBeenCalled();
    
    const errorPopup = fixture.debugElement.query(By.css('#errorPopup')).nativeElement;
    expect(errorPopup.toBeTruthy);

  });

  it('should redirect to homepage', ()=>{
    
    const navigateSpy = spyOn(router, 'navigate');
    component.login();
    expect(navigateSpy).toHaveBeenCalledWith(['/home']);

  });



});
