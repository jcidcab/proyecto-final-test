import { test, expect } from '@playwright/test';
import { LoginPerfilVendedorPage } from '../pages/Login.perfilVendedorPage.js';

test.describe('Módulo de Autenticación - Perfil Vendedor', () => {
  let vendedorPage;

  test.beforeEach(async ({ page }) => {
    vendedorPage = new LoginPerfilVendedorPage(page);
    await vendedorPage.abrirPagina();
  });

  test('Permite iniciar sesión exitosamente con credenciales de vendedor válidas', async ({ page }) => {
    await vendedorPage.iniciarSesion('vendedor@testing.com', 'Tae@2026');

    await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');
    await expect(vendedorPage.tituloDashboard).toBeVisible();
    await expect(vendedorPage.textoBienvenida).toBeVisible();
    await expect(vendedorPage.btnCerrarSesion).toBeVisible();
  });

  test('Muestra un error al intentar iniciar sesión con un correo electrónico incorrecto', async () => {
    await vendedorPage.iniciarSesion('correo.falso@testing.com', 'Tae@2026');

    await expect(vendedorPage.alertaError).toBeVisible();
  });

  test('Muestra un error al intentar iniciar sesión con una contraseña incorrecta', async () => {
    await vendedorPage.iniciarSesion('vendedor@testing.com', 'ClaveEquivocada123');

    await expect(vendedorPage.alertaError).toBeVisible();
  });
});