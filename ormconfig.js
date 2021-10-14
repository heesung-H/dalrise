module.exports = [
    {
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
      }
];