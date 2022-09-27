import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AccountService } from '../_services/account.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AccountService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  
  
  it('should display an error on bad POST', ()=>{

    let success = false;
    let body : string | undefined;

   

  });

  it('should redirect to homepage on successful POST ', ()=>{
    
  });



});
