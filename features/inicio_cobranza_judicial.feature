# language: es
Característica: Inicio de demanda judicial y alertas de plazos legales

  Como ejecutivo bancario del área de cobranza
  Quiero que el sistema inicie la cobranza judicial a los 90 días de mora y controle los plazos de presentación de la demanda
  Para garantizar la correcta gestión legal de la deuda dentro de los términos establecidos

  Escenario: Asignación automática a cobranza judicial al cumplir 90 días de morosidad
    Dado que el cliente "Juan Pérez" tiene un crédito hipotecario
    Y el crédito registra "90" días de atraso en el pago de sus cuotas
    Cuando el sistema ejecuta el proceso diario de validación de morosidad
    Entonces el crédito debe cambiar su estado a "Cobranza Judicial"
    Y se debe solicitar la escritura del crédito para iniciar el proceso de demanda

  Escenario: Emisión de alerta preventiva sobre vencimiento del plazo legal de la demanda
    Dado que el ejecutivo tiene asignado un caso en estado "Cobranza Judicial"
    Y la escritura fue recibida hace "10" días hábiles para confeccionar la demanda
    Cuando transcurre el tiempo sin que se registre la presentación de la demanda en el tribunal
    Entonces el sistema debe emitir una alerta preventiva indicando que restan "5" días para el vencimiento del plazo legal
    Y notificar al encargado del caso el riesgo de incumplimiento del plazo