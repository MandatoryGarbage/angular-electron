import { ControlTypeEnum } from './control-type.enum';
import { ItemTypeEnum } from './item-type.enum';
import { Control } from './control';
import { ScoreboardItem } from './scoreboard-item';
export class ScoreboardControl extends ScoreboardItem {
  name: string = '';
  type: number = 0;
  control: Control = new Control(ControlTypeEnum.TEXT);

  constructor(name: string, type: number, control: Control) {
    super(ItemTypeEnum.CONTROL);
    this.name = name;
    this.type = type;
    this.control = control;
  }
}
