import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
export default class AppExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
}
