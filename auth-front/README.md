Getting started
Installation

Clone the repository

git clone git@github.com:djsalma01/Dashboard.git 
Switch to the repo folder

cd Dashboard/auth-backend
Install all the dependencies using composer

composer install
Copy the example env file and make the required configuration changes in the .env file

cp .env.example .env
Generate a new application key

php artisan key:generate
Generate a new JWT authentication secret key

php artisan jwt:generate
Run the database migrations (Set the database connection in .env before migrating)

php artisan migrate
Start the local development server

php artisan serve
You can now access the server at http://localhost:8000

Start ReactJS APP

cd Dashboard/auth-front
Install all the dependencies using npm

npm install

Start the local Reactjs App

npm start
You can now access the server at http://localhost:3000