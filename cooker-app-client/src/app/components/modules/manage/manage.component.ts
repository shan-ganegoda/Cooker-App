import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {UiAssist} from "../../../util/ui/ui.assist";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit{

  public form!: FormGroup;
  public csearch!: FormGroup;

  imageempurl: string = 'assets/default.png'

  data!: [];
    // MatTableDataSource<Employee>;

  headers: string[] = ['Id', 'Title', 'Category'];
  columns: string[] = ['id', 'title', 'category'];
  binders: string[] = ['id', 'title', 'category.name'];

  cscolumns: string[] = ['csid', 'cstitle', 'cscategory'];
  csprompts: string[] = ['Search by Id', 'Search by Title', 'Search by Category'];

  uiassist: UiAssist;
    ngOnInit(): void {
        this.initialize();
    }

    initialize(){

    }

    constructor(private fb:FormBuilder) {

      this.form = this.fb.group({
        "title": new FormControl('', [Validators.required]),
        "description": new FormControl('', [Validators.required]),
        "photo": new FormControl('', [Validators.required]),
        "category": new FormControl(''),
      });

      this.uiassist = new UiAssist(this);

      this.csearch = this.fb.group({
        "csid": new FormControl(),
        "cstitle": new FormControl(),
        "cscategory": new FormControl(),
      });

    }

  selectImage(e: any): void {
    if (e.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.imageempurl = event.target.result;
        this.form.controls['photo'].clearValidators();
      }
    }
  }

  clearImage(): void {
    this.imageempurl = 'assets/default.png';
    this.form.controls['photo'].setErrors({'required': true});
  }

  // filterTable(): void {
  //
  //   const cserchdata = this.csearch.getRawValue();
  //
  //   this.data.filterPredicate = (employee: Employee, filter: string) => {
  //     return (cserchdata.csnumber == null || employee.number.toLowerCase().includes(cserchdata.csnumber)) &&
  //       (cserchdata.cscallingname == null || employee.callingname.toLowerCase().includes(cserchdata.cscallingname)) &&
  //       (cserchdata.csgender == null || employee.gender.name.toLowerCase().includes(cserchdata.csgender)) &&
  //       (cserchdata.csdesignation == null || employee.designation.name.toLowerCase().includes(cserchdata.csdesignation)) &&
  //       (cserchdata.csname == null || employee.fullname.toLowerCase().includes(cserchdata.csname)) &&
  //       (cserchdata.csmodi == null || this.getModi(employee).toLowerCase().includes(cserchdata.csmodi));
  //   };
  //
  //   this.data.filter = 'xx';
  //
  // }

}
