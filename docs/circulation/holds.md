---
sidebar_position: 4
---

# Holds

Patrons can place holds to request an item that may not currently be available. When the item becomes available for the patron, the library notifies the patron (either automatically or manually) and the patron will have a set period of time to pick the item up.

## Hold fulfillment process
Evergreen fills holds using a combination of factors. These include:

- Which copies are available
- Item and patron status
- Check-in and pickup libraries
- Request date and time
- Hold status

Changes in any of these can affect when and how a hold is filled.

In general, the system tries to:

- Fulfill hold requests for pickup at the item's owning library
- Fill holds opportunistically (a copy may be targeted at one library but captured at another)
- Prioritize older holds first

### Hold types

Evergreen includes several hold types:

- **Metarecord Holds (M):** Allows any format in a group (e.g., print, large print, audiobook) to fulfill the request. These are placed when using the Group Formats/Editions catalog search option.
- **Title Holds (T):** Allows any eligible copy within a title record to fulfill the request.
- **Volume Holds (V):** Requires fulfillment from copies linked to a specific library’s volume record.
- **Copy Holds (C):** Can only be fulfilled by the exact item requested.
- **Force Holds (F):** Can only be fulfilled by the exact item requested. The hold will go to the top of the holds queue. Overrides anything about the item / situation that would prevent a hold from being placed.
- **Recall Holds (R):** Can only be fulfilled by the exact item requested. The hold will go to the top of the holds queue. Overrides anything about the item / situation that would prevent a hold from being placed. Item will be routed to Cataloging when it arrives at the pickup library.

Aspen Discovery supports only Title holds. Staff are able to place all types of holds.

### Hold targeting

When you place a hold, Evergreen scans for copies that can fill it. This process is called **targeting**.

- The system scans for potential copies once every 48 hours.
- It considers item status, patron status, and other factors.

If an item is marked **Available** or **Reshelving**, it will be targeted and appear on the owning library’s **Pull List for Hold Requests**. The hold status will show as **Waiting for Capture**.

If no copies are available, the system won’t target anything yet. The hold status will show as **Waiting for Copy**.

#### Hold eligibility and selection factors

A number of factors affect whether an item can be used to fill a hold, including:

- **Shelving location**: A shelving location can be marked as not holdable.
- **Item attributes**. An item can be marked as not holdable.
- **Item status**. Items with certain statuses, like Damaged or Missing, are not holdable.
- **Hold policies**. A systemwide or individual library hold policy may prevent particular items from being placed on hold. These are usually based on the item's circulation modifier.
- **Age-based hold protection**: Also called age protection, hold protection, and age hold protection. When used by an item, the item can only be captured for holds for pickup at the item's circulation library until the age-based hold protection expires.

### Hold capture

When a targeted item is scanned, the hold is **captured**.

A hold may also be captured opportunistically. After a certain period of time has elapsed from the hold's request time, Evergreen will allow any eligible item that is scanned in anywhere in the system to be captured for a hold as soon as it is checked in.

After capture, the system updates the hold's status, usually to **In Transit** or **Ready for Pickup**, depending on where it was checked in and where it’s going.

Once an item is captured for a hold, the system won’t target another copy.

### On the holds shelf

When an item needed for a hold arrives at the pickup library -- either because it is captured for the hold at the pickup library or because it arrives in transit at the pickup library -- it will become available on the holds shelf.

If a patron has selected to be notified of hold available by either email or by SMS (text message), Evergreen will automatically send these messages at least half an hour after the hold is available.

## Placing holds

### Placing a hold from a patron account

1. Open the patron’s account.
2. Click **Holds**.
3. Click **Place Holds**.
4. Search for titles.
5. Select a title and click **Place Hold**.
6. Confirm the patron’s hold notification preferences.
7. Click **Place Hold(s)**.
8. Confirm the Hold Status changes from **Hold Pending** (blue) to **Hold Succeeded** (green).
9. Continue placing holds as needed.

### Placing a hold from the catalog

1. Find the item in the catalog.
2. Click **Place Hold**.
3. Enter the patron’s barcode or search for the patron.
4. Confirm the patron's hold notification preferences.
5. Click **Place Hold(s)**.
6. Confirm the Hold Status changes from **Hold Pending** (blue) to **Hold Succeeded** (green).
7. Continue placing holds as needed.

## Managing holds
You may edit a hold from a number of different screens, including the *Holds* tab on a patron's account, the *Holds Shelf* interface, the *View Holds* tab on title records, and elsewhere.

### Changing the pickup library

You can change the pickup library at any time.
- If the item has not yet been captured for a hold, Evergreen will use the new pickup library when the hold is captured.
- If the item is already in transit, it will arrive at the original location before being rerouted.
- If the item is already on a hold shelf, the hold status will change to "Wrong Shelf." Checking in the item will trigger a transit to the new pickup library. If you change the pickup library for an item that is on another library's hold shelf, you may want to contact the original pickup library to let them know to check in the item so it is routed to the new pickup library.

#### From a patron account or the Holds Shelf interface
1. Select the hold(s) to edit.
2. Click **Actions** > **Edit Pickup Library**.
3. Choose the new pickup location.
4. Click **Submit**.
 
#### From the View Holds tab on a title record
1. Select the hold(s) to edit.
2. Click **Actions** > **Modify Hold(s)**.
3. Choose the new pickup location in the *Pickup Library* field.
4. Click **Apply**.

### Cancelling and uncancelling holds
Holds may be cancelled by patrons or by staff.

#### Cancelling holds
To cancel a hold for a patron:
1. Select the hold(s) to cancel.
2. Click **Actions** > **Cancel Hold**.
3. Select the reason the hold is being cancelled from the *Cancel Reason* dropdown.
4. If applicable / appropriate, add a note.
5. Press the **Cancel Hold** button.

#### Uncancelling holds
Staff may access a list of a patron's recently cancelled holds and may uncancel holds to reactivate them. The new request date will be the date of reactivation.

To uncancel a hold:
1. From a patron's record, select the *Holds* tab.
2. Select the *Recently Canceled Holds* subtab.
3. Select the hold(s) to uncancel.
4. Click **Actions** > **Uncancel Hold**.
5. Press the **Uncancel Hold** button.

### Editing hold notification settings

Changes to a patron’s hold notification preferences will prompt staff to update existing holds. If you would like to update hold notification settings manually, you may also edit holds directly.

#### From a patron account or the Holds Shelf interface
1. Select the hold(s) to edit.
2. Click **Actions** > **Edit Notification Settings**.
3. Choose a notification type and enter the required info:
   - **Email** uses the patron’s email on file.
   - **Phone** should be entered as 555-123-4567.
   - **Text/SMS** should be entered as 5551234567.
4. Click **Submit**.

#### From the View Holds tab on a title record
1. Select the hold(s) to edit.
2. Click **Actions** > **Modify Hold(s)**.
3. Edit the notification fields as applicable.
4. Click **Apply**.

### Editing hold dates

Staff with permissions can edit hold dates, including the **Shelf Expire Date**.

#### From a patron account or the Holds Shelf interface
1. Select the hold(s) to edit.
2. Click **Actions** > **Edit Hold Dates**.
3. Check the box next to the date field(s) you would like to edit.
   - **Hold Activate Date**: The date on which the hold should activate if currently frozen.
   - **Hold Request Date**: The date on which the hold was requested. Unable to be edited by staff.
   - **Hold Expire Date**: The date on which the hold is no longer needed if not already fulfilled.
   - **Shelf Expire Date**: The date on which the item should be sent back to its owning library if not yet picked up.
4. Click **Submit**.

#### From the View Holds tab on a title record
1. Select the hold(s) to edit.
2. Click **Actions** > **Modify Hold(s)**.
3. Edit the *Activate Date*, *Expire Date*, or *Shelf Expire Date* as applicable.
4. Click **Apply**.
















## Retargeting Holds

Holds need retargeting when new items are added or an item’s status changes (e.g., from **On Order** to **In Process**). Evergreen doesn’t automatically recognize new items as available for holds.

1. Open the holds list for the title.
2. Select holds with **Waiting for Copy** status.
3. Click **Actions → Find Another Target**.
4. Confirm the action.
5. Wait for the screen to refresh.

## Transferring Holds

You can transfer holds between titles while keeping the original request date.

1. Open the title you want to transfer holds **to**.
2. Click **Mark for → Title Hold Transfer**.
3. Find the hold to transfer.
4. Click **Actions → Transfer to Marked Title**.

## Hold Groups

Hold Groups allow staff to place holds for multiple patrons at once, useful for book clubs or high-demand items.

### Hold Groups Interface

Find this under **Circulation → Hold Groups**. The interface includes:

- **Hold Groups:** Overview of created groups.
- **Current Users:** View and manage group members.
- **Add Users:** Add patrons to a group.
- **Hold Events:** Track and manage group holds.

### Creating a Hold Group

1. Go to **Circulation → Hold Groups**.
2. Click **New Hold Group**.
3. Enter a name and description (optional).
4. Choose an owning library.
5. Click **Create Bucket**.

### Adding Users

You can add users by barcode or search.

- **By Barcode:** Scan or enter barcodes under **Add Users**.
- **By Search:** Use **Search for Patron**, select patrons, and add them.

(For more details, see [Hold Groups](#hold-groups).)

