# LEADS LIST

See [Table w/ Expandable Rows](https://material.angular.io/components/table/examples#table-expandable-rows)


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
  "referred by",
  "account name",
  "office phone",
  "email",
  "sales rep",
  "date created",
  "created by"
];  
```
