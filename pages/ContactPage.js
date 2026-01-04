export class ContactPage {
  constructor(page) {
    this.page = page;
    this.nameInput = '#name';
    this.emailInput = '#email';
    this.messageInput = '#message';
    this.submitButton = 'text=Send';
  }

  async open() {
    await this.page.goto('https://www.esivio.com/contact');
  }

  async sendMessage(name, email, message) {
    await this.page.fill(this.nameInput, name);
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.messageInput, message);
    await this.page.click(this.submitButton);
  }
}
