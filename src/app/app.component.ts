import { Component } from '@angular/core';
import {Empleado} from './models/empleado';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  empleadoArray:Empleado[]=[
  {id:1,nombre:"Ale",pais:"Honduras"},
  {id:2,nombre:"Mita",pais:"USA"},
  {id:3,nombre:"Dina",pais:"Francia"},
  {id:4,nombre:"Alejandra",pais:"Costa Rica"}
  ];

   selectEmpleado: Empleado=new Empleado();
  
  addOrEdit(){
  	if(this.selectEmpleado.id===0){
  		this.selectEmpleado.id= this.empleadoArray.length+1;
  	    this.empleadoArray.push(this.selectEmpleado);

  	}
  	this.selectEmpleado=new Empleado ();

  }

  openForEdit(empleado: Empleado){
  	this.selectEmpleado=empleado;

  }

   delete(){
   	if(confirm('Estas seguro de querer eliminarlo?')){
   		this.empleadoArray=this.empleadoArray.filter(x=>x!= this.selectEmpleado);
  	this.selectEmpleado=new Empleado();
   	}
  	
  }


}
