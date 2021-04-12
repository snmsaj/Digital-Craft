import React, {Component} from 'react';

class Article extends Component {
    render() {
        return(
            <div className="article">
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
                {/* <p></p> */}
                <div className="comments-likes">
                    <p>{this.props.comments} comments</p>
                    <p>{this.props.likes} likes</p>
                </div>
            </div>
        )
    }
}

export default Article