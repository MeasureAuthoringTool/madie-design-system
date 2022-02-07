export interface BreadcrumbItem {
  url: string;
  title: string;
  queryParams?: { [k: string]: any };
  external?: boolean;
}
