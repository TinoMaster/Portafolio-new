export interface LinksScroll {
  name: string;
  path: string;
  isHash?: boolean;
}

const linksScroll: LinksScroll[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/#about",
    isHash: true,
  },
  {
    name: "skills",
    path: "/#skills",
    isHash: true,
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/#contact",
    isHash: true,
  },
  /* {
    name: "Blog",
    path: "/blog",
  }, */
];

export { linksScroll };
