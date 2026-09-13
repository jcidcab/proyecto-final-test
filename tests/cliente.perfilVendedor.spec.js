import { test, expect } from '@playwright/test';
import { ClientePerfilVendedorPage } from '../pages/Cliente.perfilVendedorPage.js'; 
import { LoginPerfilVendedorPage } from '../pages/Login.perfilVendedorPage.js';

test.describe('Módulo de Clientes - Perfil Vendedor', () => {
  let vendedorPage;
  let clientePage;

  test.beforeEach(async ({ page }) => {
    vendedorPage = new LoginPerfilVendedorPage(page);
    clientePage = new ClientePerfilVendedorPage(page);

    await vendedorPage.abrirPagina();
    await vendedorPage.iniciarSesion('vendedor@testing.com', 'Tae@2026');
    await expect(page).toHaveURL(/.*\/dashboard/);
    
    await clientePage.navegarAClientes();


  });

    test.afterEach(async ({ page }) => {
    const vendedorPageClean = new LoginPerfilVendedorPage(page);
    await vendedorPageClean.cerrarSesion();
  });

  test('1. Creación exitosa de cliente', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.guardarCambios();

    await clientePage.mensajeClienteCreado();

  });

   test('2. Ingreso sin CUIT', async ({ page }) => {
    await clientePage.registrarCliente();
    
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.guardarCambios();

    await clientePage.msjCuitVacio();

  });

  test('3. Ingreso con CUIT falso', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-25-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.guardarCambios();

    await clientePage.msjCuitErroneo();

  });

  test('4. Ingreso de cliente sin nombre', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.guardarCambios();

    await clientePage.msjSinNombre();

  });

  test('5. Ingreso de cliente Cond Tributaria IVA Responsable ', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.selectCndTributaria('IVA Responsable Inscripto');
    await clientePage.guardarCambios();

     await clientePage.mensajeClienteCreado();

  });

   test('6. Ingreso de cliente Cond Tributaria Monotributista ', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.selectCndTributaria('Monotributista');
    await clientePage.guardarCambios();

    await clientePage.mensajeClienteCreado();

  });

  test('7. Ingreso de cliente Cond Tributaria Exento ', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.selectCndTributaria('Exento');
    await clientePage.guardarCambios();

     await clientePage.mensajeClienteCreado();

  });

  test('8. Ingreso de cliente que no retiene IVA ', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.retencionIVA('No');
    await clientePage.guardarCambios();

    await clientePage.mensajeClienteCreado();

  });

   test('9. Ingreso de cliente que retiene IVA ', async ({ page }) => {
    await clientePage.registrarCliente();
    await clientePage.ingresarCuit('20-23444555-4');
    await clientePage.ingresarNombre('Cliente ficticio para prueba');
    await clientePage.retencionIVA('Si');
    await clientePage.guardarCambios();

     await clientePage.mensajeClienteCreado();

  });



});