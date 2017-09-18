import { NgChangesPage } from './app.po';

describe('ng-changes App', () => {
  let page: NgChangesPage;

  beforeEach(() => {
    page = new NgChangesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
