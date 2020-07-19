/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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
              }  
            }
          }
        }`
    )
    data.wpcontent.pages.nodes.forEach(node => {
        const uri = node.uri;
            actions.createPage({
                path: uri,
                component: require.resolve(`./src/templates/page`),
                context: {...node, pluginOptions}
            })
    })
}
