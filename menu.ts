export const menu: any = [
    {
        name: "Menu 1",
        route: "/route-1",
        order: 1,
        external: null,
        target: "_self",
        image: null,
        submenu: null,
    },
    {
        name: "Menu 2",
        route: null,
        order: 2,
        external: "https://YourExternal.com",
        target: "_blank",
        image: "https://YourImage.com/imagem.jpg",
        submenu: [
            {
                name: "Sub Menu 1",
                route: "/route-2",
                order: 1,
                external: null,
                target: "_self",
                image: null,
                submenu: null,
            },
        ],
    },
];
    