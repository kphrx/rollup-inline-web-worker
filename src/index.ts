import type { Plugin } from 'rollup';

export default (options: {} = {}): Plugin => {
  return {
    name: "inline-web-worker",
  };
}
