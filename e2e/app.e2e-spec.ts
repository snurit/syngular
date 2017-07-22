import { SyngularPage } from './app.po';

describe('syngular App', () => {
  let page: SyngularPage;

  beforeEach(() => {
    page = new SyngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
