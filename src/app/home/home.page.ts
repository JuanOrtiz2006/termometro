  import { Component } from '@angular/core';
  import { Database, object, ref, set } from '@angular/fire/database';

  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {
    valor: number=0;
    color: string="";

    constructor(private database:Database) {}

    route:any;

    ngOnInit() {
      const route = ref(this.database, 'temperatura' );
      object(route).subscribe(attributes => {
        const dato = attributes.snapshot.val();
        this.valor = dato;
        this.medir(this.valor);
      });

      if (this.valor>=0 && this.valor<=30 ){
        this.color="--level-color: #54ca3c;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }

      if (this.valor>30 && this.valor<60 ){
        this.color="--level-color: #fbff02;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }
      if (this.valor>60 && this.valor<100 ){
        this.color="--level-color: #ff0202;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }
      
    }
    
    async medir(valor: number){
      this.valor = valor;
      if (this.valor>=0 && this.valor<=30 ){
        this.color="--level-color: #54ca3c;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }

      if (this.valor>30 && this.valor<60 ){
        this.color="--level-color: #fbff02;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }
      if (this.valor>60 && this.valor<100 ){
        this.color="--level-color: #ff0202;";
        this.route = set(ref(this.database,'temperatura') , this.valor); /*direccion a donde ir dentro de la base de datos */
      
      }
    }
  }
