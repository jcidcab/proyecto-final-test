export class ClientePerfilAdminPage {
  constructor(page) {
    this.page = page;
 
    this.btnGestionClientes = page.locator('aside nav button, aside div button').nth(1);
    this.subMenuItemClientes = page.getByRole('link', { name: 'Clientes' });
    this.tituloListado = page.getByRole('heading', { name: 'Listado de Clientes' });
    
    this.btnCrearCliente = page.getByRole('button', { name: 'Crear Cliente' });
    this.tituloCrearCliente = page.getByRole('heading', { name: 'Crear Nuevo Cliente' });
    this.btnGuardarCambios = page.getByRole('button', { name: 'Guardar Cambios' });
    this.alertaExito = page.locator('text=Cliente guardado con éxito!');
   
    this.errorCuit = page.locator('p.text-red-600', { 
      hasText: 'El CUIT debe tener 11 dígitos y un dígito verificador válido (formato XX-XXXXXXXX-X)' 
    });
    this.errorNombreRequerido = page.locator('text=Este campo es requerido');
  }

  async navegarAClientes() {
    await this.btnGestionClientes.waitFor({ state: 'visible' });
    await this.btnGestionClientes.click();
    await this.subMenuItemClientes.waitFor({ state: 'visible' });
    await this.subMenuItemClientes.click();
  }

  async irACrearCliente() {
    await this.btnCrearCliente.waitFor({ state: 'visible' });
    await this.btnCrearCliente.click();
  }

  async rellenarFormulario({ cuit = '', razonSocial = '', email = 'contacto@empresa.com' } = {}) {
  
    const inputCuit = this.page.locator('input').nth(1);
    await inputCuit.scrollIntoViewIfNeeded();
    await inputCuit.click();
    await inputCuit.clear();
    if (cuit) await inputCuit.pressSequentially(cuit, { delay: 50 });

    const inputNombre = this.page.locator('input').nth(2);
    await inputNombre.click();
    await inputNombre.clear();
    if (razonSocial) await inputNombre.fill(razonSocial);

   
    await this.page.locator('input').nth(6).fill('Dirección de Prueba 123');
    await this.page.locator('input').nth(7).fill('3000');
    await this.page.locator('input').nth(8).fill('Santiago');
    await this.page.locator('input').nth(10).fill('999999999');
    await this.page.locator('input').nth(12).fill(email);
    await this.page.locator('input').nth(13).fill('5491100000000');

    const inputVendedor = this.page.locator('input').nth(14);
    await inputVendedor.scrollIntoViewIfNeeded();
  }

  async guardarCliente() {
    await this.btnGuardarCambios.scrollIntoViewIfNeeded();
    await this.btnGuardarCambios.click();
  }
}