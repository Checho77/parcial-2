import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aprendido } from './aprendido';

describe('Aprendido', () => {
  let component: Aprendido;
  let fixture: ComponentFixture<Aprendido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aprendido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aprendido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
