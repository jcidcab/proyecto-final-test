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

    // Selectores para Ítems de la Factura
    this.btnAgregarItem = page.getByRole('button', { name: 'Agregar ítem' });
    this.btnLupaArticulo = page.locator('.relative.flex-1').locator('button[aria-label="Buscar"]');
    this.modalBuscarArticulo = page.locator('text=Buscar Artículo');
    this.inputCodigoArticulo = page.locator('.relative.flex-1').locator('input').first();
  }

  async navegarAFacturasDeVenta() {
    await this.btnMenuModulo.click();
    await this.btnGestionClientes.click();
    await this.subMenuItemFacturasVenta.waitFor({ state: 'visible', timeout: 10000 });
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

  async seleccionarArticuloPorNombre(nombreArticulo) {
    await this.btnAgregarItem.click();
    await this.btnLupaArticulo.click();
    await this.modalBuscarArticulo.waitFor({ state: 'visible' });

    await this.page.getByRole('cell', { name: nombreArticulo }).click();
    await this.modalBuscarArticulo.waitFor({ state: 'hidden' });

    await expect(this.inputCodigoArticulo).not.toHaveValue('');
  }
}