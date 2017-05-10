import { AtlasLandingPagePage } from './app.po';

describe('atlas-landing-page App', () => {
  let page: AtlasLandingPagePage;

  beforeEach(() => {
    page = new AtlasLandingPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
