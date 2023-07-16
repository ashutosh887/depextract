# depextract 

**depextract is a CLI tool to extract dependencies from package.json.**

[![jsDocs.io](https://img.shields.io/badge/jsDocs.io-reference-blue)](https://www.jsdocs.io/package/depextract)

## Use case
Suppose you are trying to upgrade your project or create a new project with same dependencies as another project.
Now, the first thing you might require is list of Production and Dev Dependencies.

To extract and generate a CLI Script based on your Package manager configuration, you may use <a href="https://www.npmjs.com/package/depextract" target="_blank">depextract</a>


## Installation:
```
  npx depextract
```


## Usage
- Open the directory where package.json resides
- Use:
  ```
    npx depextract
  ```
- Select among the most suitable options:
  ```
      ? Select location of package.json
      (Use arrow keys)
      ❯ current directory
        another directory (provide path in next step)
  ```
- Select the package manager to be used for upcoming project (npm, yarn, pnpm, etc.)
- Generated scripts reside in **scripts.sh**


## Author
- [Ashutosh Jha](https://www.github.com/ashutosh887)


## Blogs:
- Introductory: [Hashnode](https://ashutosh887.hashnode.dev/introducing-depextract)

## License
This project is under the [MIT License](https://choosealicense.com/licenses/mit/)
