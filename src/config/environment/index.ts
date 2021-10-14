type ConfigType = {
  env: string | undefined;
  ip: string;
  port: number;
  seedDB: boolean;
  mysql: any;
};

const all: ConfigType = {
  env: process.env.NODE_ENV,
  ip: process.env.IP || '0.0.0.0',
  port: 3001,
  seedDB: true,
  mysql: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'dalrise',
    password: 'dalrise',
    database: 'dalrise',
    entities: ['src/database/entities/**/*.entity.ts'],
    factories: ['src/database/factories/*.factory{.ts,.js}'],
    seeds: ['src/database/seeds/*.seed{.ts,.js}'],
    logging: true,
    synchronize: true, // 개발용
    name: 'dalrise',
  },
};

export default all;
