import { Factory, token } from 'brandi';
import { Game } from '../game';
import { BootScene } from '../scenes/boot/boot.scene';
import { SceneManager } from '../scenes/scene-manager';
import { ClustersService } from '../services/clusters.service';
import { ResizerService } from '../services/resizer.service';
import { RootContainerService } from '../services/root-container.services';
export const DI_TOKENS = {
  $root: token<HTMLElement>('$root'),
  game: token<Game>('game'),
  sceneManager: token<SceneManager>('scene-manager'),
  rootContainerService: token<RootContainerService>('rootContainerService'),
  clustersService: token<ClustersService>('ClustersService'),
  bootSceneFactory: token<Factory<BootScene>>('Factory<BootScene>'),

  resizerService: token<ResizerService>('resizerService'),
};
