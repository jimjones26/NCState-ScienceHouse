import { NcstateScienceHousePage } from './app.po';

describe('ncstate-science-house App', function() {
  let page: NcstateScienceHousePage;

  beforeEach(() => {
    page = new NcstateScienceHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
