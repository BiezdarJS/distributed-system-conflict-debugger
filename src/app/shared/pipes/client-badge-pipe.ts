import { Pipe, PipeTransform } from '@angular/core';
import { ClientTypeLabels } from '@shared/consts/client-type-label.const';
import { ClientTypeEnum } from '@shared/enums/client-type.enum';

@Pipe({
  name: 'clientBadge',
})
export class ClientBadgePipe implements PipeTransform {
  readonly clientTypeLabels = ClientTypeLabels;

  transform(client: ClientTypeEnum): string {
    return this.clientTypeLabels[client]?.split(' ').at(-1) ?? '';
  }
}
