import { GithubprojPage } from './app.po';

describe('githubproj App', () => {
  let page: GithubprojPage;

  beforeEach(() => {
    page = new GithubprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
