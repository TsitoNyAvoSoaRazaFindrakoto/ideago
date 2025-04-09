import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fae5016f5d6e58a176358c00057c1ef1@o4509119091703808.ingest.de.sentry.io/4509119172378704",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
  tracesSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  debug: false,
});
