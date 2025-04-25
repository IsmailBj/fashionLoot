!Project Documentation: Loot Box System

Overview

    This project is an online loot box system inspired by CS:GO loot crate openings. It allows users to open loot boxes, deposit points, and receive random branded items based on item rarity. The system consists of a front-end user interface, a back-end server to handle requests, and an admin panel for managing loot boxes and sales.

!Project Setup

    • Clone
        git clone https://github.com/your-repository/fashion-loot-frontend.git
        cd fashion-loot-frontend

    • Install dependencies
        npm install or npm i

    • Run the application
        npm run start

    extra info
        Your front-end will be live at http://localhost:3001 port 3000 will be reserved for the BackEnd part

!Key Features

    • Home Page: Displays a list of available loot boxes, banners, and other dynamic content.

    • Loot Box Room: Users can view and open loot boxes, where the results are displayed after a loot box is opened.

    • User Profile: Users can view and manage their profile information, including transaction history and wallet balance.

    • Deposit: Users can deposit points into their accounts to purchase loot boxes.

    • Login/Registration: Users can register for an account or log in with their credentials to interact with the system.

!API Interaction
The front-end interacts with the backend through API requests using Axios. Key API interactions include:

    User Authentication: Registering and logging in users with POST requests to /api/user/register and /api/user/login.

    Loot Box Operations: Fetching available loot boxes from /api/boxes/all and triggering loot box openings with /api/user/open-box.

    User Data: Fetching user profile data with /api/user/user-data.

    Deposit Points: Posting points to the user’s account with /api/user/buy-coins.

!Back-End (Node.js, Express, MongoDB)
The backend system with the documentation can be found on this link: [Back-End (Node.js, Express, MongoDB)](https://github.com/IsmailBj/FashionLootBN)
