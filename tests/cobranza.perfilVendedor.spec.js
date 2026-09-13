import { test, expect } from '@playwright/test';
import { CobranzaPerfilVendedorPage } from '../pages/Cobranza.perfilVendedorPage.js';
import { LoginPerfilVendedorPage } from '../pages/Login.perfilVendedorPage.js'; // Ajusta la ruta de tu login de admin

test.describe('Módulo de Cobranza - Perfil Vendedor', () => {
  let vendedorPage;
  let cobranzaPage;

  test.beforeEach(async ({ page }) => {
    vendedorPage = new LoginPerfilVendedorPage(page);
    cobranzaPage = new CobranzaPerfilVendedorPage(page);

    await vendedorPage.abrirPagina();
    await vendedorPage.iniciarSesion('vendedor@testing.com', 'Tae@2026'); // Reemplaza con tus credenciales de admin
    await expect(page).toHaveURL(/.*\/dashboard/);
    
    
    await cobranzaPage.navegarACobranza();
  });

  test.afterEach(async ({ page }) => {
    const vendedorPageClean = new LoginPerfilVendedorPage(page);
    if (typeof vendedorPageClean.cerrarSesion === 'function') {
      await vendedorPageClean.cerrarSesion();
    }
  });

  test('1. Crear cobranza de forma exitosa', async ({ page }) => {
           

        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.guardarCobranza();
        
        await cobranzaPage.cobranzaExitosa();
  });

   test('2. Crear cobranza sinnombre de cliente', async ({ page }) => {
           

        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.guardarCobranza();
        
        await cobranzaPage.cobranzaRechazada();
  });


  test('3. Crear cobranza con medio de pago efectivo', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoEfectivo();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.cobranzaExitosa();
  });

    test('4. Crear cobranza con medio de pago cheque', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoCheque();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.cobranzaExitosa();
  });


//   Error: no hay bancos asignados

   test('5. Crear cobranza con medio de pago con transferencia ', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoTransferencia();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.faltaAsignarBancos();
        
  });

  test('6. Crear cobranza con medio de pago con documento', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoDocumento();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.cobranzaExitosa();
        
  });

   test('7. Crear cobranza con medio de pago con retencion', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoRetencion();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.cobranzaExitosa();
        
  });

  test('8. Crear cobranza con medio de pago con ajuste', async ({ page }) => {
           
        await cobranzaPage.crearNuevaCobranza();
        await cobranzaPage.encontrarClientes()
        await cobranzaPage.seleccionarClienteAleatorio();
        await cobranzaPage.MedioDePagoAjuste();
        await cobranzaPage.guardarCobranza();

        await cobranzaPage.cobranzaExitosa();
        
  });
});