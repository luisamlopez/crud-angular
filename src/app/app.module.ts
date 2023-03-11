import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';

import { RecipeService } from './service/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RecipeFormComponent,
    RecipeComponent,
    RecipeListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
