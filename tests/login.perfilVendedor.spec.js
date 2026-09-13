import { test, expect } from '@playwright/test';
import { LoginPerfilVendedorPage } from '../pages/Login.perfilVendedorPage.js';

test('1- Entrar con credenciales correctas', async ({ page }) => {
  const vendedorPage = new LoginPerfilVendedorPage(page);

  await vendedorPage.abrirPagina();
  await vendedorPage.iniciarSesion('vendedor@testing.com', 'Tae@2026');

  await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');

  await expect(vendedorPage.tituloDashboard).toBeVisible();
  await expect(vendedorPage.textoBienvenida).toBeVisible();
  await expect(vendedorPage.btnCerrarSesion).toBeVisible();
});

test('2- Email incorrecto', async ({ page }) => {
  const vendedorPage = new LoginPerfilVendedorPage(page);

  await vendedorPage.abrirPagina();
  await vendedorPage.iniciarSesion('noexiste@testing.com', 'Tae@2026');

  await expect(vendedorPage.alertaError).toBeVisible();
});

test('3- clave incorrecta', async ({ page }) => {
  const vendedorPage = new LoginPerfilVendedorPage(page);

  await vendedorPage.abrirPagina();
  await vendedorPage.iniciarSesion('vendedor@testing.com', 'clave incorrecta');

  await expect(vendedorPage.alertaError).toBeVisible();
});