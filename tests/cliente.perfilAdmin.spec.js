import { test, expect } from '@playwright/test';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';
import { ClientePerfilAdminPage } from '../pages/Cliente.perfilAdminPage.js';

test.describe('Módulo de Clientes - Perfil Admin', () => {
  let loginPage;
  let clientePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPerfilAdminPage(page);
    clientePage = new ClientePerfilAdminPage(page);

    await loginPage.abrirPagina();
    await loginPage.iniciarSesion('tae@testing.com', 'Tae@2026');
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');

    await clientePage.navegarAClientes();
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/clientes');

    await clientePage.irACrearCliente();
    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/clientes/nuevo');
    await expect(clientePage.tituloCrearCliente).toBeVisible();
  });

  test('Permite visualizar el listado de clientes correctamente', async ({ page }) => {
    await page.goto('https://imcoarca.leonardojose.dev/clientes');
    await expect(clientePage.tituloListado).toBeVisible();
  });

  test('Permite crear un cliente exitosamente con datos válidos', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Empresa Valida S.A.' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Muestra error de formato al registrar un CUIT erróneo', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '11-1', 
      razonSocial: 'Cliente Cuit Inválido' 
    });
    await clientePage.guardarCliente();

    await clientePage.errorCuit.scrollIntoViewIfNeeded();
    await expect(clientePage.errorCuit).toBeVisible();
  });

  test('Muestra error de campo requerido al intentar guardar sin nombre o razón social', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: '' 
    });
    await clientePage.guardarCliente();

    await clientePage.errorNombreRequerido.scrollIntoViewIfNeeded();
    await expect(clientePage.errorNombreRequerido).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando la dirección en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin Direccion',
      direccion: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando el código postal en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin CP',
      codigoPostal: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando la ciudad en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin Ciudad',
      ciudad: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando el teléfono en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin Telefono',
      telefono: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando el email en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin Email',
      email: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Permite crear cliente exitosamente dejando el WhatsApp en blanco', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '20-23444555-4', 
      razonSocial: 'Cliente Sin Wp',
      whatsapp: '' 
    });
    await clientePage.guardarCliente();

    await expect(clientePage.alertaExito).toBeVisible();
  });

  test('Muestra un mensaje de error si se intenta crear un cliente que ya existe', async () => {
    await clientePage.rellenarFormulario({ 
      cuit: '34-20268959-2', 
      razonSocial: 'Empresa SAZZZX' 
    });
    await clientePage.guardarCliente();

    await clientePage.errorClienteExiste.scrollIntoViewIfNeeded();
    await expect(clientePage.errorClienteExiste).toBeVisible();
  });
});