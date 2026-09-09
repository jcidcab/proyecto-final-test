import { test, expect } from '@playwright/test';
import { FacturasPerfilAdminPage } from '../pages/Facturas.perfilAdminPage.js';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';

test.describe('Módulo de Facturas de Venta - Perfil Admin', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPerfilAdminPage(page);
    const facturasPage = new FacturasPerfilAdminPage(page);

    await loginPage.abrirPagina();
    await loginPage.iniciarSesion('tae@testing.com', 'Tae@2026');

    await facturasPage.navegarAFacturasDeVenta();
    await expect(page).toHaveURL(/.*\/facturas-de-venta/);
  });

  test('1. Crear factura de forma exitosa', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.ingresarOtraDireccion('Av. Vicuña Mackenna 7200');
    await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');

    await facturasPage.guardarYValidarExito();
  });

  test('2. Crear factura sin nombre de Cliente', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
 
    await facturasPage.validarMensajeCamposObligatorios();
  })


 test('3. Crear factura sin nombre de Vendedor', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
   await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.ingresarOtraDireccion('Av. Vicuña Mackenna 7200');
    await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');

 
    await facturasPage.validarMensajeCamposObligatorios();
  })


   test('4. Crear factura sin seleccionar moneda', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.ingresarOtraDireccion('Av. Vicuña Mackenna 7200');
    await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');

 
    await facturasPage.validarMensajeCamposObligatorios();
  })

  test('5. Crear factura sin direccion', async ({ page }) => {
     const facturasPage = new FacturasPerfilAdminPage(page);

     await facturasPage.abrirModalCrearFactura();
     await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

     await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
     await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
     await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
     
     await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');

 
     await facturasPage.guardarSinDireccion();
  })

 test('6. Crear factura sin establecer direccion', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.seleccionarOpcionOtraDireccion();
    await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');
    
    await facturasPage.guardarSinDireccion();
  });

test('7. Crear factura producto', async ({ page }) => {
    const facturasPage = new FacturasPerfilAdminPage(page);

    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.ingresarOtraDireccion('Av. Vicuña Mackenna 7200');
 
    await facturasPage.validarMensajeSinProducto();
  })
   
});

