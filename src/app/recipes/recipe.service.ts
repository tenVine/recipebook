import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'a test',
      'simply a test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'a test2',
      'simply a test2',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
      [
        new Ingredient('Apple', 1),
        new Ingredient('Fries', 20)
      ]
    )
  ];
  
  constructor(private _shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  onAddShoppingListIngredient(ingredients: Ingredient[]) {
    this._shoppingListService.addIngredients(ingredients);
  }
}
