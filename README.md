# rollup-typescript-plugin-template

1. Change package name, and repository url
   ```console
   $ npm pkg set name="@<scope>/rollup-plugin-<plugin-name>"
   $ npm pkg set repository.url="git+https://github.com/<owner>/<repo>.git"
   $ npm pkg set bugs.url="https://github.com/<owner>/<repo>/issues"
   $ npm pkg set homepage="https://github.com/<owner>/<repo>#readme"
   ```

2. Change plugin name
   ```diff
    export default (options: {} = {}): Plugin => {
      return {
   -    name: "typescript-plugin-template",
   +    name: "<plugin-name>",
      };
    }
   ```
