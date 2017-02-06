/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FootBallService } from './foot-ball.service';

describe('FootBallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FootBallService]
    });
  });

  it('should ...', inject([FootBallService], (service: FootBallService) => {
    expect(service).toBeTruthy();
  }));
});
