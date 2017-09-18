import { NgOninitPage } from './app.po';

describe('ng-oninit App', () => {
  let page: NgOninitPage;

  beforeEach(() => {
    page = new NgOninitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
