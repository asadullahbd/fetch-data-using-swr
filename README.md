
markdown
Copy code
# SWR Data Fetching Example

This is a simple example of data fetching and pagination using **SWR** in a React application. The app displays a list of posts fetched from a public API with pagination controls.

## Features

- Data fetching with SWR (Stale-While-Revalidate).
- Pagination to navigate through the data.
- Loading spinner while fetching data.
- Error handling with a Bootstrap alert.
- Clean and responsive UI using React-Bootstrap.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/swr-data-fetching.git
Navigate to the project directory:

bash
Copy code
cd swr-data-fetching
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
Usage
Open your browser and navigate to the development server URL provided by Vite.
View a paginated table of posts fetched from https://jsonplaceholder.typicode.com/posts.
Use the "Previous" and "Next" buttons to navigate between pages.
Dependencies
The project uses the following dependencies:

Main Dependencies
json
Copy code
{
  "bootstrap": "^5.3.3",
  "react": "^18.3.1",
  "react-bootstrap": "^2.10.7",
  "react-dom": "^18.3.1",
  "swr": "^2.3.0"
}
Development Dependencies
json
Copy code
{
  "@eslint/js": "^9.17.0",
  "@types/react": "^18.3.18",
  "@types/react-dom": "^18.3.5",
  "@vitejs/plugin-react": "^4.3.4",
  "eslint": "^9.17.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.16",
  "globals": "^15.14.0",
  "vite": "^6.0.5"
}
Refer to package.json for the full list.

API Used
Endpoint: https://jsonplaceholder.typicode.com/posts
The app fetches all posts at once and handles pagination client-side.
How It Works
The data is fetched using SWR with the fetcher function.

The table displays a paginated list of posts.

Pagination is implemented by slicing the fetched data:

javascript
Copy code
const startIndex = (page - 1) * limit;
const endIndex = startIndex + limit;
const paginatedPosts = data.slice(startIndex, endIndex);
Navigation buttons update the page state, and the displayed posts change accordingly.

Contributing
Contributions are welcome! If you'd like to contribute, follow these steps:

Fork the repository.
Create a new branch:
bash
Copy code
git checkout -b feature/your-feature-name
Make your changes and commit:
bash
Copy code
git commit -m "Add your feature description"
Push to the branch:
bash
Copy code
git push origin feature/your-feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Built with ❤️ by Asad.