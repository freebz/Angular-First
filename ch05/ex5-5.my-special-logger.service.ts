// 예제 5-5 mouse-pos-logger/src/app/my-special-logger.service.ts [ch5-2]

// 임포트 생략
import * as format from 'date-fns/format';

@Injectable()
export class MySpecialLoggerService {
    // 속성 및 생성자 생략

    debug(msg: string) { this.log(LogLevel.DEBUG, msg); }
    info(msg: string) { this.log(LogLevel.INFO, msg); }
    warn(msg: string) { this.log(LogLevel.WARN, msg); }
    error(msg: string) { this.log(LogLevel.ERROR, msg); }

    log(logLevel: LogLevel, msg: string) {
	const logMsg = this.getFormattedLogMsg(logLevel, msg);
	if (this.isProperLogLevel(logLevel)) {
	    console.log(logMsg);
	    this.keepLogHistory(logMsg);
	}
    }

    private keepLogHistory(log: string) {
	if (this.logs.length === this.MAX_HISTORY_CNT) {
	    this.logs.shift();
	}
	this.logs.push(log);
    }

    private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
	const curTimestamp = format(new Date(), this.TIME_FORMATTER);
	return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
    }

    private isProperLogLevel(logLevel: LogLevel): boolean {
	if (this.logLevel === LogLevel.DEBUG) return true;
	return logLevel >= this.logLevel;
    }
}
