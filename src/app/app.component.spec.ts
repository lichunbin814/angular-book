/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    // 重新初使化要被測試的Component
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it(`未登入時，需顯示'末登入'的提示訊息`, async(() => {
    const expectVal = '末登入';
    const actualVal = (fixture.nativeElement as HTMLElement).querySelector('p').textContent;
    expect(actualVal).toContain(expectVal);
  }));
});
