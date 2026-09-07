export class FacturasPerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    // Navegación del menú lateral
    this.btnGestionClientes = page.locator('aside nav button, aside div button').nth(1);
    this.subMenuItemFacturasVenta = page.getByRole('link', { name: 'Facturas de Venta' });
    
    // Validaciones de la vista
    this.tituloListado = page.getByRole('heading', { name: 'Listado de Facturas de Venta' });
    
    // Filtros de Fecha
    this.inputDesde = page.locator('input[type="date"]').first();
    this.inputHasta = page.locator('input[type="date"]').nth(1);

    // Creación
    this.btnCrearFactura = page.getByRole('button', { name: 'Crear Factura de Venta' });
    this.tituloCrearFactura = page.getByRole('heading', { name: 'Crear Nueva Factura de Venta' });
    this.btnGuardarCambios = page.getByRole('button', { name: 'Guardar Cambios' });
    this.alertaExito = page.locator('text=Factura guardada con éxito!');
  }

  async navegarAFacturasDeVenta() {
    await this.btnGestionClientes.waitFor({ state: 'visible' });
    await this.btnGestionClientes.click();
    await this.subMenuItemFacturasVenta.waitFor({ state: 'visible' });
    await this.subMenuItemFacturasVenta.click();
  }

  async filtrarPorFechas(desde, hasta) {
    if (desde) {
      await this.inputDesde.click();
      await this.inputDesde.fill(desde);
    }
    if (hasta) {
      await this.inputHasta.click();
      await this.inputHasta.fill(hasta);
    }
  }

  async irACrearFactura() {
    await this.btnCrearFactura.waitFor({ state: 'visible' });
    await this.btnCrearFactura.click();
  }

  async guardarFactura() {
    await this.btnGuardarCambios.scrollIntoViewIfNeeded();
    await this.btnGuardarCambios.click();
  }
}