import path from 'path';

type EnvFunction = (key: string, defaultValue?: any) => any;

export default ({ env }: { env: EnvFunction }) => {
  // Helpers to cast values from environment
  const envInt = (key: string, defaultValue: number): number =>
    parseInt(env(key, defaultValue), 10);
  const envBool = (key: string, defaultValue: boolean): boolean =>
    env(key, defaultValue) === 'true';

  return {
    connection: {
      client: 'postgres',
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
      acquireConnectionTimeout: envInt('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
