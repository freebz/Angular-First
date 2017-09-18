// 예제 4-16 커스텀 파이프: HonorPipe

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'honor' })
export class HonorPipe implements PipeTransform {
    transform(value: string): string {
	return `${value}님`;
    }
}
