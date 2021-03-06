// 예제 5-3 mouse-pos-logger/src/app/my-special-logger.service.ts [ch5-1]

import { Injectable } from '@angular/core';

@Injectable()
export class MySpecialLoggerService {
    logLevel: LogLevel;
    logs: string[] = [];
    private readonly MAX_HISTORY_CNT: number = 100;
    private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";

    constructor(logLevel: LogLevel) {
	this.logLevel = logLevel;
    }
}
