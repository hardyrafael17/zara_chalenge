// https://stackoverflow.com/questions/63124432/how-do-i-configure-mini-css-extract-plugin-in-gatsby
const fs = require('fs');
const yaml = require('js-yaml');
import path from 'path';

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const ymlDoc = yaml.load(
    fs.readFileSync('./pageContent/index.yaml', 'utf-8')
  );
  ymlDoc.forEach(
    (
      element: { path: string; content: string; links: string },
      index: number
    ) => {
      console.log(element.path, 'element path');
      let component;
      if (element.path === '/')
        component = path.resolve(`./src/pages/index.tsx`);
      else component = path.resolve(`./src/pages${element.path}.tsx`);
      console.log(component)

      createPage({
        path: element.path,
        component,
        context: {
          pageContent: element.content,
          links: element.links,
          test: 'context test',
          pagePath: element.path,
        },
      });
    }
  );
};
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
