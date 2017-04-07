import { DojPage } from './app.po';

describe('doj App', () => {
  let page: DojPage;

  beforeEach(() => {
    page = new DojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
