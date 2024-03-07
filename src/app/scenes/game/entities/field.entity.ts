import { GAME_EVENTS } from './../../../constants';
import { injected } from 'brandi';
import { Container } from 'pixi.js';
import { DI_TOKENS } from '../../../di/tokens';
import { ElementId } from '../../../constants';
import { RootContainerService } from '../../../services/root-container.services';
import { DI_TOKENS_GAME_SCENE } from '../di/tokens';
import { ClustersService } from '../../../services/clusters.service';
import { ElementEntity, ElementEntityParams } from './element.entity';

export class FieldEntity {
  public readonly container: Container;
  private readonly elements: Map<ElementId, ElementEntity> = new Map();
  private timerId: NodeJS.Timeout | null = null;

  constructor(
    private readonly rootContainerService: RootContainerService,
    private readonly clustersService: ClustersService,
    private readonly createElement: (params: ElementEntityParams) => ElementEntity,
  ) {
    this.container = new Container();

    this.rootContainerService.onResize(this.onResize);
    this.rootContainerService.on(GAME_EVENTS.START, this.createField);
  }

  public destroy(): void {
    this.container.destroy();
    this.rootContainerService.removeOnResize(this.onResize);
  }

  private readonly onResize = (): void => {
    this.elements.forEach((element) => element.resize());
    this.setPosition();
  };

  private createField = (): void => {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }

    this.container.removeChildren();
    this.clustersService.clearField();

    this.clustersService.createField();
    this.fillField();
    this.setPosition();

    this.timerId = setTimeout(() => {
      this.viewClusters();
      this.timerId = null;
    }, 1000);
  };

  private setPosition(): void {
    const { width } = this.rootContainerService.getGameSize();
    const { y } = this.rootContainerService.getGameSafeAreaPosition();

    this.container.x = width / 2 - (this.container.width - 7) / 2;
    this.container.y = y + 10;
  }

  private viewClusters(): void {
    const clusters = this.clustersService.findClusters();

    clusters.forEach((cluster) => {
      cluster.forEach((el) => {
        const element = this.elements.get(el.id);

        element && element.highlight();
      });
    });
  }

  private fillField(): void {
    this.clustersService.field.forEach((row, i) => {
      row.forEach((elementParams, j) => {
        const element = this.createElement({ ...elementParams, position: { row: i, column: j } });
        this.elements.set(elementParams.id, element);
        this.container.addChild(element.container);
      });
    });
  }
}

injected(
  FieldEntity,
  DI_TOKENS.rootContainerService,
  DI_TOKENS.clustersService,
  DI_TOKENS_GAME_SCENE.elementFactory,
);
