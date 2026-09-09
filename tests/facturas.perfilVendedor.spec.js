import { test, expect } from '@playwright/test';
import { FacturasPerfilVendedorPage } from '../pages/FacturasPerfilVendedorPage.js';
import { LoginPerfilVendedorPage } from '../pages/Login.perfilVendedorPage.js';

test.describe('Módulo de Facturas de Venta - Perfil Vendedor', () => {
  let vendedorPage;
  let facturasPage;

  test.beforeEach(async ({ page }) => {
    vendedorPage = new LoginPerfilVendedorPage(page);
    facturasPage = new FacturasPerfilVendedorPage(page);

    await vendedorPage.abrirPagina();
    await vendedorPage.iniciarSesion('vendedor@testing.com', 'Tae@2026');
    
    // Validar el dashboard y desplegar el menú desde FacturasPerfilVendedorPage
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');
    await facturasPage.navegarAFacturasDeVenta();
  });

  test('1. Crear factura con éxito (Perfil Vendedor)', async ({ page }) => {
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
    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    
    await facturasPage.validarMensajeCamposObligatorios();
  });

  test('3. Crear factura sin nombre de Vendedor', async ({ page }) => {
    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    
    await facturasPage.validarMensajeCamposObligatorios();
  });

  test('4. Crear factura sin tipo de Moneda', async ({ page }) => {
    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    
    await facturasPage.validarMensajeCamposObligatorios();
  });

  test('5. Crear factura sin direccion', async ({ page }) => {
    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.seleccionarArticuloPorNombre('Teclado Tester');
    
    await facturasPage.guardarSinDireccion();
  });

  test('6. Crear factura sin establecer direccion', async ({ page }) => {
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
    await facturasPage.abrirModalCrearFactura();
    await expect(page).toHaveURL(/.*\/facturas-de-venta\/nuevo/);

    await facturasPage.seleccionarClientePorNombre('Cliente Automatizacion TAE');
    await facturasPage.seleccionarVendedorPorNombre('VENDEDOR 01');
    await facturasPage.seleccionarMonedaPorNombre('PESOS ARGENTINOS');
    await facturasPage.ingresarOtraDireccion('Av. Vicuña Mackenna 7200');
    
    await facturasPage.validarMensajeSinProducto();
  });
});