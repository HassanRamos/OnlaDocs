# Restaurant Management System Documentation Plan

This package is organized as a multi-page HTML documentation site so the guide does not become one overloaded file.

## Main structure

### Getting Started
- `quick-start.html` — Quick Start Guide
- `dashboard.html` — Dashboard
- `branch-outlet-selector.html` — Branch / Outlet Selector
- `top-shortcuts.html` — Top Shortcuts: POS, Tables and Recent Orders
- `screenshot-checklist.html` — Screenshot Checklist

### Menu
- `menus.html` — Menus
- `menu-items.html` — Menu Items
- `item-categories.html` — Item Categories
- `modifier-groups.html` — Modifier Groups
- `item-modifiers.html` — Item Modifiers
- `menu-to-table-assignment.html` — Menu to Table Assignment
- `daily-menu-pdf-email.html` — Daily Menu PDF Email

### Tables
- `areas.html` — Areas
- `tables.html` — Tables
- `qr-codes.html` — QR Codes
- `waiter-table-assignment.html` — Waiter Table Assignment

### Front of House
- `waiter-requests.html` — Waiter Requests
- `reservations.html` — Reservations
- `pos.html` — POS
- `orders.html` — Orders
- `customers.html` — Customers
- `staff.html` — Staff

### Delivery Executive
- `delivery-executive-overview.html` — Delivery Executive Overview
- `delivery-executives.html` — Delivery Executives
- `delivery-assignments.html` — Delivery Assignments
- `delivery-app-report.html` — Delivery App Report
- `cod-report.html` — COD Report

### Expenses
- `expenses.html` — Expenses
- `recurring-expenses.html` — Recurring Expenses
- `expense-categories.html` — Expense Categories
- `expense-reports.html` — Expense Reports

### Payments
- `payments.html` — Payments
- `due-payments.html` — Due Payments
- `due-payments-received-report.html` — Due Payments Received Report
- `due-payment-reports.html` — Due Payment Reports
- `refund-report.html` — Refund Report
- `tax-report.html` — Tax Report

### Reports
- `reports-overview.html` — Reports Overview
- `sales-report.html` — Sales Report
- `item-report.html` — Item Report
- `category-report.html` — Category Report
- `pos-machine-report.html` — POS Machine Report
- `cancelled-order-report.html` — Cancelled Order Report
- `removed-kot-item-report.html` — Removed KOT Item Report
- `loyalty-reports.html` — Loyalty Reports
- `order-report.html` — Order Report

### AI Assistant
- `ai-assistant.html` — AI Assistant

### Cash Register
- `register-dashboard.html` — Register Dashboard
- `cash-register.html` — Cash Register
- `cash-register-reports.html` — Cash Register Reports
- `cash-register-approvals.html` — Cash Register Approvals
- `denominations.html` — Denominations
- `register-settings.html` — Register Settings
- `operational-shifts.html` — Operational Shifts

### Kitchens
- `kitchen-settings.html` — Kitchen Settings
- `all-kitchen-kot.html` — All Kitchen KOT
- `default-kitchen.html` — Default Kitchen

### Hotel
- `front-desk-dashboard.html` — Front Desk Dashboard
- `room-types.html` — Room Types
- `rooms.html` — Rooms
- `room-status-board.html` — Room Status Board
- `guests.html` — Guests
- `hotel-reservations.html` — Hotel Reservations
- `quotations.html` — Quotations
- `check-in.html` — Check-In
- `check-out.html` — Check-Out
- `rate-plans.html` — Rate Plans
- `housekeeping.html` — Housekeeping
- `room-service.html` — Room Service
- `stay-history.html` — Stay History
- `banquet-events.html` — Banquet & Events
- `agreements.html` — Agreements
- `hotel-settings.html` — Hotel Settings

### Inventory
- `inventory-dashboard.html` — Inventory Dashboard
- `units.html` — Units
- `inventory-items.html` — Inventory Items
- `inventory-item-categories.html` — Inventory Item Categories
- `inventory-stocks.html` — Inventory Stocks
- `inventory-movements.html` — Inventory Movements
- `recipes.html` — Recipes
- `batch-recipes.html` — Batch Recipes
- `batch-inventory.html` — Batch Inventory
- `purchase-orders.html` — Purchase Orders
- `suppliers.html` — Suppliers
- `inventory-reports.html` — Inventory Reports
- `batch-reports.html` — Batch Reports
- `inventory-settings.html` — Inventory Settings

### System Settings
- `settings-overview.html` — Settings Overview
- `restaurant-settings.html` — Restaurant Settings
- `branch-settings.html` — Branch Settings
- `tax-settings.html` — Tax Settings
- `payment-gateway-settings.html` — Payment Gateway Settings
- `roles-permissions.html` — Roles and Permissions
- `printer-kot-settings.html` — Printer and KOT Settings

## Screenshot workflow

1. Open the live system.
2. Go page by page using the menu list above.
3. Capture a clean screenshot for each page.
4. Rename screenshots using the suggested file names shown inside each page, for example `pos.png`, `menu-items.png`, `cash-register.png`.
5. Place the images in `assets/screenshots/` and replace the placeholder blocks inside the relevant HTML page, or keep the placeholders until screenshots are ready.

## Training rollout

- Train cashiers on POS, Payments, Due Payments and Cash Register.
- Train waiters on Tables, QR Codes, Waiter Requests, Reservations and Orders.
- Train kitchen staff on All Kitchen KOT and Default Kitchen.
- Train managers on Dashboard, Reports, Staff, Settings and Operational Shifts.
- Train stores staff on Inventory, Recipes, Purchase Orders and Suppliers.
- Train hotel/front desk staff on Hotel Dashboard, Guests, Reservations, Check-In, Check-Out and Housekeeping.

## Notes

The files in `assets/reference-menu-screenshots/` are menu reference screenshots from the installed system. They are not required for client-facing use and can be removed before publishing if desired.