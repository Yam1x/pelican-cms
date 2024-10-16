export default ({ env }) => {
  console.log('Strapi URL:', env('PUBLIC_URL'));

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    app: {
      keys: env.array('APP_KEYS'),
    },
    emitErrors: false,
    url: env('PUBLIC_URL', 'http://localhost:1337'),
    proxy: env.bool('IS_PROXIED', true),
    admin: {
      url: '/cms/admin',
      serveAdminPanel: true,
      path: '/cms',
    },
    cron: {
      enabled: env.bool('CRON_ENABLED', false),
    },
    transfer: {
      remote: {
        enabled: false,
      },
    },
    logger: {
      updates: {
        enabled: false,
      },
      startup: {
        enabled: false,
      },
    },
  };
};
