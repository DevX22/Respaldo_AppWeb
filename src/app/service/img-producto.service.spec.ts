import { TestBed } from '@angular/core/testing';

import { ImgProductoService } from './img-producto.service';

describe('ImgProductoService', () => {
  let service: ImgProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
