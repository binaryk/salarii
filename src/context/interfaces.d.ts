interface SidebarCategory {
    id: string;
    text: string;
    icon: string;
    link: string;
    items: Array<string>;
    active: boolean;
}

interface SidebarItem {
    id: string;
    text: string;
    link: string;
    active: boolean;
}