import React from 'react';
import pageHeaderStyles from './page-header.module.scss'

const PageHeader = ({pageTitle}) => (
    <div className={pageHeaderStyles.pageHeader}>
        <h1>{pageTitle}</h1>
    </div>
)

export default PageHeader;
