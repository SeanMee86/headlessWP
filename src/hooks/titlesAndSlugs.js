import {graphql, useStaticQuery} from "gatsby";

export const TitlesAndSlugs = () => {
    const {wpcontent} = useStaticQuery(
        graphql`        
          query HomePageQuery {
              wpcontent {
                pages {
                  edges {
                    node {
                      title
                      slug
                    }
                  }
                }
              }
            }
        `
    )
    return wpcontent.pages.edges;
}
