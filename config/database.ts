import path from 'path';

type EnvFunction = (key: string, defaultValue?: any) => any;

export default ({ env }: { env: EnvFunction }) => {
  // Helpers to cast values from environment
  const envInt = (key: string, defaultValue: number): number =>
    parseInt(env(key, defaultValue), 10);
  const envBool = (key: string, defaultValue: boolean): boolean =>
    env(key, defaultValue) === 'true';

  const client = env('DATABASE_CLIENT', 'sqlite');

  const connections = {
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'localhost'),
        port: envInt('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: envBool('DATABASE_SSL', false) && {
          rejectUnauthorized: envBool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
        },
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: 2, max: 10 },
    },
    sqlite: {
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/data.db')
        ),
      },
      useNullAsDefault: true,
    },
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: envInt('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
