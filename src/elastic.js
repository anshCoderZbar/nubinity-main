import { init as initApm } from "@elastic/apm-rum";

export const ElasticApmConfig = () => {
  initApm({
    serviceName: process.env.REACT_APP_ELASTIC_SERVICE_NAME,
    serverUrl: process.env.REACT_APP_ELASTIC_SERVICE_URL,
    serviceVersion: process.env.REACT_APP_ELASTIC_SERVICE_VERSION,
    environment: process.env.REACT_APP_ELASTIC_ENVIRONMENT,
  });
};
