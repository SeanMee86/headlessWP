/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const cheerio = require ('cheerio');

exports.createPages = async function({actions, graphql}) {
    const pluginOptions = {
        wordPressUrl: `https://gqltst.wpengine.com/`,
        uploadsUrl: `https://gqltst.wpengine.com/wp-content/uploads/`,
    }
    const { data } = await graphql(
        `query {
          wpcontent {
            pages(first: 20) {
              nodes {
                id
                uri
                content
              }  
            }
          }
        }`
    )
    data.wpcontent.pages.nodes.forEach(node => {
        const uri = node.uri;
        const id = node.id;
            actions.createPage({
                path: uri,
                component: require.resolve(`./src/templates/page`),
                context: node
            })
    })
}

exports.onCreateNode = async ({
    node,
    actions,
    store,
    cache,
    createNodeId,
    reporter
}) => {
    const {createNode, createPage, deletePage} = actions;
    if (node.internal.type === 'SitePage') {
        if (node.context && node.context.content) {
            if (!node.context.modified) {
               const $ = cheerio.load(node.context.content);
               console.log($)
            }
        }
    }
}
