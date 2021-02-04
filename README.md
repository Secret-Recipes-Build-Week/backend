# Secret-Recipes-Backend Docs

Deployment url: "https://familyrecipe-app-backend.herokuapp.com/api"

   **Sample Users**
| email              | password     |
| ------------------ | ------------ |
| rloweth9@intel.com | MH8A0GkaOkQU |
| lwhye4@diigo.com   | z35ZAJZzYNR  |
| fgegay2@cpanel.net | OQPeGs9y     |

## Authorization

### POST /api/auth/register

This creates a new user in the database, and returns a _status(201)_ on successful login

| Name      | Requried | Type   | Unique? | Description                |
| --------- | -------- | ------ | ------- | -------------------------- |
| firstname | yes      | string | no      | the first name of the user |
| lastname  | yes      | string | no      | the last name of the user  |
| email     | yes      | string | yes     | the email of the user      |
| password  | yes      | string | no      | the password of the user   |

### POST /api/auth/login

This creates and returns a _token_, _userID_, and _uuid_ if login was successful

| Name     | Requried | Type   | Unique? | Description              |
| -------- | -------- | ------ | ------- | ------------------------ |
| email    | yes      | string | yes     | the email of the user    |
| password | yes      | string | no      | the password of the user |

### GET /api/preview

Selects and returns three random public recipes to display on the homepage
_returns recipe title, and keyword descriptions_

## Users

    The below endpoints require you to be logged in with a token in your header
**Requires Authentication**

### GET /api/user/:id

Returns an object of all associated user data

User Object:

| Name      | Type    | Description                             |
| --------- | ------- | --------------------------------------- |
| Id        | Integer | Autoincremented Id                      |
| firstName | String  | First Name of the user                  |
| lastName  | String  | Last Name of the article                |
| Email     | String  | Email of the user                       |
| uuid      | String  | Autogenerated additional unique userID  |
| Recipes   | array   | Array of recipes associated to the user |

### GET /api/user/:id/recipes

Returns an array of all user associated recipes

### POST /api/user/:id/recipes

Creates and returns a newly created _recipe_

| Name         | Requried | Type          | Unique? | Description                                            |
| ------------ | -------- | ------------- | ------- | ------------------------------------------------------ |
| id           | yes      | URL Parameter | yes     | The Id of the user adding a recipe                     |
| title        | yes      | string        | no      | The title of the recipe                                |
| source       | no       | string        | no      | The title of the recipe                                |
| private      | no       | boolean       | no      | Recipe is viewable to all users (defaults to false)    |
| keywords     | no       | string        | no      | keywords to the recipe                                 |
| categories   | no       | Array         | no      | Array of strings, categories of recipe                 |
| ingredients  | no       | Array         | no      | Array of strings ex: ["1lb beef", "2 buns"]            |
| instructions | no       | Array         | no      | Array of objects ex: [{step: 1, text: "Preheat Oven"}] |

### GET /api/recipes/

Returns an array of all user recipes with the parameter {private: false}

### GET /api/recipes/:title

Returns an array of all public recipes that include the parameter in its title

### GET /api/recipes/:category

Returns an array of all public recipes that contain the parameter as a category

### GET /api/recipes/

Returns an array of all user recipes with the parameter {private: false}

     - - - - - - - - - 

## Recipes

For the following endpoints:

| Name | Requried | Type          | Unique? | Description                                  |
| ---- | -------- | ------------- | ------- | -------------------------------------------- |
| id   | yes      | URL Parameter | yes     | The ID of the recipe to perform an action on |

### PUT /api/recipes/:id

Updates _title, source, keywords,_ and _private_ recipe values
Returns the _updated recipe_ by id

### DELETE /api/recipes/:id

Returns the updated list of recipes recipes for user

### GET /api/recipes/:id/ingredients

Returns an array of all recipe associated ingredients, (requires recipe ID as param)

     - - - - - - - - - 

## Updating parts of a recipe

### POST /api/recipes/:id/ingredient

Adds an ingredient to a recipe and returns the _updated ingredient_ list

### PUT /api/ingredients/:id

Update an ingredient and Returns the _updated ingredient_ by id

### DELETE /api/ingredients/:id

Delete an ingredient and Returns the _updated ingredient_ by id

- - - - - - - - - - - - - - - - - - - -

### POST /api/recipes/:id/instruction

Adds a step to a recipe and returns the _updated instructions_ list

### PUT /api/instructions/:id

Updates an instruction and Returns the _updated instruction_ object

### DELETE /api/instructions/:id

Delete an instruction and Returns the _updated instructions_ object
