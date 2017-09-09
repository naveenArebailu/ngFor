import { DirngForPage } from './app.po';

describe('dirng-for App', function() {
  let page: DirngForPage;

  beforeEach(() => {
    page = new DirngForPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
