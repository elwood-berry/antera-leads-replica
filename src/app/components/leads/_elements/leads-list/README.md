# LEADS LIST

See [Table w/ Expandable Rows](https://material.angular.io/components/table/examples#table-expandable-rows)  
See [Table w/ Selection](https://material.angular.io/components/table/examples#table-selection)

## DATA INTERFACE  
```ts  
/*
DATA INTERFACE
*/
export interface LeadElement {
  position: number;
  name: string;
  title: string;
  referredBy: string;
  accountName: string;
  officePhone: string;
  email: string;
  salesRep: string;
  dateCreated: string;
  createdBy: string;
}
```  

## DATA COLUMNS 
```ts  
/*
SAMPLE DATA
*/
const ELEMENT_DATA: LeadElement[] = [
  {
    position: 1, 
    name: "Daenerys Targaryen", // Do we want to seperate??
    title: "Accountant", 
    referredBy: "John Doe",
    accountName: "Targaryen Inc",
    officePhone: "+1 (907) 200-6326",
    email: "tormund.giantsbane@domainname.com",
    salesRep: "Jane Doe",
    dateCreated: "2021-07-20",
    createdBy: "Antera Support"
  }
];
```

## COLUMN DISPLAY  
```ts
public displayedColumns: string[] = [
  "position",
  "name",
  "title",
  "referredBy",
  "accountName",
  "officePhone",
  "email",
  "salesRep",
  "dateCreated",
  "createdBy"
];  
```

## NG-CONTAINER: COLUMN: POSITION  
position: number  
```html  
<!-- POSITION -->
<ng-container matColumnDef="position">
  <th mat-header-cell *matHeaderCellDef>Position</th>
  <td mat-cell *matCellDef="let element">{{element.position}}</td>
</ng-container>
```  

--- 

## NG-CONTAINER: COLUMN: NAME  
name: string  
```html  
<!-- NAME -->
<ng-container matColumnDef="name">
  <th mat-header-cell *matHeaderCellDef>Name</th>
  <td mat-cell *matCellDef="let element">{{element.name}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: TITLE  
title: string  
```html  
<!-- TITLE -->
<ng-container matColumnDef="title">
  <th mat-header-cell *matHeaderCellDef>Title</th>
  <td mat-cell *matCellDef="let element">{{element.title}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: REFERRED BY  
referredBy: string  
```html  
<!-- REFERRED BY -->
<ng-container matColumnDef="referredBy">
  <th mat-header-cell *matHeaderCellDef>Referred By</th>
  <td mat-cell *matCellDef="let element">{{element.referredBy}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: ACCOUNT NAME  
accountName: string  
```html  
<!-- ACCOUNT NAME -->
<ng-container matColumnDef="accountName">
  <th mat-header-cell *matHeaderCellDef>Account Name</th>
  <td mat-cell *matCellDef="let element">{{element.accountName}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: OFFICE PHONE  
officePhone: string  
```html  
<!-- OFFICE PHONE -->
<ng-container matColumnDef="officePhone">
  <th mat-header-cell *matHeaderCellDef>Office Phone</th>
  <td mat-cell *matCellDef="let element">{{element.officePhone}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: EMAIL  
email: string  
```html  
<!-- EMAIL -->
<ng-container matColumnDef="email">
  <th mat-header-cell *matHeaderCellDef>Email</th>
  <td mat-cell *matCellDef="let element">{{element.email}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: SALES REP 
salesRep: string  
```html 
<!-- SALES REP -->
<ng-container matColumnDef="salesRep">
  <th mat-header-cell *matHeaderCellDef>Sales Rep</th>
  <td mat-cell *matCellDef="let element">{{element.salesRep}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: DATE CREATED  
dateCreated: string  
```html  
<!-- DATE CREATED -->
<ng-container matColumnDef="dateCreated">
  <th mat-header-cell *matHeaderCellDef>Date Created</th>
  <td mat-cell *matCellDef="let element">{{element.dateCreated}}</td>
</ng-container>
```  

--- 
## NG-CONTAINER: COLUMN: CREATED BY  
createdBy: string    
```html  
<!-- CREATED BY -->
<ng-container matColumnDef="createdBy">
  <th mat-header-cell *matHeaderCellDef>Created By</th>
  <td mat-cell *matCellDef="let element">{{element.createdBy}}</td>
</ng-container>
```  

---  
## NG-CONTAINER: COLUMN: EXPANDED DETAILS  
```html  
<!-- EXPANDED DETAILS -->
<ng-container matColumnDef="expandedDetail">

<td mat-cell *matCellDef="let element" [attr.colspan]="displayedColumns.length">

  <div class="example-element-detail" [@detailExpand]="element == expandedElement ? 'expanded' : 'collapsed'">

    <div>{{element.position}}</div>
    <div>{{element.name}}</div>
    <div>{{element.title}}</div>
    <div>{{element.referredBy}}</div>
    <div>{{element.accountName}}</div>
    <div>{{element.officePhone}}</div>
    <div>{{element.email}}</div>
    <div>{{element.salesRep}}</div>
    <div>{{element.dateCreated}}</div>
    <div>{{element.createdBy}}</div>

  </div>

</td>

</ng-container>
``` 
