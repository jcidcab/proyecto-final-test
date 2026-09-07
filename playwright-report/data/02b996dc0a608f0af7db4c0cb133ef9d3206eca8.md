# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: cliente.perfilVendedor.spec.js >> Módulo de Clientes - Perfil Vendedor >> Muestra un mensaje de error si se intenta crear un cliente que ya existe
- Location: tests\cliente.perfilVendedor.spec.js:128:7

# Error details

```
TypeError: Cannot read properties of undefined (reading 'scrollIntoViewIfNeeded')
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - complementary [ref=e4]:
      - img "Logo" [ref=e6]
      - navigation [ref=e7]:
        - searchbox "Buscar en el menú" [ref=e9]
        - list [ref=e10]:
          - listitem [ref=e11]:
            - link "Dashboard" [ref=e12] [cursor=pointer]:
              - /url: /dashboard
          - listitem [ref=e16]:
            - generic [ref=e17]:
              - button "Gestión de Clientes" [ref=e18] [cursor=pointer]
              - list [ref=e24]:
                - listitem [ref=e25]:
                  - link "Prospectos" [ref=e26] [cursor=pointer]:
                    - /url: /leads
                - listitem [ref=e31]:
                  - link "Clientes" [ref=e32] [cursor=pointer]:
                    - /url: /clientes
                - listitem [ref=e37]:
                  - link "Facturas de Venta" [ref=e38] [cursor=pointer]:
                    - /url: /facturas-de-venta
                - listitem [ref=e43]:
                  - link "Notas de Crédito" [ref=e44] [cursor=pointer]:
                    - /url: /notas-credito
                - listitem [ref=e49]:
                  - link "Notas Financieras" [ref=e50] [cursor=pointer]:
                    - /url: /notas-financieras
                - listitem [ref=e55]:
                  - link "Pedidos de Venta" [ref=e56] [cursor=pointer]:
                    - /url: /pedidos-de-venta
                - listitem [ref=e61]:
                  - link "Remitos" [ref=e62] [cursor=pointer]:
                    - /url: /remitos
                - listitem [ref=e67]:
                  - link "Compradores" [ref=e68] [cursor=pointer]:
                    - /url: /compradores
          - listitem [ref=e73]:
            - button "Inventario" [ref=e75] [cursor=pointer]
          - listitem [ref=e81]:
            - link "Reportes" [ref=e82] [cursor=pointer]:
              - /url: /reportes
      - button "Contraer" [ref=e87]
    - generic [ref=e91]:
      - banner [ref=e92]:
        - button "Cerrar Sesión" [ref=e93]
      - main [ref=e94]:
        - generic [ref=e95]:
          - heading "Crear Nuevo Cliente" [level=1] [ref=e96]
          - generic [ref=e97]:
            - generic [ref=e98]:
              - heading "Datos básicos" [level=2] [ref=e99]
              - generic [ref=e100]:
                - generic [ref=e101]:
                  - generic [ref=e102]: CUIT *
                  - textbox "CUIT *" [ref=e104]:
                    - /placeholder: "Ej: 30-12345678-9"
                    - text: 34-20268959-2
                - generic [ref=e105]:
                  - generic [ref=e106]: Condición Tributaria
                  - combobox "Condición Tributaria" [ref=e108]:
                    - option "Selecciona una opción" [selected]
                    - option "IVA Responsable Inscripto"
                    - option "Monotributista"
                    - option "Exento"
                    - option "Consumidor Final"
                    - option "No Responsable"
                - generic [ref=e109]:
                  - generic [ref=e110]: Nombre o Razón Social *
                  - textbox "Nombre o Razón Social *" [ref=e112]:
                    - /placeholder: "Ej: Empresa S.A."
                    - text: Empresa SAZZZX
                - generic [ref=e113]:
                  - generic [ref=e114]: Retiene IVA
                  - combobox "Retiene IVA" [ref=e116]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e117]:
                  - generic [ref=e118]: Aplica Ley de Exportación TDF
                  - combobox "Aplica Ley de Exportación TDF" [ref=e120]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e121]:
                  - generic [ref=e122]: Serie de Factura
                  - combobox "Serie de Factura" [disabled] [ref=e124]:
                    - option "Selecciona una opción" [selected]
                - generic [ref=e125]:
                  - generic [ref=e126]: Fecha de alta
                  - textbox "Fecha de alta" [ref=e128]: 2026-09-06
                - generic [ref=e129]:
                  - generic [ref=e130]: Moneda
                  - generic [ref=e132]:
                    - textbox "Código..." [ref=e134]
                    - generic [ref=e135]:
                      - textbox "Nombre..." [ref=e136]
                      - button "Buscar" [ref=e137]
            - generic [ref=e140]:
              - heading "Datos de Contacto" [level=2] [ref=e141]
              - generic [ref=e142]:
                - generic [ref=e143]:
                  - generic [ref=e144]: Domicilio Fiscal
                  - textbox "Domicilio Fiscal" [ref=e146]:
                    - /placeholder: ""
                    - text: Dirección de Prueba 123
                - generic [ref=e147]:
                  - generic [ref=e148]: Código Postal
                  - textbox "Código Postal" [ref=e150]:
                    - /placeholder: ""
                    - text: "3000"
                - generic [ref=e151]:
                  - generic [ref=e152]: Localidad
                  - textbox "Localidad" [ref=e154]:
                    - /placeholder: ""
                    - text: Santiago
                - generic [ref=e155]:
                  - generic [ref=e156]: Provincia
                  - combobox "Provincia" [ref=e158]:
                    - option "Selecciona una opción" [selected]
                    - option "BOLIVIA"
                    - option "BUENOS AIRES"
                    - option "C.A.B.A."
                    - option "CATAMARCA"
                    - option "CHACO"
                    - option "CHUBUT"
                    - option "CORDOBA"
                    - option "CORRIENTES"
                    - option "ENTRE RIOS"
                    - option "FORMOSA"
                    - option "JUJUY"
                    - option "LA PAMPA"
                    - option "LA RIOJA"
                    - option "MENDOZA"
                    - option "MISIONES"
                    - option "NEUQUEN"
                    - option "PARAGUAY"
                    - option "RIO NEGRO"
                    - option "SALTA"
                    - option "SAN JUAN"
                    - option "SAN LUIS"
                    - option "SANTA CRUZ"
                    - option "SANTA FE"
                    - option "SGO. DEL ESTERO"
                    - option "T. DEL FUEGO"
                    - option "T. DEL FUEGO."
                    - option "TUCUMAN"
                    - option "URUGUAY"
                    - option "URUGUAY."
                - generic [ref=e159]:
                  - generic [ref=e160]: Teléfono
                  - textbox "Teléfono" [ref=e162]:
                    - /placeholder: "Ej: 11-4444-5555"
                - generic [ref=e163]:
                  - generic [ref=e164]: WhatsApp
                  - textbox "WhatsApp" [ref=e166]:
                    - /placeholder: "Ej: +5491112345678"
                    - text: "999999999"
                - generic [ref=e167]:
                  - generic [ref=e168]: Email
                  - textbox "Email" [ref=e170]:
                    - /placeholder: Uno o varios, separados por coma o espacio
                - generic [ref=e171]:
                  - generic [ref=e172]: Persona de Contacto
                  - textbox "Persona de Contacto" [ref=e174]:
                    - /placeholder: ""
                    - text: contacto@empresa.com
                - generic [ref=e175]:
                  - generic [ref=e176]: Rubro
                  - textbox "Rubro" [ref=e178]:
                    - /placeholder: ""
                    - text: "5491100000000"
                - generic [ref=e179]:
                  - generic [ref=e180]: Vendedor Asignado
                  - generic [ref=e182]:
                    - textbox "Código..." [ref=e184]
                    - generic [ref=e185]:
                      - textbox "Nombre..." [ref=e186]
                      - button "Buscar" [ref=e187]
                - generic [ref=e190]:
                  - generic [ref=e191]: Comprador
                  - generic [ref=e193]:
                    - textbox "Código..." [ref=e195]
                    - generic [ref=e196]:
                      - textbox "Nombre..." [ref=e197]
                      - button "Buscar" [ref=e198]
            - generic [ref=e201]:
              - heading "Datos de Entrega" [level=2] [ref=e202]
              - generic [ref=e203]:
                - generic [ref=e204]:
                  - generic [ref=e205]: Domicilios de Entrega
                  - button "Agregar Dirección" [ref=e208]
                - generic [ref=e211]:
                  - generic [ref=e212]: Zona
                  - combobox "Zona" [ref=e214]:
                    - option "Selecciona una opción" [selected]
                    - option "undefined – ZONA 1"
                - generic [ref=e215]:
                  - generic [ref=e216]: Transporte
                  - generic [ref=e218]:
                    - textbox "Código..." [ref=e220]
                    - generic [ref=e221]:
                      - textbox "Nombre..." [ref=e222]
                      - button "Buscar" [ref=e223]
            - generic [ref=e226]:
              - heading "Datos de Cobranza" [level=2] [ref=e227]
              - generic [ref=e228]:
                - generic [ref=e229]:
                  - generic [ref=e230]: Domicilio de Cobranza
                  - textbox "Domicilio de Cobranza" [ref=e232]:
                    - /placeholder: ""
                - generic [ref=e233]:
                  - generic [ref=e234]: Localidad de Cobranza
                  - textbox "Localidad de Cobranza" [ref=e236]:
                    - /placeholder: ""
                - generic [ref=e237]:
                  - generic [ref=e238]: CP de Cobranza
                  - textbox "CP de Cobranza" [ref=e240]:
                    - /placeholder: ""
                - generic [ref=e241]:
                  - generic [ref=e242]: Contacto de Cobranza
                  - textbox "Contacto de Cobranza" [ref=e244]:
                    - /placeholder: ""
                - generic [ref=e245]:
                  - generic [ref=e246]: Teléfono de Cobranza
                  - textbox "Teléfono de Cobranza" [ref=e248]:
                    - /placeholder: ""
                - generic [ref=e249]:
                  - generic [ref=e250]: Días de Cobranza
                  - textbox "Días de Cobranza" [ref=e252]:
                    - /placeholder: "Ej: Lunes, Miércoles"
                - generic [ref=e253]:
                  - generic [ref=e254]: Horario de Cobranza
                  - textbox "Horario de Cobranza" [ref=e256]:
                    - /placeholder: "Ej: 9 a 12 hs"
                - generic [ref=e257]:
                  - generic [ref=e258]: Observaciones de Cobranza
                  - textbox "Observaciones de Cobranza" [ref=e260]:
                    - /placeholder: ""
                - generic [ref=e261]:
                  - generic [ref=e262]: Plazo real
                  - textbox "Plazo real" [ref=e264]:
                    - /placeholder: ""
                - generic [ref=e265]:
                  - generic [ref=e266]: Contacto
                  - textbox "Contacto" [ref=e268]:
                    - /placeholder: Contacto de cobranza
                - generic [ref=e269]:
                  - generic [ref=e270]: Email
                  - textbox "Email" [ref=e272]:
                    - /placeholder: Uno o varios, separados por coma o espacio
                - generic [ref=e273]:
                  - generic [ref=e274]: Teléfono
                  - textbox "Teléfono" [ref=e276]:
                    - /placeholder: ""
                - generic [ref=e277]:
                  - generic [ref=e278]: URL de portal de cobros
                  - textbox "URL de portal de cobros" [ref=e280]:
                    - /placeholder: https://...
                - generic [ref=e281]:
                  - generic [ref=e282]: Usuario de portal de cobros
                  - textbox "Usuario de portal de cobros" [ref=e284]:
                    - /placeholder: ""
                - generic [ref=e285]:
                  - generic [ref=e286]: Clave de portal de cobros
                  - textbox "Clave de portal de cobros" [ref=e288]:
                    - /placeholder: ""
            - generic [ref=e289]:
              - heading "Otros Datos de Cobranza" [level=2] [ref=e290]
              - generic [ref=e291]:
                - generic [ref=e292]:
                  - generic [ref=e293]: Observaciones Generales
                  - textbox "Observaciones Generales" [ref=e295]:
                    - /placeholder: ""
                - generic [ref=e296]:
                  - generic [ref=e297]: Días de Pago
                  - textbox "Días de Pago" [ref=e299]:
                    - /placeholder: ""
                - generic [ref=e300]:
                  - generic [ref=e301]: Límite de Crédito
                  - textbox "Límite de Crédito" [ref=e303]:
                    - /placeholder: ""
                - generic [ref=e304]:
                  - generic [ref=e305]: Exención
                  - textbox "Exención" [ref=e307]:
                    - /placeholder: ""
                - generic [ref=e308]:
                  - generic [ref=e309]: Adherido a FCE
                  - combobox "Adherido a FCE" [ref=e311]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e312]:
                  - generic [ref=e313]: Cliente Congelado
                  - combobox "Cliente Congelado" [ref=e315]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e316]:
                  - generic [ref=e317]: Es Prospecto
                  - combobox "Es Prospecto" [ref=e319]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
                - generic [ref=e320]:
                  - generic [ref=e321]: Pedir Constancia de IVA
                  - combobox "Pedir Constancia de IVA" [ref=e323]:
                    - option "Selecciona una opción" [selected]
                    - option "No"
                    - option "Si"
            - generic [ref=e324]:
              - heading "Impuestos y Retenciones del Cliente" [level=2] [ref=e325]
              - generic [ref=e326]:
                - generic [ref=e327]:
                  - heading "Impuestos" [level=3] [ref=e328]
                  - generic [ref=e330]:
                    - generic [ref=e331]:
                      - checkbox "IVA-21 (21%)" [ref=e333]
                      - generic [ref=e334]: IVA-21 (21%)
                    - generic [ref=e336]:
                      - checkbox "IVA-10 (10.5%)" [ref=e338]
                      - generic [ref=e339]: IVA-10 (10.5%)
                    - generic [ref=e341]:
                      - checkbox "IVA-27 (27%)" [ref=e343]
                      - generic [ref=e344]: IVA-27 (27%)
                - generic [ref=e346]:
                  - heading "Percepciones" [level=3] [ref=e347]
                  - generic [ref=e349]:
                    - generic [ref=e350]:
                      - checkbox "Percepción de IIBB Misiones (3.31%)" [ref=e352]
                      - generic [ref=e353]: Percepción de IIBB Misiones (3.31%)
                    - generic [ref=e355]:
                      - checkbox "Percepción de IIBB Misiones - Convenio Multilateral (1.96%)" [ref=e357]
                      - generic [ref=e358]: Percepción de IIBB Misiones - Convenio Multilateral (1.96%)
            - generic [ref=e360]:
              - button "Volver" [ref=e361]
              - button "Guardar Cambios" [active] [ref=e362]
  - region "Notifications Alt+T"
```

# Test source

```ts
  35  |     await clientePage.guardarCliente();
  36  | 
  37  |     await expect(clientePage.alertaExito).toBeVisible();
  38  |   });
  39  | 
  40  |   test('Muestra error de formato al registrar un CUIT erróneo', async () => {
  41  |     await clientePage.rellenarFormulario({ 
  42  |       cuit: '11-1', 
  43  |       razonSocial: 'Cliente Cuit Inválido' 
  44  |     });
  45  |     await clientePage.guardarCliente();
  46  | 
  47  |     await clientePage.errorCuit.scrollIntoViewIfNeeded();
  48  |     await expect(clientePage.errorCuit).toBeVisible();
  49  |   });
  50  | 
  51  |   test('Muestra error de campo requerido al intentar guardar sin nombre o razón social', async () => {
  52  |     await clientePage.rellenarFormulario({ 
  53  |       cuit: '20-23444555-4', 
  54  |       razonSocial: '' 
  55  |     });
  56  |     await clientePage.guardarCliente();
  57  | 
  58  |     await clientePage.errorNombreRequerido.scrollIntoViewIfNeeded();
  59  |     await expect(clientePage.errorNombreRequerido).toBeVisible();
  60  |   });
  61  | 
  62  |   test('Permite crear cliente exitosamente dejando la dirección en blanco', async () => {
  63  |     await clientePage.rellenarFormulario({ 
  64  |       cuit: '20-23444555-4', 
  65  |       razonSocial: 'Cliente Sin Direccion',
  66  |       direccion: '' 
  67  |     });
  68  |     await clientePage.guardarCliente();
  69  | 
  70  |     await expect(clientePage.alertaExito).toBeVisible();
  71  |   });
  72  | 
  73  |   test('Permite crear cliente exitosamente dejando el código postal en blanco', async () => {
  74  |     await clientePage.rellenarFormulario({ 
  75  |       cuit: '20-23444555-4', 
  76  |       razonSocial: 'Cliente Sin CP',
  77  |       codigoPostal: '' 
  78  |     });
  79  |     await clientePage.guardarCliente();
  80  | 
  81  |     await expect(clientePage.alertaExito).toBeVisible();
  82  |   });
  83  | 
  84  |   test('Permite crear cliente exitosamente dejando la ciudad en blanco', async () => {
  85  |     await clientePage.rellenarFormulario({ 
  86  |       cuit: '20-23444555-4', 
  87  |       razonSocial: 'Cliente Sin Ciudad',
  88  |       ciudad: '' 
  89  |     });
  90  |     await clientePage.guardarCliente();
  91  | 
  92  |     await expect(clientePage.alertaExito).toBeVisible();
  93  |   });
  94  | 
  95  |   test('Permite crear cliente exitosamente dejando el teléfono en blanco', async () => {
  96  |     await clientePage.rellenarFormulario({ 
  97  |       cuit: '20-23444555-4', 
  98  |       razonSocial: 'Cliente Sin Telefono',
  99  |       telefono: '' 
  100 |     });
  101 |     await clientePage.guardarCliente();
  102 | 
  103 |     await expect(clientePage.alertaExito).toBeVisible();
  104 |   });
  105 | 
  106 |   test('Permite crear cliente exitosamente dejando el email en blanco', async () => {
  107 |     await clientePage.rellenarFormulario({ 
  108 |       cuit: '20-23444555-4', 
  109 |       razonSocial: 'Cliente Sin Email',
  110 |       email: '' 
  111 |     });
  112 |     await clientePage.guardarCliente();
  113 | 
  114 |     await expect(clientePage.alertaExito).toBeVisible();
  115 |   });
  116 | 
  117 |   test('Permite crear cliente exitosamente dejando el WhatsApp en blanco', async () => {
  118 |     await clientePage.rellenarFormulario({ 
  119 |       cuit: '20-23444555-4', 
  120 |       razonSocial: 'Cliente Sin Wp',
  121 |       whatsapp: '' 
  122 |     });
  123 |     await clientePage.guardarCliente();
  124 | 
  125 |     await expect(clientePage.alertaExito).toBeVisible();
  126 |   });
  127 | 
  128 |   test('Muestra un mensaje de error si se intenta crear un cliente que ya existe', async () => {
  129 |     await clientePage.rellenarFormulario({ 
  130 |       cuit: '34-20268959-2', 
  131 |       razonSocial: 'Empresa SAZZZX' 
  132 |     });
  133 |     await clientePage.guardarCliente();
  134 | 
> 135 |     await clientePage.errorClienteExiste.scrollIntoViewIfNeeded();
      |                                          ^ TypeError: Cannot read properties of undefined (reading 'scrollIntoViewIfNeeded')
  136 |     await expect(clientePage.errorClienteExiste).toBeVisible();
  137 |   });
  138 | });
```