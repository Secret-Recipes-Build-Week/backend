# backend

[POST] Sign Up/Register New User
Endpoint: /api/auth/register
  body = {
    firstName: "",
     lastName: "",
     email: "",
  password: ""
  }

[POST] login user
Endpoint: /api/auth/login
  body = {
   email: "",
   password: ""
  }

[GET] user information
Endpoint: /api/user/:id
params = {id}

[POST] new recipe
Endpoint: /api/user/:id/recipes
Requires: {title: ""}



Sample User 1:
email: rloweth9@intel.com
password: MH8A0GkaOkQU

Sample User 2:
email: lwhye4@diigo.com
password: z35ZAJZzYNR
