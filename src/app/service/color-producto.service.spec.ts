import { TestBed } from '@angular/core/testing';

import { ColorProductoService } from './color-producto.service';

describe('ColorProductoService', () => {
  let service: ColorProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColorProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
