import React from 'react';
import { Link } from 'gatsby';
import { TitlesAndSlugs } from "../hooks/titlesAndSlugs";

const PageList = () => {
    const linkData = TitlesAndSlugs();
    return (
        <ul>
            {linkData.map((edge, ind) => (
                <li key={ind}>
                    <Link to={`/${edge.node.slug}/`}>{edge.node.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default PageList;
