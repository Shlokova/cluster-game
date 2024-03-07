import { StartButtonEntity } from './entities/start-button.entity';
import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../di/tokens';
import { RootContainerService } from '../../services/root-container.services';
import { DI_TOKENS_UI_SCENE } from './di/tokens';

export class UiScene {
  private readonly sceneContainer: Container;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly startButton: StartButtonEntity,
  ) {
    this.sceneContainer = this.createSceneContainer();
    this.sceneContainer.addChild(this.startButton.container);
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

injected(UiScene, DI_TOKENS.rootContainerService, DI_TOKENS_UI_SCENE.startButtonEntity);
