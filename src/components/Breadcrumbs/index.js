import React from "react";
import { Link } from "react-router-dom";
import withBreadcrumbs from "react-router-breadcrumbs-hoc";
import { Breadcrumb } from 'react-bootstrap';
import { useSelector } from 'react-redux'

const DynamicBreadcrumb = ({ match }) => {
    const breadcrumb = useSelector((state) => state.breadcrumb.value)
    if (breadcrumb) {
        return <span>{breadcrumb}</span>;
    }
    return <span>{match.params.studySlug}</span>;
}

const routes = [
    { path: '/study/:studySlug', breadcrumb: DynamicBreadcrumb },
    { path: '/study', breadcrumb: 'Study' },
];

const Breadcrumbs = ({ breadcrumbs }) => (
    <Breadcrumb>
        {breadcrumbs.map(({ breadcrumb, match }, index) => (
            <Breadcrumb.Item
                {...(
                    index < breadcrumbs.length - 1 ?
                        { key: index, linkAs: Link, linkProps: { to: match.url } } :
                        { key: index, active: true }
                )}
            >
                {breadcrumb}
            </Breadcrumb.Item>
        ))}
    </Breadcrumb >
)

export default withBreadcrumbs(routes)(Breadcrumbs);
