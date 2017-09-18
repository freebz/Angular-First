import { CompTplRefPage } from './app.po';

describe('comp-tpl-ref App', () => {
  let page: CompTplRefPage;

  beforeEach(() => {
    page = new CompTplRefPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
