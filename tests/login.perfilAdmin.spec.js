import { test, expect } from '@playwright/test';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';

test('Entrar con credenciales correctas', async ({ page }) => {
  const adminPage = new LoginPerfilAdminPage(page);

  await adminPage.abrirPagina();
  await adminPage.iniciarSesion('tae@testing.com', 'Tae@2026');

  await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');

  await expect(adminPage.tituloDashboard).toBeVisible();
  await expect(adminPage.textoBienvenida).toBeVisible();
  await expect(adminPage.btnCerrarSesion).toBeVisible();
});

test('Email incorrecto', async ({ page }) => {
  const adminPage = new LoginPerfilAdminPage(page);

  await adminPage.abrirPagina();
  await adminPage.iniciarSesion('pepita@testing.com', 'Tae@2026');

  await expect(adminPage.alertaError).toBeVisible();
});

test('clave incorrecta', async ({ page }) => {
  const adminPage = new LoginPerfilAdminPage(page);

  await adminPage.abrirPagina();
  await adminPage.iniciarSesion('tae@testing.com', 'pepita');

  await expect(adminPage.alertaError).toBeVisible();
});