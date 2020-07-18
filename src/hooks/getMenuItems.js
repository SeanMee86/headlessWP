import { useStaticQuery, graphql } from "gatsby";

const flatListToHierarchical = (
    data = [],
    {idKey='id',parentKey='parentId',childrenKey='children'} = {}
) => {
    const tree = [];
    const childrenOf = {};
    data.forEach((item) => {
        const newItem = {...item};
        const { [idKey]: id, [parentKey]: parentId = 0 } = newItem;
        childrenOf[id] = childrenOf[id] || [];
        newItem[childrenKey] = childrenOf[id];
        parentId
            ? (
                childrenOf[parentId] = childrenOf[parentId] || []
            ).push(newItem)
            : tree.push(newItem);
    });
    return tree;
};

export const GetMenuItems = () => {
    const { wpcontent } = useStaticQuery(graphql`
        query MENU_ITEMS {
          wpcontent {
            menuItems(where: {location: PRIMARY_NAVIGATION}) {
              nodes {
                id
                parentId
                label
                path
              }
            }
          }
        }
    `)
    return flatListToHierarchical(wpcontent.menuItems.nodes);
}
