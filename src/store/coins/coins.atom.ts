import {atom, AtomEffect} from 'recoil';
import ApiLayer from '../../api/apiLayer.api';
import {ApiPaths} from '../../api/paths.api';

export interface Coin {
  readonly id: string;
  readonly symbol: string;
  readonly name: string;
}

const fetchCoins: AtomEffect<Coin[]> = ({setSelf, trigger}) => {
  if (trigger !== 'get') {
    return;
  }

  const apiLayer = new ApiLayer({url: ApiPaths.getCoins});
  apiLayer.run<Coin[]>().then(setSelf);
};

export const coinsAtom = atom<Coin[]>({
  key: 'coins',
  effects: [fetchCoins],
});
