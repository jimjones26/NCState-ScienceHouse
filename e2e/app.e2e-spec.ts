import { NCStateScienceHousePage } from './app.po';

describe('ncstate-science-house App', function() {
  let page: NCStateScienceHousePage;

  beforeEach(() => {
    page = new NCStateScienceHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
