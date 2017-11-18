// // import { AuthService } from '../auth.service';
// import { TestBed, async } from '@angular/core/testing';
// import { AppComponent } from './app.component';
// import { RouterTestingModule } from '@angular/router/testing'
// import { MatToolbarModule } from '@angular/material/toolbar';

// describe('AppComponent', () => {
//   beforeEach(async(() => {

//     const fakeAuthService = {}
//     TestBed.configureTestingModule({
//       declarations: [
//         AppComponent
//       ],
//       imports: [
//         RouterTestingModule,
//         MatToolbarModule,
//       ],
//       providers: [
//         { provide: AuthService, useValue: fakeAuthService }
//       ]
//     }).compileComponents();
//   }));
//   it('should create the app', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//   it(`should have as title 'tmp'`, async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     expect(app.title).toEqual('Track my Portfolio');
//   }));
//   it('should render title in a h1 tag', async(() => {
//     const fixture = TestBed.createComponent(AppComponent);
//     fixture.detectChanges();
//     const compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.title').textContent).toContain('Track my Portfolio');
//   }));
// });
