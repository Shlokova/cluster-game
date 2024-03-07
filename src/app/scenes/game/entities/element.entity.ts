import { injected } from 'brandi';
import { Container, Sprite, Assets, BlurFilter, Texture } from 'pixi.js';
import { GroupsOptions } from 'src/app/constants';
import { DI_TOKENS } from '../../../di/tokens';
import { RootContainerService } from '../../../services/root-container.services';
import { ClustersService } from '../../../services/clusters.service';
import { Tween } from 'tweedle.js';

export type ElementEntityParams = GroupsOptions & {
  position: {
    row: number;
    column: number;
  };
};

export class ElementEntity {
  public readonly container: Container;
  private readonly sprite!: Sprite;
  private readonly imagePixelRatio = 401 / 622;
  private readonly margin = 7;
  private highlightBackground!: Sprite;
  private hightlightAnimation: Tween<Sprite> | null = null;
  private spriteAnimation: Tween<Sprite> | null = null;
  private width = 0;
  private height = 0;
  private x = 0;
  private y = 0;
  private isHighLight = false;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly clustersService: ClustersService,
  ) {
    this.container = new Container();
  }

  public __init(params: ElementEntityParams): void {
    //@ts-ignore
    this.sprite = this.createSprite(params);
    this.highlightBackground = this.createHightlight(this.x, this.y, params.color);

    this.container.addChild(this.sprite);
  }

  public destroy(): void {
    this.container.destroy();
  }

  public highlight(): void {
    this.isHighLight = true;

    this.spriteAnimation = new Tween(this.sprite)
      .to({ width: this.width * 1.2, height: this.height * 1.2 }, 600)
      .yoyo(true)
      .repeat(Infinity)
      .start();

    this.hightlightAnimation = this.createHightlightAnimation(this.width, this.height).start();
  }

  public resize(): void {
    const { width, height } = this.getSpriteSize();

    this.hightlightAnimation?.stop();
    this.spriteAnimation?.stop();

    this.x = (this.x / (this.width + this.margin)) * (width + this.margin);
    this.y = (this.y / (this.height + this.margin)) * (height + this.margin);

    this.width = width;
    this.height = height;

    this.sprite.x = this.x;
    this.sprite.y = this.y;

    this.highlightBackground.x = this.x;
    this.highlightBackground.y = this.y;

    this.sprite.width = width;
    this.sprite.height = height;

    if (this.isHighLight) {
      this.highlight();
    }
  }

  private getSpriteSize(): { width: number; height: number } {
    const { width, height } = this.rootContainerService.getGameSafeAreaSize();
    const spriteHeight = Math.min(
      (height - 100) / this.clustersService.verticalElementsCount - this.margin,
      ((width - 20) / this.clustersService.horisontalElementsCount - this.margin) /
        this.imagePixelRatio,
    );
    const spriteWidth = spriteHeight * this.imagePixelRatio;

    return {
      height: spriteHeight,
      width: spriteWidth,
    };
  }

  private createHightlight(x: number, y: number, color: number): Sprite {
    const highlightBackground = new Sprite(Texture.WHITE);
    highlightBackground.x = x;
    highlightBackground.y = y;
    highlightBackground.anchor.set(0.5);
    highlightBackground.filters = [new BlurFilter(22, 4)];
    highlightBackground.alpha = 0;
    highlightBackground.tint = color;

    this.container.addChildAt(highlightBackground, 0);

    return highlightBackground;
  }

  private createHightlightAnimation(width: number, height: number): Tween<Sprite> {
    return new Tween(this.highlightBackground)
      .from({ width: width * 0.5, height: height * 0.5 })
      .to({ width: width * 0.8, height: height * 0.8 }, 600)
      .onStart(() => (this.highlightBackground.alpha = 0.8))
      .onStop(() => (this.highlightBackground.alpha = 0))
      .yoyo(true)
      .repeat(Infinity);
  }

  private createSprite(params: ElementEntityParams): Sprite {
    const { width, height } = this.getSpriteSize();
    this.width = width;
    this.height = height;
    this.x = (width + this.margin) * params.position.row + width / 2;
    this.y = (height + this.margin) * params.position.column + height / 2;

    const sprite = new Sprite(Assets.get(params.groupId));
    sprite.width = width;
    sprite.height = height;
    sprite.anchor.set(0.5);
    sprite.x = this.x;
    sprite.y = this.y;

    return sprite;
  }
}

injected(ElementEntity, DI_TOKENS.rootContainerService, DI_TOKENS.clustersService);
