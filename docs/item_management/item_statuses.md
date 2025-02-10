## Handling Lost Items in the Catalog

Lost item records remain in the catalog until manually deleted by library staff.
- **Delete the record as soon as possible after the Lost Materials bill is paid** to prevent billing issues and unnecessary records in the **Items Out** list.
- If a lost item is checked in after the bill is paid, the system applies a refund, creating a negative balance.
- **Do not delete a lost item record** if:
  - It is still checked out to a patron.
  - The bill has not been paid.

Once deleted, the circulation details no longer exist, and if the item is later returned, there is no way to identify the patron to clear the circulation and bills. Lost items appear in the **List of Lost Items Report**.

Lost items do not appear in the public catalog and cannot be placed on hold.

## Deleting Lost Item Records

When the **Lost Materials** bill is paid, PLS recommends that the owning library delete the item record. Since lost items are still technically checked out, an override is required.

### Steps to Delete a Lost Item Record:
1. Open **Item Status** and retrieve the item record.
2. Click **Actions for Catalogers** and select **Delete Items**.
3. Confirm deletion by clicking **OK**.
4. In the **Override Delete Failure** box, click **Yes**.
5. Click **OK** on the confirmation message.

> **Note:** If a deleted item is later returned and the library decides to keep it, a new copy record must be created with a new barcode. The original barcode remains in the database.

## Legacy Lost Items from Workflows

Items marked **Lost** in Sirsi Workflows were **not** migrated to Evergreen. However, bills created after 2007 above a certain amount were migrated. These appear as **Legacy** bills without item details. If these bills are linked to lost materials, the circulation may still appear in the patron’s **Other/Special Circulations** list. Legacy bills are handled differently than lost items in Evergreen.

## Lost and Paid Items

Items with the **Lost and Paid** status indicate that:
- The item was lost (either overdue or manually marked).
- The associated bill was fully paid or forgiven.

This status helps prevent refunds and negative balances. These records should be deleted from the catalog as soon as possible.


## List of Lost Items Report

Use the **List of Lost Items Report** to:
- Identify lost items with paid bills so you can delete their records.
- Retrieve patron details for deleted lost items.

This report helps ensure accurate record-keeping and prevents unresolved lost item circulations.