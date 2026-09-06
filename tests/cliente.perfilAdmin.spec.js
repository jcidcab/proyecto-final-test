import { test, expect } from '@playwright/test';
import { LoginPerfilAdminPage } from '../pages/Login.perfilAdminPage.js';
import { ClientePerfilAdminPage } from '../pages/Cliente.perfilAdminPage.js';

test('hacer click en gestion de clientes y luego en clientes', async ({ page }) => {
  const loginPage = new LoginPerfilAdminPage(page);
  const clientePage = new ClientePerfilAdminPage(page);

  await loginPage.abrirPagina();
  await loginPage.iniciarSesion('tae@testing.com', 'Tae@2026');
  await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/dashboard');

  await clientePage.navegarAClientes();

  await expect(page).toHaveURL('https://imcoarca.leonardojose.dev/clientes');
  await expect(clientePage.tituloListado).toBeVisible();
});