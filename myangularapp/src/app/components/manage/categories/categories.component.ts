import { Component, inject } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatButtonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  categoryService = inject(CategoryService);

  displayedColumns: string[] = ['_id', 'name', 'actions'];
  dataSource = new MatTableDataSource<any>([]);


  constructor() {
    this.categoryService.getCategories().subscribe((result: any) => {
      console.log('API DATA:', result);

      // ✅ IMPORTANT
      this.dataSource.data = result;

      console.log("this.dataSource.data " , this.dataSource.data )
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editCategory(category: any) {
    // TODO: Implement edit functionality
    console.log('Edit category:', category);
  }

  deleteCategory(category: any) {
    // TODO: Implement delete functionality
    console.log('Delete category:', category);
  }

  addCategory() {
    // TODO: Implement add functionality
    console.log('Add new category');
  }
}
