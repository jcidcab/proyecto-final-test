import { test, expect } from '@playwright/test';
import { ArticulosPerfilAdminPage } from '../pages/Articulos.PerfilAdminPage.js';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';


test.describe('Módulo de Artículos - Perfil Administrador', () => {
  let adminPage;
  let articulosPage;

  test.beforeEach(async ({ page }) => {
    adminPage = new LoginPerfilAdminPage(page);
    articulosPage = new ArticulosPerfilAdminPage(page);

    await adminPage.abrirPagina();
    await adminPage.iniciarSesion('tae@testing.com', 'Tae@2026');
    await expect(page).toHaveURL(/.*\/dashboard/);
    await articulosPage.navegarAArticulos();
  });

  test.afterEach(async ({ page }) => {
    const adminPageClean = new LoginPerfilAdminPage(page);
    await adminPageClean.cerrarSesion();
  });

  test('1. Crear artículo con éxito', async ({ page }) => {
   
    const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();

    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos);
    await articulosPage.nombreArticulo('Artículo de prueba');
    await articulosPage.Linea('LINEA 1');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();

    await articulosPage.MensajeArticuloCreado();
  });


  test('2. Crear artículo con SKU existente', async ({ page }) => {
    const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();

    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos);
    await articulosPage.nombreArticulo('Artículo de prueba');
    await articulosPage.Linea('LINEA 1');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();
    
    await articulosPage.MensajeArticuloCreado();

    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos); // Reutiliza el mismo código
    await articulosPage.nombreArticulo('Artículo repetido');
    await articulosPage.Linea('LINEA 1');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();

    await articulosPage.MensajeSkuExiste();
  });

  test('3. Crear artículo sin sku', async ({ page }) => {
   
    await articulosPage.IrACrearArticulo();
    await articulosPage.nombreArticulo('Artículo de prueba');
    await articulosPage.Linea('LINEA 1');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();

    await articulosPage.msjSkuErroneo();
  });

  test('4. Crear artículo sin nombre', async ({ page }) => {

     const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();
   
    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos);
    await articulosPage.Linea('LINEA 1');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();

    await articulosPage.articuloSinNombre();
  });

   test('5. Crear artículo sin linea', async ({ page }) => {
   
    const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();
   
    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos);
    await articulosPage.nombreArticulo('Artículo de prueba');
    await articulosPage.Categoria('CATEGORIA 1');
    await articulosPage.guardarCambios();

    await articulosPage.sinLinea();
  });

  test('5. Crear artículo sin ccategoria', async ({ page }) => {
   
    const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();
   
    await articulosPage.IrACrearArticulo();
    await articulosPage.SKU(sku12Digitos);
    await articulosPage.nombreArticulo('Artículo de prueba');
    await articulosPage.Linea('LINEA 1');
    await articulosPage.guardarCambios();
    
    await articulosPage.sinCategoria();
  });

test('6. Crear artículo con descripcion', async ({ page }) => {
  const sku12Digitos = Math.floor(100000000000 + Math.random() * 900000000000).toString();

  await articulosPage.IrACrearArticulo();
  await articulosPage.SKU(sku12Digitos);
  await articulosPage.nombreArticulo('Artículo de prueba');
  await articulosPage.descripcionArticulo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do');
  await articulosPage.Linea('LINEA 1');
  await articulosPage.Categoria('CATEGORIA 1');
  await articulosPage.guardarCambios();

  await articulosPage.MensajeArticuloCreado();
});


});


