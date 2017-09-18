import { CompChildPage } from './app.po';

describe('comp-child App', () => {
  let page: CompChildPage;

  beforeEach(() => {
    page = new CompChildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
