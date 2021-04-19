export enum ROUTES {
  home = 'home',
  admin = 'admin',
}

export enum UrlQueryParamsValues {
  userId = 'userId',
  adminId = 'adminId',
  carId = 'carId',
}

export type UrlRouteOptions<T extends {}> = T & {
  title: string;
  description: string;
  route: ROUTES;
};



export interface HomePayload {
  route: ROUTES.home;
  [UrlQueryParamsValues.userId]: string;
}

export interface AdminPayload {
  route: ROUTES.admin;
  [UrlQueryParamsValues.carId]: string;
  [UrlQueryParamsValues.adminId]: string;
}
