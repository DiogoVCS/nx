export * from './src/utils/config';
export * from './src/generators/webpack-project/webpack-project';
export type { WebDevServerOptions } from './src/executors/dev-server/schema';
export * from './src/executors/dev-server/dev-server.impl';
export * from './src/executors/webpack/lib/normalize-options';
export type {
  WebpackExecutorOptions,
  NormalizedWebpackExecutorOptions,
  AssetGlobPattern,
  FileReplacement,
} from './src/executors/webpack/schema';
export * from './src/executors/webpack/webpack.impl';
