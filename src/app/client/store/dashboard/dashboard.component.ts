import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/dto/producto.dto';
import { User } from 'src/app/dto/user.dto';
import { LoadJsService } from 'src/app/service/load-js.service';
import { ProductoService } from 'src/app/service/producto.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user?: User;
  productos: Producto[] = [];

  constructor(
    private productoService: ProductoService,
    private _packJS: LoadJsService,
    private userService: UserService
  ) {
    _packJS.changeJS(['slider'], 'body');
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.user = data;
      },
    });

    this.getProductos();
  }

  logout() {
    this.userService.setUser(undefined);
    localStorage.removeItem('user');
  }

  getProductos() {
    this.productoService.get().subscribe({
      next: (data) => {
        this.productos = data;
      },
    });
  }
}
