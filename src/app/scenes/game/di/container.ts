import { FieldEntity } from './../entities/field.entity';
import { DependencyModule } from 'brandi';
import { BackgroundEntity } from '../entities/background.entity';
import { ElementEntity } from '../entities/element.entity';
import { GameScene } from '../game.scene';
import { DI_TOKENS_GAME_SCENE } from './tokens';

export function createDiModuleGameScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_GAME_SCENE.gameSceneFactory).toFactory(GameScene);
  dm.bind(DI_TOKENS_GAME_SCENE.elementFactory).toFactory(ElementEntity, (instance, params) =>
    instance.__init(params),
  );
  dm.bind(DI_TOKENS_GAME_SCENE.backgroundEntity).toInstance(BackgroundEntity).inTransientScope();
  dm.bind(DI_TOKENS_GAME_SCENE.fieldEntity).toInstance(FieldEntity).inTransientScope();

  return dm;
}
