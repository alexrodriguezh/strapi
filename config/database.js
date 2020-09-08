module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '104.129.130.195'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'redancash'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', '89nCsiwpJEHCJCB'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
