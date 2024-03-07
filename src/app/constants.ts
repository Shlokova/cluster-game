export type ElementId = string; // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export type GroupsOptions = {
  id: ElementId;
  groupId: ELEMENT_GROUP_ID;
  color: number;
};

export enum ELEMENT_GROUP_ID {
  First = 'first',
  Second = 'second',
  Third = 'third',
  Fourth = 'fourth',
  Fifth = 'fifth',
  Sixth = 'sixth',
  Seventh = 'seventh',
  Eighth = 'eighth',
  Ninth = 'ninth',
  Tenth = 'tenth',
  Eleventh = 'eleventh',
  Twelfth = 'twelfth',
  Thirteenth = 'thirteenth',
  Fourteenth = 'fourteenth',
  Fifteenth = 'fifteenth',
  Sixteenth = 'sixteenth',
  // Seventeenth = 'seventeenth',
  // Eighteenth = 'eighteenth',
  // Nineteenth = 'nineteenth',
  // Twentieth = 'twentieth',
}

export const GROUPS: Record<ELEMENT_GROUP_ID, Omit<GroupsOptions, 'id'>> = {
  [ELEMENT_GROUP_ID.First]: {
    groupId: ELEMENT_GROUP_ID.First,
    color: 0xe44481,
  },
  [ELEMENT_GROUP_ID.Second]: {
    groupId: ELEMENT_GROUP_ID.Second,
    color: 0xeb723c,
  },
  [ELEMENT_GROUP_ID.Third]: {
    groupId: ELEMENT_GROUP_ID.Third,
    color: 0xe74a89,
  },
  [ELEMENT_GROUP_ID.Fourth]: {
    groupId: ELEMENT_GROUP_ID.Fourth,
    color: 0xfc5186,
  },
  [ELEMENT_GROUP_ID.Fifth]: {
    groupId: ELEMENT_GROUP_ID.Fifth,
    color: 0xfc5186,
  },
  [ELEMENT_GROUP_ID.Sixth]: {
    groupId: ELEMENT_GROUP_ID.Sixth,
    color: 0xe4f361,
  },
  [ELEMENT_GROUP_ID.Seventh]: {
    groupId: ELEMENT_GROUP_ID.Seventh,
    color: 0xe64f0a,
  },
  [ELEMENT_GROUP_ID.Eighth]: {
    groupId: ELEMENT_GROUP_ID.Eighth,
    color: 0xfc45cd,
  },
  [ELEMENT_GROUP_ID.Ninth]: {
    groupId: ELEMENT_GROUP_ID.Ninth,
    color: 0x1e7049,
  },
  [ELEMENT_GROUP_ID.Tenth]: {
    groupId: ELEMENT_GROUP_ID.Tenth,
    color: 0xfe5092,
  },
  [ELEMENT_GROUP_ID.Eleventh]: {
    groupId: ELEMENT_GROUP_ID.Eleventh,
    color: 0x6e0d2c,
  },
  [ELEMENT_GROUP_ID.Twelfth]: {
    groupId: ELEMENT_GROUP_ID.Twelfth,
    color: 0x313fa4,
  },
  [ELEMENT_GROUP_ID.Thirteenth]: {
    groupId: ELEMENT_GROUP_ID.Thirteenth,
    color: 0xef6741,
  },
  [ELEMENT_GROUP_ID.Fourteenth]: {
    groupId: ELEMENT_GROUP_ID.Fourteenth,
    color: 0xff899d,
  },
  [ELEMENT_GROUP_ID.Fifteenth]: {
    groupId: ELEMENT_GROUP_ID.Fifteenth,
    color: 0x0fcdf7,
  },
  [ELEMENT_GROUP_ID.Sixteenth]: {
    groupId: ELEMENT_GROUP_ID.Sixteenth,
    color: 0xfc78e4,
  },
};

export const GROUPS_ID_ORDER = [
  ELEMENT_GROUP_ID.Fourteenth,
  ELEMENT_GROUP_ID.Twelfth,
  ELEMENT_GROUP_ID.Ninth,
  ELEMENT_GROUP_ID.Fifteenth,
  ELEMENT_GROUP_ID.Eleventh,
  ELEMENT_GROUP_ID.First,
  ELEMENT_GROUP_ID.Third,
  ELEMENT_GROUP_ID.Fourth,
  ELEMENT_GROUP_ID.Fifth,
  ELEMENT_GROUP_ID.Thirteenth,
  ELEMENT_GROUP_ID.Sixth,
  ELEMENT_GROUP_ID.Second,
  ELEMENT_GROUP_ID.Sixteenth,
  ELEMENT_GROUP_ID.Tenth,
  ELEMENT_GROUP_ID.Eighth,
  ELEMENT_GROUP_ID.Seventh,
];

export const GAME_EVENTS = {
  START: 'START',
};
