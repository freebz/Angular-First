import { DoCheckPage } from './app.po';

describe('do-check App', () => {
  let page: DoCheckPage;

  beforeEach(() => {
    page = new DoCheckPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
