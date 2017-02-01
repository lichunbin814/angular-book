import { AngularBookPage } from './app.po';

describe('angular-book App', function() {
  let page: AngularBookPage;

  beforeEach(() => {
    page = new AngularBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
