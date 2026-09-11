import { expect } from '@playwright/test';

export class ArticulosPerfilVendedorPage {
  constructor(page) {
    this.page = page;

    this.btnDashboard = page.locator('a.flex.items-center.p-2.rounded-md.transition-colors.duration-200.justify-center.bg-indigo-600');
    this.btnInventario = page.getByText('Inventario', { exact: true });
    this.btnArticulos = page.getByText('Artículos', { exact: true });
    this.btnCrearArticulo = page.getByText('Crear Artículo', { exact: true });
    this.inputSKU = page.getByRole('textbox', { name: 'Código (SKU) *' });
    this.inputNombre = page.getByLabel('Nombre / Descripción Breve *', { exact: true });
    this.selectLinea = page.locator('div').filter({ hasText: /^Línea \*/ }).locator('select');
    this.selectCategoria = page.locator('div').filter({ hasText: /^Categoría \*/ }).locator('select');
    this.btnGuardarArticulo = page.getByText('Guardar Cambios', { exact: true });
    this.mensajeExito = page.locator('.Toastify__toast--success');
    this.msjSkuRepetido= page.locator('.Toastify__toast--error', { hasText: /The sku has already been taken/i });
    this.msjSkuFormatoErroneo= page.getByText('Este campo es requerido', { exact: true });
    this.msjSinNombre=  page.getByText('Este campo es requerido', { exact: true });
    this.msjSinLinea= page.getByText('Este campo es requerido', { exact: true });
    this.msjSinCategoria= page.getByText('Este campo es requerido', { exact: true });
    this.inputDescLarga= page.getByRole('textbox', { name: 'Descripción Larga' });
  }

  async navegarAArticulos() {
    await this.btnDashboard.click();
    await this.btnInventario.click();
    await this.btnArticulos.click();
  }

  async IrACrearArticulo() {
    await this.btnCrearArticulo.click();
    await this.page.waitForURL(/.*\/articulos\/nuevo/);
  }

  async SKU(sku) {
    await this.inputSKU.click();
    await this.inputSKU.fill(sku);
  }

  async nombreArticulo(nombre) {
    await this.inputNombre.click();
    await this.inputNombre.fill(nombre);
  }

  async Linea(nombreLinea) {
    await this.selectLinea.selectOption({ label: nombreLinea });
  }

  async Categoria(nombreCategoria) {
    await this.selectCategoria.selectOption({ label: nombreCategoria }); 
  }

  async guardarCambios() {
    await this.btnGuardarArticulo.click();
  }

  async MensajeArticuloCreado() {
    await expect(this.mensajeExito).toBeVisible();
  }
  

    async MensajeSkuExiste() {
    await expect(this.msjSkuRepetido).toBeVisible();
  }
  
  async publicarNuevamente(){
     await this.btnArticulos.click();
     await this.btnCrearArticulo.click();

  }
 async msjSkuErroneo(){
     await expect(this.msjSkuFormatoErroneo).toBeVisible();
}

 async articuloSinNombre(){
     await expect(this.msjSinNombre).toBeVisible();
}

async sinLinea(){
     await expect(this.msjSinLinea).toBeVisible();
}

async sinCategoria(){
    await expect(this.msjSinCategoria).toBeVisible();
}
 async descripcionArticulo(descripcion) {
    await this.inputDescLarga.click();
    await this.inputDescLarga.fill(descripcion);
  }
};