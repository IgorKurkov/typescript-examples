export enum ACTION_ENTITY_KEY {
  manId = 'manId',
  womanId = 'womanId',
  childId = 'childId',
}

type ActionInstances = {
  [key in ACTION_ENTITY_KEY]?: number;
};

export interface AnalyticsAction extends ActionInstances {
  marker: ANALYTIC_ACTION_TYPE;
  itemId?: number;
}

export enum ANALYTIC_ACTION_TYPE {
  page_visited = 'page_visited',
  page_clicked = 'page_clicked',
  added_to_cart = 'added_to_cart',
  purchase_finished = 'purchase_finished',
}

const a: AnalyticsAction = {
  marker: ANALYTIC_ACTION_TYPE.page_visited,
  manId: 1,
};
