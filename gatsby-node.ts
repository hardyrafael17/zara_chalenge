import type { CreatePageArgs, GatsbyNode } from 'gatsby';
const fs = require('fs');
const yaml = require('js-yaml');
import path from 'path';
import i18next from 'gatsby-plugin-react-i18next';
import { readFileSync } from 'fs';
import { kMaxLength } from 'buffer';

exports.createPages = ({ actions }: CreatePageArgs) => {
  const { createPage } = actions;
  // const ymlDoc = yaml.load(
  //   fs.readFileSync('./pageContent/index.yaml', 'utf-8')
  // );
  createPage({
    path: '/',
    component: path.resolve('./src/pages/index.tsx'),
    context: {
      test: 'test', noMames: 'noMames'
    }
  });

  // path: "/",
  // component: path.resolve("./src/pages/index.tsx"),
  // context: {
  //   test: "test"
  // },
};
exports.onCreatePage = async ({ page, actions }) => {
  console.log(page.path, "----->", page.path === "/" ? console.log(page) : null)
}
exports.onCreateWebpackConfig = (helper) => {
  const { stage, actions, getConfig } = helper;
  if (stage === 'develop' || stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }
};