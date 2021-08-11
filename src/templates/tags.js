import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Layout, Pagination, TagCard } from '../components/common'
import { MetaData } from '../components/common/meta'

const Tags = ({ data, location, pageContext }) => {

    const tags = data.allGhostTag.edges
    return (
        <>
            <MetaData location={location} />
            <Layout isHome={false}>
                <div className="container">
                    <section className="post-feed">
                        {tags.map(({ node }) => (
                            <TagCard key={node.id} tags={node} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>

        </>
    )
}
Tags.propTypes = {
    data: PropTypes.shape({
        allGhostTag: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}


export default Tags

export const tagsQuery = graphql`
    query GhostTagsQuery($limit: Int!, $skip: Int!) {
        allGhostTag 
        (
            sort: { order: DESC, fields: [name] },
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
                    id
                    feature_image
                    name
                    slug
                    url
                    description
                    count {
                        posts
                    }
                }
            }
        }
    }
`