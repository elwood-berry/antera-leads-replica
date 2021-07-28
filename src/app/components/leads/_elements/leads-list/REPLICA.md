# REPLICA DETAIL BREAK DOWN  

# TITLE
```ts  
```

# IMPORTS  
```ts  
  // ANGULAR 
  import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { FormGroup, FormBuilder } from '@angular/forms';
  import { MatDialog, MatDialogRef } from '@angular/material/dialog';
  import { DataSource } from '@angular/cdk/collections';
  import { Subscription } from 'rxjs';
  import { delay, filter } from 'rxjs/operators';

  // FUSE
  import { fuseAnimations } from '@fuse/animations';
  import { FuseConfirmDialogComponent } from '@fuse/components/confirm-dialog/confirm-dialog.component';
  import { FuseMailComposeDialogComponent } from 'app/shared/compose/compose.component';

  // OTHER 
  import { forEach, find } from 'lodash-es';
  import * as moment from 'moment';

  // ADVANCE: SERVICES
  import { AuthService } from 'app/core/services/auth.service';
  import { MessageService } from 'app/core/services/message.service';
  import { LeadDetails } from '../../../models';
  import { ApiService } from '../../../core/services/api.service';
  import { SelectionService } from '../../../core/services/selection.service';
  import { LeadsFormComponent } from '../leads-form/leads-form.component';
  import { LeadsService } from '../leads.service';
  import { MailCredentialsDialogComponent } from 'app/shared/mail-credentials-dialog/mail-credentials-dialog.component';
  import { Mail, Attachment } from 'app/models/mail';

```  

---  

# DECORATOR: COMPONENT 
```ts  
  @Component({
      selector: 'fuse-leads-list',
      templateUrl: './leads-list.component.html',
      styleUrls: ['./leads-list.component.scss'],
      encapsulation: ViewEncapsulation.None,
      animations: fuseAnimations
  })
```  

---  

# CLASS: FuseLeadsListComponent
```ts  
  export class FuseLeadsListComponent implements OnInit, OnDestroy {}
```  

---  

# CLASS: FuseLeadsListComponent: PROPERTIES
```ts  
  // PROPERTIES  
  @ViewChild('dialogContent') dialogContent: TemplateRef<any>;

  // REPLICA
  dataSource: LeadsDataSource;
  displayedColumns = ['checkbox', 'name', 'title', 'referedBy', 'status', 'accountName', 'phoneWork', 'email', 'salesRep', 'dateCreated', 'createdByName', 'buttons'];

  // OTHER
  confirmDialogRef: MatDialogRef<FuseConfirmDialogComponent>;
  dialogRef: MatDialogRef<LeadsFormComponent>;
  filterForm: FormGroup;
  checkboxes: any = {};
  leadStatues = [];
  subscriptions: Subscription = new Subscription();
  dialogRefMailCompose: MatDialogRef<FuseMailComposeDialogComponent>;
  loading = false;
  loaded = () => {
      this.loading = false;
  };
```  

---  

# CONSTRUCTOR  
Constructor has too many parameters (9). Maximum allowed is 7
```ts  
  constructor(
    private leadsService: LeadsService,
    private api: ApiService,
    public dialog: MatDialog,
    private fb: FormBuilder,
    public selection: SelectionService,
    private msg: MessageService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
    // 
    this.filterForm = this.fb.group(this.leadsService.params.term);

    // 
    this.subscriptions.add(
      this.api.getDropdownOptions({ dropdown: ['lead_status_dom'] }).subscribe((res: any[]) => {
        const leadStatusDropdown = find(res, { name: 'lead_status_dom' });
        this.leadStatues = leadStatusDropdown.options;
      })
    );

    // 
    this.subscriptions.add(
      this.route.queryParamMap.pipe(
        filter(q => q.has('id'))
      ).subscribe(q => this.editLead({ id: q.get('id') }))
    );

    // 
    let leadEditId = this.route.snapshot.paramMap.get('id');
    if(leadEditId){
      this.editLead({ id: leadEditId });
    }
          
  }
```  

---  

# NG ON INIT  
```ts  
  ngOnInit() {
    // 
    this.dataSource = new LeadsDataSource(this.leadsService);

    //
    this.subscriptions.add(
      this.leadsService.onLeadsChanged
          .subscribe(leads => {
              this.selection.init(leads);
          })
    );

    // 
    this.subscriptions.add(
      this.selection.onSelectionChanged
          .subscribe(selection => {
              this.checkboxes = selection;
          })
    );
  }
```

