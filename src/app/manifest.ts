import { AssetsManifest } from 'pixi.js';
import first from '../assets/elements/first.png';
import second from '../assets/elements/second.png';
import third from '../assets/elements/third.png';
import fourth from '../assets/elements/fourth.png';
import fifth from '../assets/elements/fifth.png';
import sixth from '../assets/elements/sixth.png';
import seventh from '../assets/elements/seventh.png';
import eighth from '../assets/elements/eighth.png';
import ninth from '../assets/elements/ninth.png';
import tenth from '../assets/elements/tenth.png';
import eleventh from '../assets/elements/eleventh.png';
import twelfth from '../assets/elements/twelfth.png';
import thirteenth from '../assets/elements/thirteenth.png';
import fourteenth from '../assets/elements/fourteenth.png';
import fifteenth from '../assets/elements/fifteenth.png';
import sixteenth from '../assets/elements/sixteenth.png';
import background from '../assets/background.png';
import buttonStart from '../assets/button-start.png';

import { ELEMENT_GROUP_ID } from './constants';

export const enum ASSETS_NAME {
  Background = 'background',
  ButtonStart = 'buttonStart',
}

export const manifest: AssetsManifest = {
  bundles: [
    {
      name: 'assets',
      assets: [
        {
          alias: ASSETS_NAME.ButtonStart,
          src: buttonStart,
        },
        {
          alias: ASSETS_NAME.Background,
          src: background,
        },
        {
          alias: ELEMENT_GROUP_ID.First,
          src: first,
        },
        {
          alias: ELEMENT_GROUP_ID.Second,
          src: second,
        },
        {
          alias: ELEMENT_GROUP_ID.Third,
          src: third,
        },
        {
          alias: ELEMENT_GROUP_ID.Fourth,
          src: fourth,
        },
        {
          alias: ELEMENT_GROUP_ID.Fifth,
          src: fifth,
        },
        {
          alias: ELEMENT_GROUP_ID.Sixth,
          src: sixth,
        },
        {
          alias: ELEMENT_GROUP_ID.Seventh,
          src: seventh,
        },
        {
          alias: ELEMENT_GROUP_ID.Eighth,
          src: eighth,
        },
        {
          alias: ELEMENT_GROUP_ID.Ninth,
          src: ninth,
        },
        {
          alias: ELEMENT_GROUP_ID.Tenth,
          src: tenth,
        },
        {
          alias: ELEMENT_GROUP_ID.Eleventh,
          src: eleventh,
        },
        {
          alias: ELEMENT_GROUP_ID.Twelfth,
          src: twelfth,
        },
        {
          alias: ELEMENT_GROUP_ID.Thirteenth,
          src: thirteenth,
        },
        {
          alias: ELEMENT_GROUP_ID.Fourteenth,
          src: fourteenth,
        },
        {
          alias: ELEMENT_GROUP_ID.Fifteenth,
          src: fifteenth,
        },
        {
          alias: ELEMENT_GROUP_ID.Sixteenth,
          src: sixteenth,
        },
      ],
    },
  ],
};
