import { CompCommPage } from './app.po';

describe('comp-comm App', () => {
  let page: CompCommPage;

  beforeEach(() => {
    page = new CompCommPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
