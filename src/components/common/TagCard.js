import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
const TagCard = ({ tags }) => {
    const url = `/tag/${tags.slug}/`
    return (
        <Link to={url} className="post-card" replace={true}>
            <header className="post-card-header">
                {tags.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${tags.feature_image})`,
                    }}></div>}
                <h2 className="post-card-title">{tags.name}</h2>
            </header>
            <section className="post-card-excerpt">{tags.description}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                </div>
                <div className="post-card-footer-right">
                    <div>{tags.count.posts} - Post(s)</div>
                </div>
            </footer>
        </Link>
    )
}

TagCard.propTypes = {
    tags: PropTypes.shape({
        id: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string,
        feature_image: PropTypes.string,
        url: PropTypes.string,
        count: PropTypes.shape({
            posts: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
}

export default TagCard