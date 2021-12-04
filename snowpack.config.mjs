export default {
  env: {},
  mount: {
    app: '/',
    public: '/',
    src: '/dist',
  },
  packageOptions: {
    types: true,
  },
  alias: {
    shared: './src/shared',
  },
  devOptions: {
    port: 24242,
    tailwindConfig: './tailwind.config.js',
  },
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  plugins: [
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-babel',
      {
        input: ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
      },
    ],
  ],
}
