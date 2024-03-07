import { Factory, token } from 'brandi';
import { GameScene } from '../game.scene';
import { ElementEntity, ElementEntityParams } from '../entities/element.entity';
import { BackgroundEntity } from '../entities/background.entity';
import { FieldEntity } from '../entities/field.entity';

export const DI_TOKENS_GAME_SCENE = {
  gameSceneFactory: token<Factory<GameScene>>('Factory<GameScene>'),
  elementFactory:
    token<Factory<ElementEntity, [params: ElementEntityParams]>>('Factory<ElementEntity>'),
  backgroundEntity: token<BackgroundEntity>('BackgroundEntity'),
  fieldEntity: token<FieldEntity>('FieldEntity'),
};
