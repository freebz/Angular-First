// 예제 5-12 mouse-pos-logger/src/app/logger-service.ts [ch5-9]

import { LogLevel } from './log-level.enum';

export abstract class LoggerService {
    logLevel: LogLevel;

    constructor(logLevel: LogLevel) {
	this.logLevel = logLevel;
    }

    debug(msg: string) { this.log(LogLevel.DEBUG, msg); }
    info(msg: string) { this.log(LogLevel.INFO, msg); }
    warn(msg: string) { this.log(LogLevel.WARN, msg); }
    error(msg: string) { this.log(LogLevel.ERROR, msg); }
    abstract log(legLevel: LogLevel, msg: string);

    protected isProperLogLevel(logLevel: LogLevel): boolean {
	if (this.logLevel === LogLevel.DEBUG) return true;
	return logLevel >= this.logLevel;
    }
}
