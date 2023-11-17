# prompt-fe

This is a `Vite React.js` project.

## Folder Structure

```
prompt-fe
├── node_modules
├── public
│   ├─ assets
│     ├─ icons
│     ├─ images
└── src
    ├── components
    ├── hooks
    ├── layouts
    ├── pages
    ├── sections
    ├── services
    ├── utils
    ├── index.css
    ├── main.jsx
    ├── routes.jsx
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc
├── index.html
├── README.md
├── vite.config.js
```

## Absolute Imports

This project uses absolute imports to simplify module import paths. **Absolute imports** allow you to specify the import paths from the project's base directory, making it more convenient and less error-prone.

In the `jsconfig.json` file, the following configuration is used:

```
{
	"compilerOptions": {
		"baseUrl": ".",
		"paths": {
			"@pages/*": ["./src/pages/*"],
			"@components/*": ["./src/components/*"],
			"@hooks/*": ["./src/hooks/*"]
		}
	},
	"include": ["src"]
}
```

Importing a page:

```
import HomePage from '@pages/HomePage';
```

Importing a component:

```
import Header from '@components/Header';
```

Importing a page:

```
import useCustomHook from '@hooks/useCustomHook';
```

## Getting Started

First, install dependencies

```bash
npm install
```

Now, you can start a local web server by running:

```bash
npm run dev
```

The following log message should be displayed in console output:

```bash
server running on port 5173
```

Visit `http://localhost:5173` in your browser just to confirm routes are configured and working properly. If all is working properly, you should get the below response on browser.

```js
Welcome to Prompt, your one stop printing solution.
```

# Commit Standards

## Branches

- **dev** -> pr this branch for everything `frontend` related
- **main** -> **dont touch** this branch, this is what is running in production.

## Contributions

Prompt is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

1. Clone the repo `git clone https://github.com/hslcreators/prompt-fe`.
2. Open your terminal & set the origin branch: `git remote add origin https://github.com/hslcreators/prompt-fe.web.git`
3. Pull origin `git pull origin dev`
4. Create a new branch for the task you were assigned to, eg : `git checkout -b feat-file-page`
5. After making changes, do `git add .`
6. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.
7. To make sure there are no conflicts, run `git pull upstream dev`.
8. Push changes to your new branch, run `git push -u origin feat-file-page`.
9. Create a pull request to the `dev` branch not `main`.
10. Ensure to describe your pull request.
11. > If you've added code that should be tested, add some test examples.

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify backend, frontend or test files                                             |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the backend, frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.
