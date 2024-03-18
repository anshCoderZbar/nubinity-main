import { AllRoutes } from "routes";
import "bootstrap/dist/js/bootstrap.bundle";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import "./App.css";
import { ElasticApmConfig } from "elastic";
import { NotificationsProvider } from "reapop";
import { Notification } from "components/notification";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  ElasticApmConfig();

  return (
    <NotificationsProvider>
      <Notification />
      <AllRoutes />
    </NotificationsProvider>
  );
}

export default Sentry.withProfiler(App);
