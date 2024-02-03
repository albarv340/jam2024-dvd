/* tslint:disable */
/* eslint-disable */
/**
* @param {string} canvas_id
* @param {Float32Array | undefined} [selected_color]
* @returns {WebGLRenderingContext}
*/
export function draw_triangle(canvas_id: string, selected_color?: Float32Array): WebGLRenderingContext;
/**
* @param {string} canvas_id
* @param {Float32Array | undefined} [selected_color]
* @param {number | undefined} [size]
* @param {number | undefined} [x]
* @param {number | undefined} [y]
* @returns {WebGLRenderingContext}
*/
export function draw_rectangle(canvas_id: string, selected_color?: Float32Array, size?: number, x?: number, y?: number): WebGLRenderingContext;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly draw_triangle: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly draw_rectangle: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
