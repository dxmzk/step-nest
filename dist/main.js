"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const compress_1 = require("@fastify/compress");
const rate_limit_1 = require("@fastify/rate-limit");
const platform_ws_1 = require("@nestjs/platform-ws");
const app_module_1 = require("./app.module");
const constants_1 = require("./config/constants");
const log_interceptor_1 = require("./modules/interceptor/log_interceptor");
async function bootstrap() {
    const fastAda = new platform_fastify_1.FastifyAdapter();
    fastAda.register(rate_limit_1.default, { global: false, max: 30, timeWindow: 60000 });
    const app = await core_1.NestFactory.create(app_module_1.AppModule, fastAda);
    app.register(compress_1.default, { encodings: ["gzip", "deflate"] });
    app.useGlobalInterceptors(new log_interceptor_1.LogInterceptor());
    app.useWebSocketAdapter(new platform_ws_1.WsAdapter(app));
    await app.listen(constants_1.default.port);
}
bootstrap();
//# sourceMappingURL=main.js.map