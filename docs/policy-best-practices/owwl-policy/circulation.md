# Circulation

## Availability of resources
### Item availability for OWWL cardholders

Libraries should make items in their physical collection available to any OWWL cardholder in the same manner the items are available to the library's own cardholders. Libraries may restrict fragile, bulky, irreplaceable, or special circulation items from being put in transit and may require that such items be checked out and returned only at their owning library. (EAC 10/2023; OWWLDAC 12/2023)

### Accessing OWWL2Go

Only patrons with active, unexpired accounts can access OWWL2go materials. (OWWLAC 02/2013, 02/2014; EAC 12/2021; PLSDAC 01/2022)

### Checkout blocks (overdue and fine threshold)
Patrons are blocked from checking out new materials if they have 5 or more overdue items and/or $5.00 or more in fines. (OWWLAC 10/2013, 05/2016, 08/2018)

## Holds
### Holds and accounts with circulation blocks

If a patron's account has circulation blocks they may still place holds, and the holds will be captured and sent to the patron's pickup library as normal. However, the patron must resolve the circulation blocks before they will be able to check out their hold items. (OWWLAC 08/2018; EAC 04/2022; PLSDAC 05/2022)

### Holds not picked up

All holds not picked up in a reasonable amount of time, not to exceed 7-10 days, as defined by local policy, should be removed from the holds shelf, the patron hold cancelled, and the item routed to fill other holds or back to the owning library for reshelving. (OWWLAC 04/2014; EAC 04/2022; PLSDAC 05/2022)

### Hold limits

Patrons may place up to 20 active holds. Patrons may place up to 30 additional suspended holds. This policy is set in system configuration. (OWWLAC 03/2014; EAC 04/2022; PLSDAC 05/2022)

### Age Based Hold Protection

Age-based hold protection limits holds to those requests being picked up at the owning library, for a period of up to two months based on the copy create date. Use of age-based hold protection is optional, can be applied to all types of new materials, and can be removed from a copy at any time, as determined by the owning library. (OWWLAC 02/2013, 04/2014)

## Loan periods
### Editing due dates when a patron needs extra time

In order to provide good customer service, library staff may edit the due date to provide extra time. The due date should not be extended beyond six weeks from the original due date without permission from the owning library. Do not use editing a due date to circumvent hold blocks, extend due dates on titles with holds, or prevent return of materials to the owning library. (OWWLAC 03/2014; EAC 10/2022; PLSDAC 11/2022)

### Standard loan periods

OWWLAC recommendations for standard loan periods (OWWLAC 11/2006, 04/2007, 11/2013)

| Circ Modifier | Duration | Recurring Fine | Max Fine |
| ----------- | ----------- | ----------- | ----------- |
| Computer | 1H_1H_1H_2 | 0_00_0_00_0_00 | 0_00 |
| Default | 3W_3W_3W_2 | 0_10_0_10_0_10 | 5_00 |
| Equipment | 1D_1D_1D_0 | 1_00_1_00_1_00 | 10_00 |
| eReader | 2W_2W_2W_0 | 3_00_3_00_3_00 | 15_00 |
| Inbound ILL | 2W_2W_2W_0 | 1_00_1_00_1_00 | 10_00 |
| Magazine | 3W_3W_3W_2 | 0_10_0_10_0_10 | 5_00 |
| New Item | 3W_3W_3W_2 | 0_10_0_10_0_10 | 5_00 |
| New Magazine | 1W_1W_1W_0 | 0_10_0_10_0_10 | 5_00 |
| New Video | 2D_2D_1W_0 | 1_00_1_00_1_00 | 5_00 |
| PLS Book Discussion Kit | 6W_6W_6W_0 | 1_00_1_00_1_00 | 20_00 |
| PLS Kit | 2W_2W_6W_0 | 1_00_1_00_1_00 | 20_00 |
| Reference | 1D_1D_1D_0 | 1_00_1_00_1_00 | 20_00 |
| Seasonal | 1W_2W_3W_0 | 0_10_0_10_0_10 | 5_00 |
| Video | 1W_1W_3W_1 | 1_00_1_00_1_00 | 5_00 |
| Videogame | 3D_1W_2W | 0_20_1_00_2_00 | 5_00 |
| Video Set | 1W_3W_3W_1 | 1_00_1_00_1_00 | 5_00 |
| | 3W_3W_3W_2 | 0_10_0_10_0_10 | 5_00 |

Notes:
   * The Duration format 3W_3W_3W_2 indicates the short loan_normal loan_long loan_renewal limit values
   * The Recurring Fine format 0_10_0_10_0_10 indicates the low_normal_high daily fine values for each circulation modifier
   * Each rule here has a companion Fine Free Patron rule with the same loan duration but no fines

### Loan periods follow the checkout library's circulation rules

To promote a consistent experience for patrons, items will circulate with due dates assigned following the checkout library's circulation rules, not the owning library's settings. In general, the system is configured to do this automatically. (OWWLAC 11/2013)

### Editing due dates when another library's item checks out with a "wrong" due date

In some instances, misconfigured or conflicting settings will cause the item to be circulated with a loan period that is different than the checkout library's policy for the given type of material. In this case, the checkout library may edit the due date so that it follows their normal loan period. Please contact OWWL to update your circulation policies so you do not continue to need to edit items' due dates. (OWWLAC 10/2013)

## Lost and damaged items
### Mark lost manually

Any library can mark an item lost, even items not owned by that library. Marking an item lost will create a Lost Materials bill on the patron's account, which will typically block the patron from further circulation. Generally, it is recommended that if there is any doubt whether the item is actually lost, libraries should renew the item (within remaining renewal limits and respecting hold blocks) and allow the item to become overdue until lost. (OWWLAC 04/2014; EAC 04/2022; PLSDAC 05/2022)

### Damaged items not owned by your library

If a damaged item is not owned by your library, use a Recall Hold to send the item back to the owning library for evaluation and to be marked damaged as necessary. (OWWLAC 04/2014; EAC 04/2022; PLSDAC 05/2022)

### Overdue until lost

All items that are overdue more than 8 weeks will be marked as lost automatically by the Evergreen system. This will create a Lost Materials bill on the patron's account, which will typically block the patron from further circulation. (OWWLAC 04/2014)
### Items damaged beyond repair

If an item is damaged to an extent that it cannot be repaired and remains checked out to the responsible patron, the item should be marked damaged and the patron billed for the full replacement price. (OWWLAC 04/2014)

## Renewals
### Autorenewals

If a renewal is allowed, Evergreen should attempt an autorenewal. (EAC 10/2022; PLSDAC 11/2022)

### Renewals possible for accounts with circulation blocks

There are no renewal blocks based on circulation blocks - fines $5.00 and more, or 5 or more overdue items. Overdue items can be renewed to finalize bills and stop additional bills from accruing. (OWWLAC, 5/2016).

It is recommended practice that library staff renew any overdue items to finalize bills before accepting payment for overdue materials.

### Renewal limit overrides

Avoid renewing items beyond the renewal limits. If the item belongs to another library, do not override the renewal limit without the permission of the owning library. (OWWLAC 03/2014)

### Renewal limits

The number of allowed renewals for a specific type of material is set by the CirculationModifier according to library policies and/or the Standard Loan policies. (11/2013)

### Renewals blocked for items with holds

Items with holds - title, volume, or copy level - cannot be renewed. The item must be checked in and routed to the next pending hold. (OWWLAC 02/2006, 11/2013)