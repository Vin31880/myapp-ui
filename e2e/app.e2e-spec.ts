import { MyappUiPage } from './app.po';

describe('myapp-ui App', function() {
  let page: MyappUiPage;

  beforeEach(() => {
    page = new MyappUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
