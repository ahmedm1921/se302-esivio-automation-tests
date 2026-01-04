export class PlanPage {
  constructor(page) {
    this.page = page;
    this.buyButton = 'text=Buy';
  }

  async proceedToCheckout() {
    await this.page.click(this.buyButton);
  }
}
