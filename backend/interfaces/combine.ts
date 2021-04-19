import { AdminPayload, ROUTES, UrlRouteOptions } from './example-combine';

const ddd: UrlRouteOptions<AdminPayload> = {
  adminId: 'sdf',
  carId: 'sdf',
  description: 'sdf',
  route: ROUTES.admin,
  title: 'sdf',
};

Object.keys(ddd);
