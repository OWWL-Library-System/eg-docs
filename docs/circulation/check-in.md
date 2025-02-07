---
sidebar_position: 2
---

# Check in

## Overview

Scan an item in **Check In** to clear a circulation from a patron's account or to process an item status update.

## Basic check in

1. Select **Check In Items** on the home screen or select **Check In** from the **Circulation** menu in the toolbar.
2. Scan the item barcode (or enter the barcode manually and press Submit).
3. The item will appear in the **Items Checked In** table.

## Backdated check in

To backdate a check-in, such as for book drop materials or following an unanticipated closure, change the **Effective Date** before scanning items.

1. Manually type the effective date or use the calendar tool.
2. Once the date is changed, a _Backdated Check In [mm/dd/yyyy]_ statement will be added at the top of the screen. A _Backdating Enabled_ button will also appear at the top of the screen.
3. If you would like to continue to use the selected date for the rest of your session, check the **Use effective date until logout** box. To clear the backdate, refresh the page, close the tab, or select the calendar tool and press the **Clear** button.

If items have already been scanned using the current date but should have been backdated, the effective date can be retroactively changed.

1. Select the item(s) from the **Items Checked In** table.
2. Select **Backdate Post-Checkin** from the **Actions** menu.
3. In the **Backdate Already Checked-In** circulations dialog, set the effective date. Manually type the correct date or use the calendar tool.
4. Click **Submit**.

After submitting the backdate, the screen will return to the original check-in list, and will not reflect the back date. To verify the item has been backdated, click the item barcode to open the **Item Status Detailed View**. The Quick summary display shows both the Check-in Time (the backdate) and the Check-in Scan Time (the actual date the item was handled).

## Special circumstances

### Item has overdue fines

If there is an overdue fine associated with the check in, an alert will appear at the top of the screen with a fine tally for the current session. To handle fine payment immediately, click the alert to jump to the patron’s bill record.

### Item captured for hold or transit

:::danger[Don't ignore the pop-ups]

Several events, such as an item being captured for a hold or being put in transit, result in pop-ups on the screen. Be sure to address the hold or transit pop-up. Either print or close the pop-up before scanning a new item. If the pop-up is not closed before a new item is scanned, the auto-enter function of the scanner will trigger the slip to print instead of entering the barcode scanned.

:::

:::tip

If your library always prints hold and transit slips, you can use the **Auto-Print Hold and Transit Slip** Check-in Modifier.

:::

:::tip

If an item is not in a condition to be put in transit (e.g., it's returned damaged), you may want to cancel the transit. To do this, select the item's row in the **Items Checked In** table and select **Cancel Transit** from the **Actions** menu. The item will then have a status of _Canceled Transit_ rather than _In Transit_.

:::

#### Item is captured for a local hold

When an item will fill a hold for pickup at your library, a Hold Slip pop-up opens. Press **Print** to print the Hold Shelf Slip.

#### Item is captured for a hold at another library
When an item will fill a hold for pickup at another library, a Transit Slip pop-up opens. Press **Print** to print the Hold Transit Slip.

#### Item is put in transit

When an item is routed to its owning library, a Transit Slip pop-up opens. Click **Print** to trigger the print version of the Transit Slip.

## Checkin modifiers

Checkin modifiers automate certain check in or item processing behaviors. Selected modifiers are displayed in a pink bar below the Checkin Items page label. Modifiers remain active until unchecked, even if you navigate away from the page or log out.

### Ignore Pre-cataloged Items

No prompt for pre-cataloged items. Item status changes to Cataloging silently.

:::caution

This modifier is not recommended. Processing pre-cataloged items immediately is preferred.

:::

### Suppress Holds and Transits

Items are not used to fill holds or sent in transit and instead are immediately assigned a Reshelving status.

:::caution

This modifier is not recommended.  Using this modifier causes all items checked in to fail to be sent in transit, including other libraries' items.

:::

### Amnesty Mode

Overdue fines are voided or not created for the circulation transaction.

:::note[OWWL Policy]

Per OWWL Policy, this checkin modifier should only be used in extenuating circumstances.

:::


### Auto-Print Hold and Transit Slips

Hold and Transit Slips automatically print without pop-ups. Items are made available for hold or transit if applicable.

### Clear Holds Shelf

Clears hold-shelf-expired items during check-in. This cancels the hold, removes the item from the Holds Shelf list, and assigns a new status (e.g., Reshelving or In Transit).

### Retarget Local Holds

Attempts to retarget local holds for newly-catalogued items owned by the library.

### Retarget All Statuses

Similar to Retarget Local Holds, but attempts to retarget holds for all item statuses. Must be used with Retarget Local Holds.

> **Recommendation:**  
> Use Retarget Local Holds and Retarget All Statuses, especially for holdings staff.

### Capture Local Holds as Transit

Local holds are given an In Transit status instead of being placed on the holds shelf.

### Manual Floating Active

Enables manual floating for items in configured Floating Groups. Items float based on the "Manual" flag setting.

> **Caution:**  
> Floating Groups are not widely used. Avoid using this modifier unless needed.

### Update Inventory

Records the workstation and date/time in the item's **Inventory Workstation** and **Inventory Date** fields during scanning.

> **Recommendation:**  
> Use only during inventory projects.

## Print Check-In Receipt

![Example check-in receipt]

![Sample receipt]

## Check-In Alerts and Failures

### Mis-scan Alert

![Mis-scan Alert]

### Copy Status Lost

If a lost item bill is unpaid or partially paid, the copy status remains Lost. Returned items require manual handling to re-enter circulation. Refunds are not applied to the patron account.

### Copy Status Lost and Paid

Fully paid Lost items cannot be checked in by library staff. These items must be routed to holdings maintenance for manual status updates.

### Copy Status Missing

![Copy Status Missing]

You may also check in items in other contexts, such as when viewing a list of a patron's items checked out, by selecting **Actions &rarr; Check In**.
