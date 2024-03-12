![Marverl Heroes Concept Project](./static/Pasted%20image.png)

# 🚀 Search for Heroes using the marvel API 🚀

## Description
This project is a concept project of marvel heroes using the marvel API, following design from figma.

# 🚀 Deployed at 🚀 [Link Text](https://marvel-heroes-zara.netlify.app)

### Technologies Used
- Serverless Netlify Functions
- Gatsby v5.13.1
- TypeScript v5.1.6
- React v18.2.0
- Jest v29.7.0
- Axios v1.6.7
- Node v18.2.0
- Other 

## Features
- View heroes
- Search for heroes
- Filter heroes
- Favorites
- View hero details
- ...

## To-Do
- Complete Unit Tests
- Completly abstract the API calls

## Installation
To install the project, follow these steps:
1. Clone the repository.
2. Run `yarn install` to install the dependencies.
3. Start the development server using `yarn develop`.
4. You should get and setup keys from MARVEL API. [Link Text](https://developer.marvel.com/account)

## Usage
After installation, you can use the project by following these steps:
3. Start the development server using `yarn develop`. and open `http://localhost:8888`

## Contributing
If you'd like to contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.


# Marvel Characters App

## Description

This project is a web application that allows users to browse Marvel characters and view their details.

## Views

### View 1 - Characters List

- [x] Develop an interface based on the design provided in Figma.
- [x] Implement character search functionality using API filtering.
- [x] Initially display the first 50 characters.
- [ ] Include:
  - [x] Logo icon.
  - [x] Icon showing the number of favorite characters.
  - [x] Search bar for searching characters by name.
  - [x] Real-time results counter.
  - [x] List of character results with image, name, and option to add to favorites.
- [x] Clicking on a result should redirect to the character detail view.
- [x] Clicking on the favorite icon should change its color, update the favorites counter, and allow users to remove characters from favorites. Favorite information must persist across views.
- [x] Implement favorites filter: clicking on the favorites icon should display only favorite characters. Clicking on the Marvel logo should return to the main characters list.

### View 2 - Character Details

- [x] Develop an interface based on the design provided in Figma.
- [ ] Include:
  - [x] Logo icon that redirects to the main characters list.
  - [x] Icon showing the number of favorite characters that redirects to the main characters list.
  - [x] Character image, title, description, and option to add to favorites.
  - [ ] List of the character's comics sorted by release date, displaying only the first 20 comics.

## Stack

- [x] React >= 17
- [x] Node >= 18
- [x] CSS, SASS, or StyledComponents
- [x] Avoid using component libraries such as antd, reactstrap, materialui, etc. Components must be created from scratch.
- [x] Use React Context API for state management.

## Requirements

- [x] Implement testing.
- [x] Ensure responsiveness.
- [x] Ensure accessibility.
- [x] Use Linters and Formatters.
- [x] Keep the browser console free of errors and warnings.
- [x] Include a README explaining how to run the application, architecture, structure, and relevant project information.

### Optional

- [x] Deploy the application.
- [x] Use SSR (Next.js).
- [x] Use CSS variables.
