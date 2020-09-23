# Metric Imperial Converter

A full stack application that converts metric to imperial and imperial to metric values for the Freecodecamp curriculum.

**Final Project:** [https://continuous-marmalade-cornucopia.glitch.me](https://continuous-marmalade-cornucopia.glitch.me)

**User Story #1:** I will help prevent the client from trying to guess(sniff) the MIME type.

**User Story #2:** I will prevent cross-site scripting (XSS) attacks.

**User Story #3:** I can GET /api/convert with a single parameter containing an accepted number and unit and have it converted.

**User Story #4:** I can convert 'gal' to 'L' and vice versa. (1 gal to 3.78541 L)

**User Story #5:** I can convert 'lbs' to 'kg' and vice versa. (1 lbs to 0.453592 kg)

**User Story #6:** I can convert 'mi' to 'km' and vice versa. (1 mi to 1.60934 km)

**User Story #7:** If my unit of measurement is invalid, returned will be 'invalid unit'.

**User Story #8:** If my number is invalid, returned with will 'invalid number'.

**User Story #9:** If both are invalid, return will be 'invalid number and unit'.

**User Story #10:** I can use fractions, decimals or both in my parameter(ie. 5, 1/2, 2.5/6), but if nothing is provided it will default to 1.

**User Story #11:** My return will consist of the initNum, initUnit, returnNum, returnUnit, and string spelling out units in format {initNum} {initial_Units} converts to {returnNum} {return_Units} with the result rounded to 5 decimals.

**User Story #12:** All 16 unit tests are complete and passing.

**User Story #13:** All 5 functional tests are complete and passing.

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Built With

- [Bootstrap](http://www.dropwizard.io/1.0.2/docs/) - The CSS framework
- [React](https://reactjs.org/) - JavaScript library
- [Node](https://nodejs.org/en/) - JavaScript runtime environment

## Authors

- **Peter Huang** - Principal developer - [Portfolio](https://www.peterhuang.net/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- [Hugo Giraudel](https://hugogiraudel.com/) - Prefix Mixin in Sass
