## Принцип работы:

Ввести в поле название искомой организации:<br />
Если организация существует на github, то выведется список ее репозиториев, по 10 штук на странице.<br />
Для переключения между страницами есть пагинтор, в котором можно использовать стрелки:  <br />
"← →" - переключение на одну страницу и "⇐ ⇒" - к первой или последней странице соответственно <br />
Кроме того, можно переключаться на следующую или предыдущую страницу, кликая на ее номер в паганиторе.<br />
Если такой компании не существует на github, то выведется соответствующее сообщение.<br />

## В проекте использованы:
1. [Axios](https://github.com/axios/axios)
2. [Parse link header](https://www.npmjs.com/package/parse-link-header)
3. [React-redux](https://github.com/reduxjs/react-redux)
4. [Redux](https://github.com/reduxjs/redux)
5. [Redux-thunk](https://github.com/reduxjs/redux-thunk)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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
