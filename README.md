# Property Projects Grid

A responsive React application for displaying property project cards with custom pagination and an image slider, built without using any external libraries.

## Features

- **Responsive Grid Layout**: Adjusts to different screen sizes.
- **Custom-built Image Slider**: Includes hover navigation.
- **Manual Pagination**: Implemented with page number display.
- **API Integration**: Fetches property data with error handling.
- **Loading State Management**: Shows a loading spinner during data fetching.

## Implementation Details

### Project Structure

The application is structured into several components:

- **App**: Main component handling API requests and state management.
- **ProjectGrid**: Responsible for laying out the project cards in a responsive grid.
- **ProjectCard**: Displays individual property information.
- **ImageSlider**: Custom implementation for image navigation.
- **Pagination**: Custom-built pagination with numbered pages.
- **ErrorMessage**: Displays error states with retry functionality.
- **LoadingSpinner**: Shows loading state while fetching data.

### Technical Implementation

#### API Integration

- **Fetch API**: Utilized to get property data.
- **Error Handling**: Proper error handling is in place for API requests.
- **Loading State**: Added loading states to improve user experience during data fetching.

#### Custom Image Slider

- **React State**: Built without external libraries using React state for managing the image slider.
- **Hover Navigation**: Navigation arrows appear on hover for better user interaction.
- **Dot Indicators**: Dots represent available images in the slider.
- **Responsive**: Designed to work across different screen sizes.

#### Custom Pagination

- **Page Navigation**: Managed with React state for efficient page transitions.
- **Page Controls**: Includes first, previous, next, and last page buttons for easy navigation.
- **Active Page**: Highlights the active page for user clarity.
- **Dynamic Page Numbers**: Generates the appropriate page numbers based on the total pages.

#### Responsive Design

- **Grid Layout**: Adjusts from 3 columns to 2 columns to 1 column based on screen size.
- **Mobile-friendly**: Optimized interface for mobile and tablet devices.
- **Appropriate Spacing**: Ensures adequate spacing between elements for clean and consistent design.

#### Error Handling

- **Error Display**: User-friendly error messages are displayed when issues occur.
- **Retry Functionality**: Includes retry functionality for failed API requests.
- **Fallback Image**: A placeholder image is shown for properties without images.

## How to Run the Project

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Trabajador/property-projects

2. **Navigate to the project directory:**

    ```bash
    cd property-projects-grid

3. **Install dependencies:**

    ```bash
    npm install

4. **Start the development server:**

    ```bash
    npm start

5. **Open the browser and go to http://localhost:3000 to view the application.**