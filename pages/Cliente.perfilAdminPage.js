export class ClientePerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    // Navegación
    this.btnGestionClientes = page.locator('aside nav button, aside div button').nth(1);
    this.subMenuItemClientes = page.getByRole('link', { name: 'Clientes' });
    this.tituloListado = page.getByRole('heading', { name: 'Listado de Clientes' });
    
    // Creación
    this.btnCrearCliente = page.getByRole('button', { name: 'Crear Cliente' });
    this.tituloCrearCliente = page.getByRole('heading', { name: 'Crear Nuevo Cliente' });
    this.btnGuardarCambios = page.getByRole('button', { name: 'Guardar Cambios' });
    this.alertaExito = page.locator('text=Cliente guardado con éxito!');
    
    // Mensajes de Error
    this.errorCuit = page.locator('p.text-red-600', { 
      hasText: 'El CUIT debe tener 11 dígitos y un dígito verificador válido (formato XX-XXXXXXXX-X)' 
    });
    this.errorNombreRequerido = page.locator('text=Este campo es requerido');
    this.errorClienteExiste = page.locator('text=El cliente ya existe');


    // Selector para la validación de campos obligatorios
    this.mensajeCamposObligatorios = page.getByText('Cliente, Vendedor y Moneda son obligatorios.', { exact: true });
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

  async rellenarFormulario({ 
    cuit = '', 
    razonSocial = '', 
    direccion = 'Dirección de Prueba 123', 
    codigoPostal = '3000', 
    ciudad = 'Santiago', 
    telefono = '999999999', 
    email = 'contacto@empresa.com', 
    whatsapp = '5491100000000' 
  } = {}) {
    // Ingresar CUIT
    const inputCuit = this.page.locator('input').nth(1);
    await inputCuit.scrollIntoViewIfNeeded();
    await inputCuit.click();
    await inputCuit.clear();
    if (cuit) await inputCuit.pressSequentially(cuit, { delay: 50 });

    // Ingresar Nombre o Razón Social
    const inputNombre = this.page.locator('input').nth(2);
    await inputNombre.click();
    await inputNombre.clear();
    if (razonSocial) await inputNombre.fill(razonSocial);

    // Campos individuales permitiendo dejarlos en blanco si se especifica
    const inputDireccion = this.page.locator('input').nth(6);
    await inputDireccion.click();
    await inputDireccion.clear();
    if (direccion) await inputDireccion.fill(direccion);

    const inputCp = this.page.locator('input').nth(7);
    await inputCp.click();
    await inputCp.clear();
    if (codigoPostal) await inputCp.fill(codigoPostal);

    const inputCiudad = this.page.locator('input').nth(8);
    await inputCiudad.click();
    await inputCiudad.clear();
    if (ciudad) await inputCiudad.fill(ciudad);

    const inputTel = this.page.locator('input').nth(10);
    await inputTel.click();
    await inputTel.clear();
    if (telefono) await inputTel.fill(telefono);

    const inputEmail = this.page.locator('input').nth(12);
    await inputEmail.click();
    await inputEmail.clear();
    if (email) await inputEmail.fill(email);

    const inputWp = this.page.locator('input').nth(13);
    await inputWp.click();
    await inputWp.clear();
    if (whatsapp) await inputWp.fill(whatsapp);

    const inputVendedor = this.page.locator('input').nth(14);
    await inputVendedor.scrollIntoViewIfNeeded();
  }

  async guardarCliente() {
    await this.btnGuardarCambios.scrollIntoViewIfNeeded();
    await this.btnGuardarCambios.click();
  }

  
}