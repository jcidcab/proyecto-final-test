import { expect } from '@playwright/test';

export class CobranzaPerfilAdminPage {
  constructor(page) {
    this.page = page;

    this.btnDashboard = page.locator("//a[contains(@class,'flex items-center p-2 rounded-md transition-colors duration-200 justify-center bg-indigo-600')]//*[name()='svg']");
    this.btnGestionClientes= page.getByText('Gestión de Clientes', { exact: true });
    this.btnCobranzas= page.getByText('Cobranzas', { exact: true });
    this.btnCrearCobranza= page.getByRole('button', { name: 'Crear Cobranza' });
    this.codigoCliente= page.getByRole('textbox', { name: 'Código...' });

    this.lupaCliente= page.getByRole('button', { name: 'Buscar' });
    this.ventanaClientes= page.getByText('Buscar Cliente', { exact: true })
    this.filasClientes = page.locator('tbody tr');
    this.fechaDeCobro= page.getByLabel('Fecha de Cobro');
    this.btnGuardarCobranza= page.getByRole('button', { name: 'Guardar Cobranza' });
    this.msjCreadoConExito = page.locator('.Toastify__toast--success');
    this.msjCobranzaRechazada = page.locator('text=Debe seleccionar un cliente');
    this.btnAñadirMedio= page.getByText('Añadir Medio', { exact: true });
    this.seleccionarMedio = page.getByRole('combobox', { name: 'Medio' });
    this.lupaMedioDePago= page.locator("//div[@class='col-span-12 md:col-span-3']//button[@aria-label='Buscar']//*[name()='svg']");
    this.pagoDisponible= page.getByRole('cell', { name: 'DISPONIBLE' });
    this.fechaEmisionCobranza = page.getByLabel('Fecha emisión *');
    this.seleccionarFecha = page.getByLabel('Fecha emisión *');
    this.msjRechazoTransferencia = page.getByText('Para transferencias debe seleccionar un banco.', { exact: true });
    this.msjcobranzaCreada= page.getByRole('region', { name: 'Notifications Alt+T' });
}


async navegarACobranza() {
    await this.btnDashboard.click();
    await this.btnGestionClientes.click();
    await this.btnCobranzas.click();
    await expect(this.btnCrearCobranza).toBeVisible();


  }

  async crearNuevaCobranza(){
   await this.btnCrearCobranza.click();

  }

  async encontrarClientes(){
   await this.lupaCliente.click()
  }

  
  async encontrarClientes() {
    await this.lupaCliente.waitFor({ state: 'visible'});
    await this.lupaCliente.click();
  }

  async seleccionarClienteAleatorio() {
    
    const celdasClientes = this.page.locator('td.px-3.py-4.text-sm.text-gray-500');
    
    await celdasClientes.first().waitFor({ state: 'visible'});
    const cantidad = await celdasClientes.count();

    if (cantidad > 0) {
      const indiceAleatorio = Math.floor(Math.random() * cantidad);
      await celdasClientes.nth(indiceAleatorio).click();
    } else {
      throw new Error('No se encontraron celdas de clientes para seleccionar.');
    }
}


async guardarCobranza(){
   await this.btnGuardarCobranza.click();
} 

async cobranzaExitosa(){
    await expect(this.msjCreadoConExito).toBeVisible();
}

async cobranzaRechazada(){
    await expect(this.msjCobranzaRechazada).toBeVisible();
}

async MedioDePago(){
    await this.btnAñadirMedio.click();
}

async MedioDePagoEfectivo() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Efectivo' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click(); 
  }

  
async MedioDePagoCheque() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Cheque' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click();

    const diaAleatorio = Math.floor(Math.random() * 28) + 1;
    const diaFormato = diaAleatorio < 10 ? `0\({diaAleatorio}` : `\){diaAleatorio}`;
    
    await this.fechaEmisionCobranza.click();
    await this.fechaEmisionCobranza.pressSequentially(`${diaFormato}092026`);
}

async MedioDePagoTransferencia() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Transferencia' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click();

}


async faltaAsignarBancos(){
    await expect(this.msjRechazoTransferencia).toBeVisible();
}

async MedioDePagoDocumento() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Documento' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click();

}


async MedioDePagoRetencion() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Retención' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click();

}

async MedioDePagoAjuste() {
    await this.btnAñadirMedio.click();
    await this.seleccionarMedio.selectOption({ label: 'Ajuste' });
    await this.lupaMedioDePago.click();
    await this.pagoDisponible.click();

}
async cobranzaGuardada(){
    await expect(this.msjcobranzaCreada).toBeVisible();
}
};