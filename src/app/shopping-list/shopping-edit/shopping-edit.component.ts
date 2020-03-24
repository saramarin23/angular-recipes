import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("nameInput", { static: false }) nameInputRef: ElementRef;
  @ViewChild("amountInput", { static: false }) amountRef: ElementRef;

  constructor(private slService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.slService.addIngredient(newIngredient);
  }
}
