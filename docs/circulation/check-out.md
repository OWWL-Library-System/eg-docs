---
sidebar_position: 1
---

# Check Out

## Basic check out



1. From the home screen, click the **Check Out Items** link, select **Check Out** from the **Circulation** menu, or navigate to the **Check Out** tab if already in a patron’s record.
2. Scan the patron's barcode.
   - If the patron does not have their card, use the [Patron Search] link to retrieve their account.
3. Scan the item barcode.
4. The checked out item will appear in the table.
5. Repeat until all items are checked out.
6. Select a [receipt option](#receipt-options) or click **Done** to generate a default receipt and close the patron account.

## Check out with specific due date

1. Before scanning the item barcode, click the calendar widget in the [Date Options] field.
2. Select the desired due date:
   - All subsequent loans for the current patron will use this specific due date.
   - The due date will reset to normal for the next patron.
3. Proceed to scan items.



### Date options

#### One-time specific due date checkout

For a single patron, click the calendar widget and select a due date. Once the patron’s record is closed, the due date will revert to normal.

#### Use specific due date until logout

To apply a special due date for all checkouts during the session, select the "until logout" option. The selected date will persist until the Evergreen session is logged out.

## Non-Cataloged items check out

Non-cataloged items are not individually tracked but are used for statistics. These items:

- Cannot be returned.
- Do not accrue overdue fees.
- Disappear from the patron’s account after their due date.

They are listed in the [Non-Cataloged Circulations].

1. Click the down arrow in the Barcode box to open the non-cataloged types list.
2. Select the appropriate type and click **Submit**.
3. Enter the number of items circulating in the pop-up and click **OK**.
4. A blank row will appear in the checkouts list.



## Receipt options

### Quick Receipt

Clicking **Quick Receipt** generates a due date receipt without closing the patron account. The icon beside the button indicates the receipt format (printer or envelope for email).

- To change the receipt format, click the arrow in the Quick Receipt box and select the desired format.

#### Set Emailed Receipt Default

The emailed receipt preference must be manually enabled in the [Patron Edit] section by selecting **Email checkout receipts by default**. Patrons must have a valid email address.

Patrons can also enable this preference through their online account under Preferences > Notifications.

## Check Out Pre-Cataloged Materials

Pre-cataloged materials are items without catalog records that the library wishes to circulate. These materials may or may not have a barcode sticker.

- If the item has a barcode, scan it again to rule out a mis-scan. Most barcoded items already have records.
- If the item is filling a hold, it should have a valid record.

## Check Out Failures

If a scanned item has a status other than "available/reshelving" or "on hold shelf" for the current patron, a Check Out Failure Alert will display. Alerts include options to override the failure or resolve the issue.