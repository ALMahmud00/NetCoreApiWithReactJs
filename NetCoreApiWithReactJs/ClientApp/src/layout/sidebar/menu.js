const menuList = [
  {
    id: 1,
    label: "DASHBOARD",
    to: "/",
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 2,
    label: "About",
    to: "/about",
    isFirstLabel: false,
    subs: [],
  },
  // {
  //   id: 3,
  //   label: "First Level",
  //   to: "/demo-first",
  //   isFirstLabel: true,
  //   subs: [
  //     {
  //       secondLabelId: 1,
  //       label: "Second Level",
  //       to: "/demo-first/demo-second",
  //       isSecondLabel: false,
  //       nestedSubs: [],
  //     },
  //   ],
  // },
  {
    id: 4,
    label: "First Level",
    to: "/first-level",
    isFirstLabel: true,
    subs: [
      {
        secondLabelId: 1,
        label: "Second Level",
        to: "/first-level/second-level",
        isSecondLabel: true,
        nestedSubs: [
          {
            id: 1,
            label: "Item",
            to: "/first-level/second-level/item",
            isThirdLabel: false,
          },
        ],
      },
    ],
  },
];

export default menuList;
