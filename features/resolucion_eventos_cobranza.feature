# language: es
Característica: Registro y actualización ante pagos, repactaciones o acogimiento a la Ley 20.720

  Como ejecutivo bancario
  Quiero actualizar el estado de la cobranza judicial según la acción ejecutada por el cliente
  Para detener o modificar las acciones legales en curso de manera oportuna

  Escenario: Suspensión de la cobranza por pago o repactación exitosa
    Dado que un cliente tiene un juicio activo en estado "Cobranza Judicial"
    Cuando el ejecutivo registra en el sistema "Pago Total" de la deuda morosa o una "Repactación Aprobada"
    Entonces el sistema debe actualizar el estado del caso a "Cobranza Detenida"
    Y notificar inmediatamente al equipo legal para suspender las acciones judiciales en curso

  Escenario: Notificación de acogimiento a la Ley 20.720 (Reorganización o Liquidação)
    Dado que el cliente con demanda en curso se acoge formalmente a la Ley 20.720 de Insolvencia y Reemprendimiento
    Cuando el ejecutivo ingresa la notificación legal de reorganización o liquidación en el sistema
    Entonces el sistema debe suspender las alertas de vencimiento de la demanda individual
    Y marcar la cuenta con el estado "Protección Financiera Ley 20.720" para proceder según las directrices del liquidador o veedor