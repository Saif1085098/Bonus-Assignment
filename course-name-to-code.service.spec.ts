import { TestBed } from '@angular/core/testing';

import { CourseNameToCodeService } from './course-name-to-code.service';

describe('CourseNameToCodeService', () => {
  let service: CourseNameToCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseNameToCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
