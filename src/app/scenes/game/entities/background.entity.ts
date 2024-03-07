import { injected } from 'brandi';
import { Assets, Container, Sprite } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { ASSETS_NAME } from '../../../manifest';
import { RootContainerService } from '../../../services/root-container.services';

export class BackgroundEntity {
  public readonly container: Container;
  private image: Sprite;
  private readonly imagePixelRatio = 1812 / 1044;

  constructor(private readonly rootContainerService: RootContainerService) {
    this.container = this.createContainer();
    this.image = this.createBackgroundImage();

    this.onResize();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.resizeBackground();
  };

  private createContainer(): Container {
    const container = new Container();
    container.zIndex = 0;

    return container;
  }

  private resizeBackground(): void {
    const { height, width } = this.rootContainerService.getGameSize();

    this.image.width = height * this.imagePixelRatio;
    this.image.height = height;
    this.image.x = width / 2;
    this.image.y = height / 2;
  }

  private createBackgroundImage(): Sprite {
    const sprite = Sprite.from(Assets.get(ASSETS_NAME.Background));

    sprite.anchor.set(0.5);

    this.container.addChild(sprite);

    return sprite;
  }
}

injected(BackgroundEntity, DI_TOKENS.rootContainerService);
