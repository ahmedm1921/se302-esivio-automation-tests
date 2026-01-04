export class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.emailInput = 'input[type="email"]';
    this.confirmButton = 'text=Confirm';
  }

  async fillEmail(email) {
    await this.page.fill(this.emailInput, email);
  }

  async confirmPurchase() {
    await this.page.click(this.confirmButton);
  }
}
