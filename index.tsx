import * as React from "react";

export interface IProps {
    menu: IMenu[];
}

export interface IMenu {
    name: string;
    route: string | null;
    order: number;
    external: string | null;
    target: string;
    image: string | null;
    submenu: ISubMenu[] | null;
}

export interface ISubMenu {
    name: string;
    route: string | null;
    order: number;
    external: string | null;
    target: string;
    image: string | null;
}

export class MenuComponent extends React.Component<IProps, {}> {
    public render() {
        const menu = this.props.menu;

        if (menu === null) {
            return null;
        } else {
            return (
                <nav>
                    {menu.length === 0 ? null : (
                        <ul>
                            {menu.map((menuItem) => {
                                return (
                                    <li>
                                        <a
                                            href={
                                                menuItem.route === null
                                                ? menuItem.external
                                                : menuItem.route
                                            }
                                            target={menuItem.target}
                                            title={menuItem.name}
                                        >
                                            {menuItem.image === null ? null : (
                                                <img src={menuItem.image} alt={menuItem.name} />
                                            )}
                                            {menuItem.name}
                                        </a>
                                        {menuItem.submenu === null || menuItem.submenu!.length === 0 ? null : (
                                            <ul>
                                                {menuItem.submenu!.map((subMenuItem) => {
                                                    return (
                                                        <li>
                                                            <a
                                                                href={
                                                                    subMenuItem.route === null
                                                                    ? subMenuItem.external
                                                                    : subMenuItem.route
                                                                }
                                                                target={subMenuItem.target}
                                                                title={subMenuItem.name}
                                                            >
                                                                {subMenuItem.image === null ? null : (
                                                                    <img
                                                                        src={subMenuItem.image}
                                                                        alt={subMenuItem.name}
                                                                    />
                                                                )}
                                                                {subMenuItem.name}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </nav>
            );
        }
    }
}
