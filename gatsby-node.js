/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async function({actions, graphql}) {
    const { data } = await graphql(
        `query {
          wpcontent {
            pages(first: 20) {
              edges {
                node {
                  id
                  uri
                }
              }
            }
          }
        }`
    )
    data.wpcontent.pages.edges.forEach(edge => {
        const uri = edge.node.uri;
        const id = edge.node.id;
            actions.createPage({
                path: uri,
                component: require.resolve(`./src/templates/page`),
                context: {id}
            })
    })
}
