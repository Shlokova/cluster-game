import { DependencyModule } from 'brandi';
import { StartButtonEntity } from '../entities/start-button.entity';
import { UiScene } from '../ui.scene';
import { DI_TOKENS_UI_SCENE } from './tokens';

export function createDiModuleUiScene(): DependencyModule {
  const dm = new DependencyModule();
  dm.bind(DI_TOKENS_UI_SCENE.uiSceneFactory).toFactory(UiScene);
  dm.bind(DI_TOKENS_UI_SCENE.startButtonEntity).toInstance(StartButtonEntity).inTransientScope();

  return dm;
}
