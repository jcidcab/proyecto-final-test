exports.LoginPerfilAdminPage = class LoginPerfilAdminPage {
  constructor(page) {
    this.page = page;
    
    this.email = page.locator('input[type="email"]');
    this.password = page.locator('input[type="password"]');
    this.btnIngresar = page.getByRole('button', { name: 'Ingresar' });
    
    this.tituloDashboard = page.getByRole('heading', { name: 'Dashboard' });
    this.textoBienvenida = page.locator('text=Bienvenido al sistema ERP.');
    this.btnCerrarSesion = page.getByRole('button', { name: 'Cerrar Sesión' });
    
    this.alertaError = page.locator('text=Las credenciales proporcionadas son incorrectas.');
  }

  async abrirPagina() {
    await this.page.goto('https://imcoarca.leonardojose.dev/');
  }

  async iniciarSesion(correo, clave) {
    await this.email.fill(correo);
    await this.password.fill(clave);
    await this.btnIngresar.click();
  }

 
  async cerrarSesion() {
    await this.btnCerrarSesion.click();
  }
};