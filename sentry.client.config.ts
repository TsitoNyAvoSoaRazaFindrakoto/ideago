import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fae5016f5d6e58a176358c00057c1ef1@o4509119091703808.ingest.de.sentry.io/4509119172378704",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
