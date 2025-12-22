/**
 * Sidebar Navigation Items Configuration
 * 
 * This file defines all the navigation items for the sidebar.
 * Each item can have:
 * - id: Unique identifier
 * - title: Display name in sidebar
 * - route: Path to navigate to
 * - icon: Icon name (optional, for future use)
 * - children: Submenu items (optional, for dropdowns)
 */

export const navItems = [
  {
    id: "dashboard",
    title: "Dashboard",
    route: "/dashboard",
  },
  {
    id: "vilagempp",
    title: "Village MPP",
    route: "/vilagedashboard",
    children: [
               {
    id: "assets",
    title: "Assets",
    route: "/assets",
    children: [
      {
        id: "assets-solar",
        title: "Solar Panels",
        route: "/assets/solar",
      },
      {
        id: "assets-battery",
        title: "Batteries",
        route: "/assets/batteries",
      },
      {
        id: "assets-chargers",
        title: "EV Chargers",
        route: "/assets/chargers",
      },
    ],
  },
  {
    id: "forecasting",
    title: "Forecasting",
    route: "/forecasting",
    children: [
      {
        id: "forecasting-solar",
        title: "Solar Forecast",
        route: "/forecasting/solar",
      },
      {
        id: "forecasting-load",
        title: "Load Forecast",
        route: "/forecasting/load",
      },
    ],
  },
  {
    id: "grid-balancing",
    title: "Grid Balancing",
    route: "/grid-balancing",
    children: [
      {
        id: "grid-frequency",
        title: "Frequency Monitoring",
        route: "/grid-balancing/frequency",
      },
      {
        id: "grid-voltage",
        title: "Voltage Monitoring",
        route: "/grid-balancing/voltage",
      },
    ],
  },
  {
    id: "p2p-trading",
    title: "P2P Trading",
    route: "/p2p-trading",
    children: [
      {
        id: "p2p-active",
        title: "Active Trades",
        route: "/p2p-trading/active",
      },
      {
        id: "p2p-history",
        title: "Trade History",
        route: "/p2p-trading/history",
      },
    ],
  },
  {
    id: "billing",
    title: "Billing",
    route: "/billing",
    children: [
      {
        id: "billing-invoices",
        title: "Invoices",
        route: "/billing/invoices",
      },
      {
        id: "billing-transactions",
        title: "Transactions",
        route: "/billing/transactions",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    route: "/maintenance",
    children: [
      {
        id: "maintenance-schedule",
        title: "Schedules",
        route: "/maintenance/schedule",
      },
      {
        id: "maintenance-logs",
        title: "Logs",
        route: "/maintenance/logs",
      },
    ],
  },
  {
    id: "settings",
    title: "Settings",
    route: "/settings",
    children: [
      {
        id: "settings-general",
        title: "General",
        route: "/settings/general",
      },
      {
        id: "settings-profile",
        title: "Profile",
        route: "/settings/profile",
      },
      {
        id: "settings-notifications",
        title: "Notifications",
        route: "/settings/notifications",
      },
    ],
  },
    ]
  },
  
];

/**
 * Helper function to find a nav item by route
 */
export const getNavItemByRoute = (route) => {
  const findItem = (items) => {
    for (const item of items) {
      if (item.route === route) return item;
      if (item.children) {
        const found = findItem(item.children);
        if (found) return found;
      }
    }
    return null;
  };
  return findItem(navItems);
};

/**
 * Helper function to get all routes
 */
export const getAllRoutes = () => {
  const routes = [];
  const collect = (items) => {
    items.forEach((item) => {
      routes.push(item.route);
      if (item.children) {
        collect(item.children);
      }
    });
  };
  collect(navItems);
  return routes;
};
