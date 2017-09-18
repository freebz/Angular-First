import { NgModelPage } from './app.po';

describe('ng-model App', () => {
  let page: NgModelPage;

  beforeEach(() => {
    page = new NgModelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
