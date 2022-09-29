import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from '../_services/account.service';
import { LoginComponent } from './login.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

describe('LoginComponent', () => {

  let component : LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;
  let service : AccountService;
  let router : Router;
  let accountServiceSpy: jasmine.SpyObj<AccountService>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    accountServiceSpy = TestBed.inject(AccountService) as jasmine.SpyObj<AccountService>;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
  });

  it('should exist', () => {
    expect(component).toBeTruthy();
  });

  it ('should display a login form', () =>{

    const loginForm = fixture.debugElement.query(By.css('#login-form')).nativeElement;
    expect(loginForm.toBeTruthy);

  });

  it ('should display a login button', () =>{

    const loginButton = fixture.debugElement.query(By.css('#login-button')).nativeElement;
    expect(loginButton.toBeTruthy);

  });

  it ('should call login() when button is clicked', ()=>{

    const componentSpy = spyOn(component,'login');

    const loginButton = fixture.debugElement.query(By.css('#login-button')).nativeElement;
    loginButton.click();
      
    expect(componentSpy).toHaveBeenCalled();
    
  });

  it("should contact AccountService when login() is called",()=>{
    
    const serviceSpy = spyOn(accountServiceSpy, 'getAccount');
    
    component.login();
    expect(serviceSpy).toHaveBeenCalled();

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
