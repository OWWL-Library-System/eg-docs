---
sidebar_position: 1
---

# Check out

## Basic check out

1. Select **Check Out Items** from the home screen, select **Circulation &rarr; Check Out**, or navigate to the **Check Out** tab if already in a patron’s record.
2. Scan the patron's barcode.
   - If the patron does not have their card, use the **Patron Search** link to retrieve their account.
3. Scan the item barcode.
4. The checked out item will appear in the table.
5. Repeat until all items are checked out.
6. Select a [receipt option](#receipt-options) or click **Done** to generate a default receipt and close the patron account.

## Check out with specific due date

1. Before scanning the item barcode, select an option from the **Date Options** field.
   - **Specific Due Date**: Select to apply a special due date only to this patron's checkouts. Once the patron’s record is closed, the due date will revert to normal.
   - **Use Specific Due Date Until Logout**: Select to apply a special due date for all checkouts during the session. The selected date will persist until the Evergreen session is logged out.
2. Click the calendar widget and select a due date.
3. Proceed to scan items.

## Check out non-cataloged items

Non-cataloged items are not individually tracked but are used for statistics. These items:

- Cannot be returned in Evergreen.
- Do not accrue overdue fees.
- Disappear from the patron’s account after their due date.

1. Click the down arrow in the **Barcode** box to open the non-cataloged types list.
2. Select the appropriate type and click **Submit**.
3. Enter the number of items circulating in the pop-up and click **OK**.
4. A blank row will appear in the checkouts list.

## Check out pre-cataloged items

Pre-cataloged items are items without catalog records that the library wishes to circulate. These materials may or may not have a barcode sticker.

- If the item has a barcode, scan it again to rule out a misscan. Most barcoded items already have records.
- If the item is filling a hold, it should have a valid record.

1. At the prompt, enter the item's title, author, and ISBN. Select a circulation modifier.
2. Press the **Precat Checkout** button.

## Receipt options

The icon beside the **Quick Receipt** button indicates the receipt format (printer or envelope for email) as determined by the patron's preferences.

Clicking **Quick Receipt** generates a due date receipt without closing the patron account.

Clicking **Done** generates a due date receipt and closes the patron account.

Both **Quick Receipt** and **Done** have dropdown menu options that allow you to override the patron's receipt preferences for the transaction. These allow you to generate an email receipt, print receipt, or no receipt if using the **Done** menu to end the transaction and close out of the patron's record.

## Check out errors
### COPY_CIRC_NOT_ALLOWED
This error could be caused by a number of different problems, including:
- The patron's profile disallows circulations
- The circulation policy disallows circulations of the item
- The item's attributes disallow circulations (such as by being marked as not circulating or reference)
- The item's shelving location disallows circulations

### STAFF_CHR
This error is caused by a blocking penalty alert.