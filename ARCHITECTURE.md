# Business Requirements

## Must-Haves

-   Display user pets
-   Categorize pets based on species
-   Daily habit log
-   CRUD operations on habits and pets
    -   Weird habits
    -   Poop stuff
    -   What she ate and if they got sick
    -   Weight
    -   Last medication date
    -   When the nails were last clipped
    -   Last time the dog went postal
    -   Last bath
    -   Destruction of stuff
-   User accounts
-   Pet profiles
    -   Vet information

## Nice-to-Haves

-   Social stuff (looking at other pet profiles that you don't own, commenting
    on photos and stuff, whatever)
-   \*Export journals to an Excel file
-   Graphs visualizing weight loss/gain
-   Upload receipts (total cost of being a pet parent)
-   Social Auth (facebook, twitter, etc.)

## Technical Architecture

### Front End

-   React
-   Bootstrap OR MaterializeUI given time

### Back End

-   User Accounts (JWT)
-   Node Server
-   Sequelize OR Objection

## Database Design

### Migration Files

⭐   Users
    ⭐   Email
    ⭐   Username
    ⭐   First Name
    ⭐   Last Name
⭐   Pets
    ⭐   **FK:** Owner ID
⭐   Pet Information
    ⭐   **FK:** Species ID
    ⭐   **FK:** SubSpecies ID
    -    **FK:** Breed ID
    ⭐   DOB
    ⭐   Weight
    ⭐   Bio
    ⭐   Photo
⭐   Species
    ⭐   E.G. (mammal, reptile, amphibian)
⭐   SubSpecies
    ⭐   E.G. (dog, cat, rabbit, turtle)
⭐   Breed
    ⭐   E.G. (Weimaraner, Flame-Point Siamese, etc.)
⭐   Habit Log
    ⭐   **FK:** Pet ID
    ⭐   Habit text (like a status update or a diary)
⭐   Vet Information
    ⭐   **FK:** Pet ID

### Model Files

⭐ User Model
    ⭐ A Pet HasMany Pet where `pets` is joined from `user.id` to `pets.owner_id`
⭐ Species Model
⭐ SubSpecies Model
⭐ Breed Model
⭐ Pet Model
    ⭐ A Pet BelongsToOne `owner` where the `owner` is joined from `pet.owner_id` to `user.id`
    ⭐ A Pet BelongsToOne Species where the `species` is joined from `pet.species_id` to `species.id`
    ⭐ A Pet BelongsToOne SubSpecies where the `subspecies` is joined from `pet.subspecies_id` to `sub_species.id`
    ⭐ A Pet BelongsToOne Breed where the `breed` is joined from `pet.breed_id` to `breed.id`
    ⭐ A Pet HasMany HabitLog where the `habit_logs` are joined from `pet.id` to `habit_log.pet_id`
    ⭐ A Pet HasOne VetInfo where the `vet_info` is joined from `pet.id` to `vet_info.pet_id`
⭐ HabitLog Model
⭐ VetInfo Model

## Backend

⭐ Create a basic Express app (just make it connect)
    ⭐ Connect to database using knex + Objection
- Create the API endpoints
    ⭐ GET /api/<resource>
        ⭐ e.g. /api/users => Return Chris + Allison
    ⭐ GET /api/<resource>/:id (dynamic)
        ⭐ e.g. /api/users/1 => Return Chris
    ⭐ POST /api/<resource>
    ⭐ PATCH /api/<resource>/:id
    ⭐ DELETE /api/<resource>/:id
⭐ Create the CRUD operations for each resource
    ⭐ Create => POST
    ⭐ Read => GET
    ⭐ Update => PATCH
    ⭐ Delete => DELETE

## Knex Instructions

To make a new table, you need to make a "migration file"

To do that you use the command `npx knex migrate:make short-description-here`

Write table file

After writing the migration, you need to run it

To do that you use the command `npx knex migrate:latest`

If you make a mistake and have to change a migration file

Use the command `npx knex migrate:rollback` and then migrate to latest again

After creating migrations, create your seed files and then run `npx knex seed:run`

## Front End

### Pages
- Home Page
- Sign-in/Sign-up Page
- "Dashboard"
- Pet Home Page
- Settings Page

### User Capabilities

- Home Page
    - Brochureware
    - User should see some general information on the website
    - All the other shit goes in the menubar (sign in/up button, etc.)
- Sign-in/Sign-up Page
    - Form
    - Button
    - email, first+last name, password
- Dashboard
    - User should see their beautiful visage
    ⭐ User should see a list of their ugly pets
        - Each pet should have their ugly face
        ⭐ Each pet should have its name
        - User should be able to click on the pet's name to get to its page
    - User should be able to add a pet
        - The user should be able to click an "Add" button that will trigger an action to add a pet.
            - At first, this action should add a "default" pet.
                
            - In the end, it should open a modal in which the user will enter their pet's information.
        - The 'Add a Pet' functionality is a modal
        - Inside the modal the user should be able to add the pet's name and picture
        - User should be able to add additional information
- Pet Page
    - User should see the pet's information up top
        - User should be able to edit the pet's information
        - Modal
        - There should be a way to delete the pet, presumably a trash icon because you're a terrible person if you're deleting your pet and belong in the trash
    - User should see vet information below the pet information
        - User should be able to edit the vet's information
        - Modal
    - User should see the habit log underneath the vet information
        - Just a list
        - User should be able to perform CRUD actions on a habit log entry
- Settings Page
    - User should be able to reset or change password/email
    - Delete account because you're a loser with no pets

### Action Plan

⭐ Hook up front end to back end
⭐ Create each page
⭐ Link pages together with react router
⭐ Create navigation between pages
- Create dashboard and give it functionality (so you can add a pet and all that jazz)
- Create the pet page and give it functionality (habit log, info editing, etc.)
- Create login/signup page
- Create home page
