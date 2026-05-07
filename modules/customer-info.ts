import { ZuploRequest, ZuploContext } from "@zuplo/runtime";

export default async function (request: ZuploRequest, context: ZuploContext) {
  const { customerId } = await request.json();
  context.log.info('Iniciando herramienta');
  context.log.info(`Cliente:${customerId}`);

  const profileResponse = await context.invokeRoute(`/api/v2/Customer/${customerId}`);
  if (!profileResponse.ok) {
    throw new Error(`Error al obtener información del cliente ${customerId}`);
  }
  const profile = await profileResponse.json();


  const usageResponse = await context.invokeRoute(`/api/v2/Customer/${customerId}/usage`);

  if (!usageResponse.ok) {
    throw new Error(`Error al obtener el consumo del cliente ${customerId}`);
  }
  const usage = await usageResponse.json();


  const score = Math.random();

let recommendation = '';
  if (score < 0.5) {
    context.log.info(`Recomendar nuevo plan`);
    recommendation = 'Un nuevo plan podría funcionar mejor';
  }else{
    context.log.info(`Recomendar compra de equipo`);
    recommendation = 'Existen promociones en equipos seleccionados este mes.'
  }

  return {
    profile: profile,
    usage: usage,
    recommendation: recommendation
  }


}