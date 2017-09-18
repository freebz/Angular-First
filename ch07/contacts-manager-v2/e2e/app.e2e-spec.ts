import { ContactsManagerV2Page } from './app.po';

describe('contacts-manager-v2 App', () => {
  let page: ContactsManagerV2Page;

  beforeEach(() => {
    page = new ContactsManagerV2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to cm2!');
  });
});
