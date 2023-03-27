import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/core/services/empleado.service';
import { Empleado } from 'src/app/core/models/empleado';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionComponent } from 'src/app/shared/components/confirmacion/confirmacion.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'nombre',
    'correo',
    'estadoCivil',
    'fechaIngreso',
    'sexo',
    'telefono',
    'acciones',
  ];
  dataSource = new MatTableDataSource<Empleado>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private readonly empleadoService: EmpleadoService,
    public dialog: MatDialog
  ) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadDataTable() {
    this.dataSource = new MatTableDataSource(this.empleadoService.empleados);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    this.reloadDataTable();
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(ConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Estas seguro que deseas eliminar el empleado?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      
      if (result === 'aceptar') {
        this.empleadoService.eliminarEmpleado(index);
        this.reloadDataTable();
      }
    });
  }
}
