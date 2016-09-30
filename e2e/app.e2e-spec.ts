import { AppinstallendpointPage } from './app.po';

describe('appinstallendpoint App', function() {
  let page: AppinstallendpointPage;

  beforeEach(() => {
    page = new AppinstallendpointPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
