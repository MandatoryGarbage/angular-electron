import { ItemTypeEnum } from './item-type.enum';
import { ScoreboardItem } from './scoreboard-item';
import { ScoreboardControl } from './scoreboard-control';

export class ScoreboardControlGroup extends ScoreboardItem {
  name: string = '';
  controls: ScoreboardControl[] = [];

  constructor(name: string) {
    super(ItemTypeEnum.GROUP);
    this.name = name;
    this.controls = [];
  }
}
