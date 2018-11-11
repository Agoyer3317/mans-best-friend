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

✅   Users
    ✅   Email
    ✅   Username
    ✅   First Name
    ✅   Last Name
✅   Pets
    ✅   **FK:** Owner ID
✅   Pet Information
    ✅   **FK:** Species ID
    ✅   **FK:** SubSpecies ID
    ✅   DOB
    ✅   Weight
    ✅   Bio
    ✅   Photo
✅   Species
    ✅   E.G. (mammal, reptile, amphibian)
✅   SubSpecies
    ✅   E.G. (dog, cat, rabbit, turtle)
-   Breed
    -   E.G. (Weimaraner, Flame-Point Siamese, etc.)
-   Habit Log
    -   **FK:** Pet ID
    -   Habit text (like a status update or a diary)
-   Vet Information
    -   **FK:** Pet ID

## Knex Instructions

To make a new table, you need to make a "migration file"

To do that you use the command `npx knex migrate:make short-description-here`

Write table file

After writing the migration, you need to run it

To do that you use the command `npx knex migrate:latest`

If you make a mistake and have to change a migration file

Use the command `npx knex migrate:rollback` and then migrate to latest again
