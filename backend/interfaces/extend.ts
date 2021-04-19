import { AnalyticsAction, ANALYTIC_ACTION_TYPE } from './example-extend';

const action: AnalyticsAction = {
  itemId: 20,
  manId: 1,
  marker: ANALYTIC_ACTION_TYPE.added_to_cart,
};

Object.keys(action);
