export type NavItem = {
    label: string;
    href: string;
};

export const NAV_ITEMS: NavItem[] = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'WatchList' },
];
 