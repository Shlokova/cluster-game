import { injected } from 'brandi';
import { v4 as uuidv4 } from 'uuid';

import {
  GroupsOptions as ElementsOptions,
  GROUPS,
  GROUPS_ID_ORDER,
  ELEMENT_GROUP_ID,
} from '../constants';

export class ClustersService {
  public field!: ElementsOptions[][];
  public minClusterSize: number;
  public horisontalElementsCount: number;
  public verticalElementsCount: number;
  public elementGroupCount: number;
  constructor() {
    // устанавливаем необходимые значения
    this.horisontalElementsCount = 6; // лучше выбирать значения до 10, так все элементы адекватного размера
    this.verticalElementsCount = 6; // лучше выбирать значения до 10, так все элементы адекватного размера
    this.elementGroupCount = 4; // доступно до 16 разных элементов
    this.minClusterSize = 3;

    this.createField();
  }

  public createField(): void {
    this.field = Array.from({ length: this.horisontalElementsCount }, () =>
      Array.from({ length: this.verticalElementsCount }, () =>
        this.getElementByOrder(Math.floor(Math.random() * this.elementGroupCount)),
      ),
    );
  }

  public clearField(): void {
    this.field = [];
  }

  public findClusters() {
    const clusters = [];
    const visited: Set<string> = new Set();

    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[0].length; j++) {
        if (!visited.has(`${i},${j}`)) {
          const value = this.field[i][j];
          const cluster: ElementsOptions[] = [];
          this.dfs(visited, value.groupId, i, j, cluster);
          if (cluster.length >= this.minClusterSize) clusters.push(cluster);
        }
      }
    }

    return clusters;
  }

  private isValidMove(
    visited: Set<string>,
    row: number,
    col: number,
    groupId: ELEMENT_GROUP_ID,
  ): boolean {
    return (
      row >= 0 &&
      row < this.field.length &&
      col >= 0 &&
      col < this.field[0].length &&
      this.field[row][col].groupId === groupId &&
      !visited.has(`${row},${col}`)
    );
  }

  private dfs(
    visited: Set<string>,
    groupId: ELEMENT_GROUP_ID,
    row: number,
    col: number,
    cluster: ElementsOptions[],
  ) {
    if (!this.isValidMove(visited, row, col, groupId)) return;
    visited.add(`${row},${col}`);
    cluster.push(this.field[row][col]);

    this.dfs(visited, groupId, row + 1, col, cluster);
    this.dfs(visited, groupId, row - 1, col, cluster);
    this.dfs(visited, groupId, row, col + 1, cluster);
    this.dfs(visited, groupId, row, col - 1, cluster);
  }

  private getElementByOrder(order: number): ElementsOptions {
    const id = GROUPS_ID_ORDER[order];
    if (!id) throw new Error('Нет такого количества элементов');

    const element = GROUPS[id];

    if (!element) throw new Error('Нет элемента с таким id');

    return { id: uuidv4(), ...element };
  }
}

injected(ClustersService);
