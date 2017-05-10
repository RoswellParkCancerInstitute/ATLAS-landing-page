import { browser, element, by } from 'protractor';

export class AtlasLandingPagePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
