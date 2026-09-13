import { expect } from '@playwright/test';

export class ClientePerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    
    this.btnDashboard= page.locator("//a[contains(@href,'/dashboard')]//*[name()='svg']")
    this.btnGestionClientes = page.locator('span').filter({ hasText: 'Gestión de clientes' }).first();
    this.btnClientes = page.getByText('Clientes', { exact: true });
    this.btnCerrarSesion= page.getByRole('button', { name: 'Cerrar Sesión' });
    this.btnCrearCliente = page.getByRole('button', { name: 'Crear cliente' });
    this.inputCuit= page.getByLabel('CUIT *', { exact: true });
    this.nombreEmpresa= page.getByLabel('Nombre o Razón Social *', { exact: true });
    this.lupaMoneda= page.locator("//div[8]//div[1]//div[1]//div[2]//button[1]//*[name()='svg']");
    this.btnGuardarCambios= page.getByText('Guardar Cambios', { exact: true });
    this.msjIngresoExitoso= page.getByText('Cliente guardado con éxito!', { exact: true });
    this.sinCuit= page.getByText('Este campo es requerido', { exact: true });
    this.cuitErroneo= page.getByText('El CUIT debe tener 11 dígitos y un dígito verificador válido (formato XX-XXXXXXXX-X)', { exact: true });
    this.sinNombre= page.getByText('Este campo es requerido', { exact: true });
    this.condicionTributaria= page.getByRole('combobox', { name: 'Condición Tributaria' });
    this.retieneIVA= page.getByRole('combobox', { name: 'Retiene IVA' });
    this.leyDeExportacion= page.getByRole('combobox', { name: 'Aplica Ley de Exportación TDF' });
   


  }
async navegarAClientes() {
  await this.btnDashboard.click();
  await this.btnGestionClientes.click();
  await this.btnClientes.click();
  
  await expect(this.btnCrearCliente).toBeVisible();
}
 

async cerrarSesion(){
  await this.btnCerrarSesion.click();
}

async registrarCliente(){
  await this.btnCrearCliente.waitFor({ state: 'visible' });
  await this.btnCrearCliente.click();
}

async ingresarCuit(cuit) {
  await this.inputCuit.fill(cuit);
}

async ingresarNombre(nombre) {
  await this.nombreEmpresa.fill(nombre);
}

async guardarCambios(){
  await this.btnGuardarCambios.click();
}

async mensajeClienteCreado() {
  await expect(this.msjIngresoExitoso).toBeVisible();
}

async msjCuitVacio() {
  await expect(this.sinCuit).toBeVisible();
}

async msjCuitErroneo(){
  await expect(this.cuitErroneo).toBeVisible();
}

async msjSinNombre(){
  await expect(this.sinNombre).toBeVisible();
}

async selectCndTributaria(){
  await this.condicionTributaria.selectOption({ label: 'Selecciona una opción' });
}

async retencionIVA(){
await this.retieneIVA.selectOption({ label: 'Selecciona una opción' });
}

async aplicaLeyTDF(opcion) {
    await this.leyDeExportacion.click();
    await this.page.locator(`li, div`).filter({ hasText: new RegExp(`^\({opcion}\)`) }).click();
  }

}