import type { Plugin } from 'rollup';

interface Options {
  esm: boolean;
  credentials: 'omit' | 'same-origin' | 'include';
}

export default (options: Partial<Options> = {}): Plugin => {
  return {
    name: "inline-web-worker",

    transform(code, id) {
      const moduleInfo = this.getModuleInfo(id);
      const attributes = moduleInfo?.attributes as Partial<Record<string, string>> | undefined;
      if (attributes == null) {
        return { code };
      }

      if (attributes.type == "worker") {
        const workerOpt = {
          type: options.esm ? 'module' : 'classic',
          credentials: !options.esm ? 'omit' : options.credentials ?? 'omit',
          name: attributes.name,
        };
        return {
          code: `const blob = new Blob([${JSON.stringify(code)}],{type:"application/javascript"});export default new Worker(URL.createObjectURL(blob),${JSON.stringify(workerOpt)});`
        };
      }

      return { code };
    }
  };
}
