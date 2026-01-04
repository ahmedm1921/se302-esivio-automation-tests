export class HomePage {
  constructor(page) {
    this.page = page;
    this.countrySearch = 'input[type="search"]';
    this.firstPlan = '.plan-card';
  }

  async open() {
    await this.page.goto('https://www.esivio.com');
  }

  async searchCountry(country) {
    await this.page.fill(this.countrySearch, country);
  }

  async selectFirstPlan() {
    await this.page.locator(this.firstPlan).first().click();
  }
}
