exports.ClientePerfilAdminPage = class ClientePerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    this.btnGestionClientes = page.locator('aside nav button, aside div button').nth(1);
    this.subMenuItemClientes = page.getByRole('link', { name: 'Clientes' });
    this.tituloListado = page.getByRole('heading', { name: 'Listado de Clientes' });
  }

  async navegarAClientes() {
    await this.btnGestionClientes.waitFor({ state: 'visible' });
    await this.btnGestionClientes.click();
    
    await this.subMenuItemClientes.waitFor({ state: 'visible' });
    await this.subMenuItemClientes.click();
  }
};