"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysqlConfig = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'admin123',
    database: 'test3',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
    retryDelay: 3000,
    retryAttempts: 10,
    autoLoadEntities: true,
    keepConnectionAlive: false,
};
exports.default = mysqlConfig;
//# sourceMappingURL=mysql.js.map