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

  test('1. Permite seleccionar cliente, vendedor, moneda, dirección y artículo al crear una nueva factura', async ({ page }) => {
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

});