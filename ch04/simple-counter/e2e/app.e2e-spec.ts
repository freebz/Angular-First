import { SimpleCounterPage } from './app.po';

describe('simple-counter App', () => {
  let page: SimpleCounterPage;

  beforeEach(() => {
    page = new SimpleCounterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
