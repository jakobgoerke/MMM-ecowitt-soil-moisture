import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";

export default [
  {
    input: "./src/MMM-ecowitt-soil-moisture.ts",
    plugins: [
      json(),
      typescript(),
      resolve({
        preferBuiltins: true,
      }),
      commonjs(),
      scss({
        fileName: "MMM-ecowitt-soil-moisture.css",
      }),
    ],
    output: {
      file: "./MMM-ecowitt-soil-moisture.js",
      format: "iife",
    },
  },
  {
    input: "./src/node_helper.ts",
    plugins: [typescript()],
    output: {
      file: "./node_helper.js",
      format: "umd",
      name: "node_helper",
    },
  },
];
