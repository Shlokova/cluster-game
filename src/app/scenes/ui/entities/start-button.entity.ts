import { injected } from 'brandi';
import { Sprite, Assets } from 'pixi.js';
import { GAME_EVENTS } from '../../../constants';
import { DI_TOKENS } from '../../../di/tokens';
import { ASSETS_NAME } from '../../../manifest';
import { RootContainerService } from '../../../services/root-container.services';

export class StartButtonEntity {
  public readonly container: Sprite;
  private readonly MARGIN = 10;
  private readonly HEIGHT = 80;
  private readonly pixelRatioButton = 1024 / 465;

  constructor(private readonly rootContainerService: RootContainerService) {
    this.container = this.createContainer();

    this.onResize();
    this.bindClickEvent();
    this.rootContainerService.onResize(this.onResize);
  }

  public destroy(): void {
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    const { x, y } = this.rootContainerService.getGameSafeAreaPosition();
    const { width, height } = this.rootContainerService.getGameSafeAreaSize();

    this.container.y = y + height - this.MARGIN;
    this.container.x = x + width / 2;
  };

  private bindClickEvent(): void {
    this.container.eventMode = 'static';
    this.container.cursor = 'pointer';

    this.container
      .on('pointerover', () => {
        this.container.scale.x *= 1.02;
        this.container.scale.y *= 1.02;
      })
      .on('pointerout', () => {
        this.container.scale.x /= 1.02;
        this.container.scale.y /= 1.02;
      })
      .on('pointerdown', () => {
        this.container.alpha = 0.8;
      })
      .on('pointertap', async () => {
        this.rootContainerService.emit(GAME_EVENTS.START);
      })
      .on('pointerup', () => {
        this.container.alpha = 1;
      })
      .on('pointerupoutside', () => {
        this.container.alpha = 1;
      });
  }

  private createContainer(): Sprite {
    const { x, y } = this.rootContainerService.getGameSafeAreaPosition();
    const { width, height } = this.rootContainerService.getGameSafeAreaSize();

    const sprite = new Sprite(Assets.get(ASSETS_NAME.ButtonStart));
    sprite.anchor.set(0);
    sprite.width = this.HEIGHT * this.pixelRatioButton;
    sprite.height = this.HEIGHT;
    sprite.y = y + height - this.MARGIN;
    sprite.x = x + width / 2;
    sprite.anchor.set(0.5, 1);

    return sprite;
  }
}

injected(StartButtonEntity, DI_TOKENS.rootContainerService);
