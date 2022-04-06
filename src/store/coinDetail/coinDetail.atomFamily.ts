import {
  CoinDetail,
  GetCoinDetailRequestData,
  GetCoinDetailResponseData,
} from './coinDetail.types';
import {ReadOnlySelectorFamilyOptions, selectorFamily} from 'recoil';
import ApiLayer from '../../api/apiLayer.api';
import {ApiPaths} from '../../api/paths.api';

const get: ReadOnlySelectorFamilyOptions<CoinDetail, string>['get'] =
  id => async () => {
    const apiLayer = new ApiLayer<GetCoinDetailRequestData>({
      url: ApiPaths.getCoinDetail,
      method: 'get',
    });

    const requestData: GetCoinDetailRequestData = {
      ids: id,
      vs_currencies: 'usd',
      include_last_updated_at: true,
    };
    apiLayer.setData(requestData);

    const response = await apiLayer.run<GetCoinDetailResponseData<typeof id>>();
    return response[id];
  };

export const coinDetail = selectorFamily<CoinDetail, any>({
  key: 'coin-detail',
  get,
});
