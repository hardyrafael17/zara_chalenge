import type { CreatePageArgs, GatsbyNode } from 'gatsby';
const fs = require('fs');
const yaml = require('js-yaml');
import { businessConfig } from './src/websiteContent';
import path from 'path';

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
exports.createPages = async ({ actions }: CreatePageArgs) => {
  businessConfig.headerLinks.forEach((link, pageIndex) => {
    console.log('creating page with path', link.menuLabel);
    actions.createPage({
      path: link.menuLabel,
      component: path.resolve('./src/templates/page.tsx'),
      context: {
        pageIndex,
        link,
        title: link.menuLabel,
      },
    });
  });
};
