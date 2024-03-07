import { FieldEntity } from './entities/field.entity';
import { ClustersService } from '../../services/clusters.service';
import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../di/tokens';
import { RootContainerService } from '../../services/root-container.services';
import { DI_TOKENS_GAME_SCENE } from './di/tokens';
import { ElementEntity, ElementEntityParams } from './entities/element.entity';
import { ElementId } from 'src/app/constants';
import { BackgroundEntity } from './entities/background.entity';

export class GameScene {
  private readonly sceneContainer: Container;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly background: BackgroundEntity,
    private readonly field: FieldEntity,
  ) {
    this.sceneContainer = this.createSceneContainer();
    this.sceneContainer.addChild(this.background.container, this.field.container);
  }

  public async start(): Promise<void> {}

  public destroy(): void {
    this.sceneContainer.destroy();
  }

  private createSceneContainer(): Container {
    const container = new Container();

    this.rootContainerService.addChild(container);
    return container;
  }
}

injected(
  GameScene,
  DI_TOKENS.rootContainerService,
  DI_TOKENS_GAME_SCENE.backgroundEntity,
  DI_TOKENS_GAME_SCENE.fieldEntity,
);
