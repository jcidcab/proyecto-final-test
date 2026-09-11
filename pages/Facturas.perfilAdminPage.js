import { expect } from '@playwright/test';

export class FacturasPerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    // Navegación del menú
    this.btnMenuModulo = page.locator('a.flex.items-center.p-2.rounded-md.transition-colors.duration-200.justify-center.bg-indigo-600').first();
    this.btnGestionClientes = page.locator('span.flex-1.ml-4.text-left', { hasText: 'Gestión de Clientes' });
    this.subMenuItemFacturasVenta = page.locator('span', { hasText: 'Facturas de Venta' });
    
    // Acciones de creación
    this.btnCrearFacturaVenta = page.getByRole('button', { name: 'Crear Factura de Venta' });
    
    // Selectores para Cliente
    this.btnLupaCliente = page.locator('div').filter({ hasText: /^Cliente \(\*\)/ }).locator('button');
    this.modalBuscarCliente = page.locator('text=Buscar Cliente');
    this.inputCodigoCliente = page.locator('div').filter({ hasText: /^Cliente \(\*\)/ }).locator('input').first();

    // Selectores para Vendedor
    this.btnLupaVendedor = page.locator('div').filter({ hasText: /^Vendedor/ }).locator('button');
    this.modalBuscarVendedor = page.locator('text=Buscar Vendedor');
    this.inputCodigoVendedor = page.locator('div').filter({ hasText: /^Vendedor/ }).locator('input').first();

    // Selectores para Moneda
    this.btnLupaMoneda = page.locator('div').filter({ hasText: /^Moneda/ }).locator('button');
    this.modalBuscarMoneda = page.locator('text=Buscar Moneda');
    this.inputCodigoMoneda = page.locator('div').filter({ hasText: /^Moneda/ }).locator('input').first();

    
   // Selector para el desplegable de Dirección de Entrega y campo de texto personalizado
    this.selectDireccionEntrega = page.locator('[name="delivery_address_selector"]');
    this.inputOtraDireccion = page.getByRole('textbox', { name: /Ingrese la nueva dirección de entrega/i });

    // Selectores para Ítems de la Factura
    this.btnAgregarItem = page.getByRole('button', { name: 'Agregar ítem' });
    this.btnLupaArticulo = page.locator('tr').last().locator('button[aria-label="Buscar"]');
    this.modalBuscarArticulo = page.locator('text=Buscar Artículo');
    this.inputCodigoArticulo = page.locator('tr').last().locator('input').first();

   // Selector para el botón de guardar factura y mensajes de validación
    this.btnGuardarFactura = page.getByRole('button', { name: /Guardar Factura/i });
    this.mensajeExito = page.getByText('Factura creada con éxito.', { exact: true });
    this.mensajeCamposObligatorios = page.getByText('Cliente, Vendedor y Moneda son obligatorios.', { exact: true });
    this.mensajeSinDireccion = page.getByText(/Debe especificar una Dirección/i);
    this.sinProducto = page.getByText('Debe agregar un producto.', { exact: true });
    this.btnCerrarSesion = page.getByText('Cerrar Sesión', { exact: true });
  }

  async navegarAFacturasDeVenta() {
    await this.btnMenuModulo.click();
    await this.btnGestionClientes.click();
    await this.subMenuItemFacturasVenta.waitFor({ state: 'visible'});
    await this.subMenuItemFacturasVenta.click();
  }

  async abrirModalCrearFactura() {
    await this.btnCrearFacturaVenta.click();
    await this.page.waitForURL(/.*\/facturas-de-venta\/nuevo/);
  }

  async seleccionarClientePorNombre(nombreCliente) {
    await this.btnLupaCliente.click();
    await this.modalBuscarCliente.waitFor({ state: 'visible' });
    
    await this.page.getByRole('cell', { name: nombreCliente }).click();
    await this.modalBuscarCliente.waitFor({ state: 'hidden' });
    
    await expect(this.inputCodigoCliente).not.toHaveValue('');
  }

  async seleccionarVendedorPorNombre(nombreVendedor) {
    await this.btnLupaVendedor.click();
    await this.modalBuscarVendedor.waitFor({ state: 'visible' });
    
    await this.page.getByRole('cell', { name: nombreVendedor }).click();
    await this.modalBuscarVendedor.waitFor({ state: 'hidden' });
    
    await expect(this.inputCodigoVendedor).not.toHaveValue('');
  }

  async seleccionarMonedaPorNombre(nombreMoneda) {
    await this.btnLupaMoneda.click();
    await this.modalBuscarMoneda.waitFor({ state: 'visible' });
    
    await this.page.getByRole('cell', { name: nombreMoneda }).click();
    await this.modalBuscarMoneda.waitFor({ state: 'hidden' });
    
    await expect(this.inputCodigoMoneda).not.toHaveValue('');
  }

async ingresarOtraDireccion(direccion) {
    await this.selectDireccionEntrega.selectOption({ label: '--- Ingresar Otra Dirección ---' });
    await this.inputOtraDireccion.fill(direccion);
  }

  async seleccionarArticuloPorNombre(nombreArticulo) {
    await this.btnAgregarItem.click();
    await this.btnLupaArticulo.click();
    await this.modalBuscarArticulo.waitFor({ state: 'visible' });

    await this.page.getByRole('cell', { name: nombreArticulo }).click();
    await this.modalBuscarArticulo.waitFor({ state: 'hidden' });

    await expect(this.inputCodigoArticulo).not.toHaveValue('');
  }

  async validarMensajeCamposObligatorios() {
    await this.btnGuardarFactura.click();
    await expect(this.mensajeCamposObligatorios).toBeVisible();
  }

    async guardarSinDireccion() {
    await this.btnGuardarFactura.click();
    await expect(this.mensajeSinDireccion).toBeVisible();
  }

  async guardarYValidarExito() {
    await this.btnGuardarFactura.click();
    await expect(this.mensajeExito).toBeVisible();
  }

  async seleccionarOpcionOtraDireccion() {
    await this.selectDireccionEntrega.selectOption({ label: '--- Ingresar Otra Dirección ---' });
  }

  async validarMensajeSinProducto() {
    await this.btnGuardarFactura.click();
    // Apuntamos directamente al contenedor del toast de error de Toastify
    const toastError = this.page.locator('.Toastify__toast--error');
    await expect(toastError).toBeVisible();
}
async abrirPagina() {
    await this.page.goto('/login'); // Ajusta la ruta de tu login si es diferente
  }

  async iniciarSesion(email, password) {
    // Tus métodos de login habituales...
  }

  async cerrarSesion() {
    await this.btnCerrarSesion.click();
  }


}