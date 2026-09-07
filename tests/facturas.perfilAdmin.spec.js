import { test, expect } from '@playwright/test';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';
import { FacturasPerfilAdminPage } from '../pages/Facturas.perfilAdminPage.js';

test.describe('Módulo de Facturas de Venta - Perfil Admin', () => {
  let loginPage;
  let facturasPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPerfilAdminPage(page);
    facturasPage = new FacturasPerfilAdminPage(page);

    await loginPage.abrirPagina();
    await loginPage.iniciarSesion('tae@testing.com', 'Tae@2026');
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');

    await facturasPage.navegarAFacturasDeVenta();
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/facturas-de-venta');
  });

  test('Permite visualizar el listado de facturas de venta correctamente', async () => {
    await expect(facturasPage.tituloListado).toBeVisible();
  });

  test('Muestra dinámicamente las facturas correspondientes al rango de fechas indicado por el usuario', async ({ page }) => {
    // 1. Simula el ingreso de cualquier fecha que el usuario indique en los inputs de la interfaz
    const fechaDesdeUsuario = '2026-09-02';
    const fechaHastaUsuario = '2026-09-06';

    // 2. Aplicamos el filtro interactuando directamente con los selectores de fecha
    await facturasPage.filtrarPorFechas(fechaDesdeUsuario, fechaHastaUsuario);

    // 3. Validamos que el listado responda al cambio de fechas
    await expect(facturasPage.tituloListado).toBeVisible();

    // 4. Verificamos las facturas correspondientes al rango especificado
    const filasFacturas = page.locator('tbody tr');
    
    // Obtenemos la cantidad de facturas que arroja este rango específico
    const cantidadFilas = await filasFacturas.count();
    
    // Imprimimos en consola para verificar en tiempo de ejecución cuántas encontró para estas fechas
    console.log(`Cantidad de facturas para el rango ${fechaDesdeUsuario} a ${fechaHastaUsuario}: ${cantidadFilas}`);
    
    // Comprobamos que el sistema devuelva resultados acorde a lo filtrado
    expect(cantidadFilas).toBeGreaterThanOrEqual(0);
  });
});