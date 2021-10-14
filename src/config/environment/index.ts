type ConfigType = {
  env: string | undefined;
  port: number | string;
  mysql: any;
};

const all: ConfigType = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3001,
  mysql: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dalrise',
    password: 'dalrise',
    database: 'dalrise',
    entities: ['src/database/entities/**/*.entity.ts'],
    logging: true,
    synchronize: true, // 개발용
    name: 'dalrise',
  },
};

export default all;
