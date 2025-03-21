Property Projects Grid
A responsive React application for displaying property project cards with custom pagination and image slider, built without using any external libraries.
Features

Responsive grid layout that adjusts to different screen sizes
Custom-built image slider with hover navigation
Manual pagination implementation with page number display
API integration with error handling
Loading state management

Implementation Details
Project Structure
The application is structured into several components:

App: Main component handling API requests and state management
ProjectGrid: Responsible for laying out the project cards in a responsive grid
ProjectCard: Displays individual property information
ImageSlider: Custom implementation for image navigation
Pagination: Custom-built pagination with numbered pages
ErrorMessage: Displays error states with retry functionality
LoadingSpinner: Shows loading state while fetching data

Technical Implementation

API Integration

Implemented fetch API to get property data
Added proper error handling for API requests
Included loading states for better user experience


Custom Image Slider

Built without external libraries using React state
Navigation arrows appear on hover
Dot indicators for available images
Responsive design for all screen sizes


Custom Pagination

Implemented page navigation using React state
First, previous, next, and last page buttons
Active page highlighting
Dynamic page number generation


Responsive Design

Grid layout adjusts from 3 columns to 2 columns to 1 column based on screen size
Mobile-friendly interface
Appropriate spacing and sizing for all elements


Error Handling

Proper error display with user-friendly messages
Retry functionality for failed API requests
Fallback image for properties without images



How to Run the Project

Clone the repository

git clone https://github.com/your-username/property-projects-grid.git

Navigate to the project directory

cd property-projects-grid

Install dependencies

npm install

Start the development server

npm start

Open http://localhost:3000 to view it in the browser