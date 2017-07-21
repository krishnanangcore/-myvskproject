import { MyvskprojectPage } from './app.po';

describe('myvskproject App', () => {
  let page: MyvskprojectPage;

  beforeEach(() => {
    page = new MyvskprojectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
