import { Job1Page } from './app.po';

describe('job1 App', function() {
  let page: Job1Page;

  beforeEach(() => {
    page = new Job1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
