module.exports = {
  apps: [
    {
      name: 'api',
      script: 'index.js',
      cwd: 'api/dist',
      env: {
        NODE_ENV: 'production',
        BOT_TOKEN: '',
        GAME_LOG_PREFIX: '',
        GUILD_ID: '',
        VANILLA_LOG_CHANNEL_ID: '',
        DB_NAME: 'scythe',
        DB_USERNAME: 'postgres',
        DB_PASSWORD: 'postgres',
        DB_HOST: 'localhost',
        DB_PORT: 5432,
        REDIS_HOST: 'localhost',
        REDIS_PASSWORD: 'redis',
        REDIS_PORT: 6379,
        SESSION_SECRET: 'banrusinno',
        DISCORD_CLIENT_ID: '',
        DISCORD_CLIENT_SECRET: '',
        API_URL: 'http://localhost:4000',
        API_SERVER_PORT: 4000,
        SITE_URL: 'http://localhost:3000',
        GRAPHQL_SERVER_BASIC_AUTH: 'bancrimmil',
      },
    },
    {
      name: 'site',
      script: 'yarn --cwd site next start',
    },
    {
      name: 'bot',
      script: 'dist/index.js',
      cwd: 'bot/',
      env: {
        NODE_ENV: 'production',
        BOT_TOKEN: '',
        GAME_LOG_PREFIX: '',
        GUILD_ID: '',
        VANILLA_LOG_CHANNEL_ID: '',
        GRAPHQL_API_URL: 'http://localhost:4000/graphql',
        GRAPHQL_SERVER_BASIC_AUTH: 'bancrimmil',
      },
    },
  ],
};
