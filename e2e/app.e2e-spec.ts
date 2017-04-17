import { RapidChangedetectionPage } from './app.po';

describe('rapid-changedetection App', () => {
  let page: RapidChangedetectionPage;

  beforeEach(() => {
    page = new RapidChangedetectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
