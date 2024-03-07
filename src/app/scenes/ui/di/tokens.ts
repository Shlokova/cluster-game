import { UiScene } from '../ui.scene';
import { Factory, token } from 'brandi';
import { StartButtonEntity } from '../entities/start-button.entity';

export const DI_TOKENS_UI_SCENE = {
  uiSceneFactory: token<Factory<UiScene>>('Factory<UiScene>'),
  startButtonEntity: token<StartButtonEntity>('StartButtonEntity'),
};
