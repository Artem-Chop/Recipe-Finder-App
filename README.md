Recipe Finder App
Overview
The Recipe Finder App is a Next.js application that allows users to search for recipes based on keywords, cuisine type, and preparation time. The app fetches data from the Spoonacular API and displays results with a user-friendly interface.
Features
•	Recipe Search: Users can search by dish name, cuisine type, or maximum preparation time.
•	Dynamic Recipe List: Fetches recipes based on user input and displays them in a grid format.
•	Recipe Details Page: Users can click on a recipe to view detailed information, including ingredients.
•	Styled with Tailwind CSS: Ensures a modern and responsive UI.
Installation and Setup
Prerequisites
•	Node.js (>= 16.x)
•	npm or yarn
Steps to Run Locally
1.	Clone the repository:
2.	git clone https://github.com/your-repo/recipe-finder-app.git
cd recipe-finder-app
3.	Install dependencies:
4.	npm install
5.	# or
yarn install
6.	Create a .env.local file in the root directory and add your Spoonacular API key:
NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
7.	Run the development server:
8.	npm run dev
9.	# or
yarn dev
The app will be available at http://localhost:3000.
Building for Production
To build the application for production, run:
npm run build
npm start
This will create an optimized build in the .next folder.
