import React from 'react';
import UserHeader from './UserHeader'
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostList extends React.Component {

    componentDidMount(){
        this.props.fetchPost();
    }

    renderList(){return (
        this.props.posts.map(post => {
            return(
                <div className="item" key={post.id}>
                    <i className="large middle align icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        }))
    }

    render(){
        //console.log(this.props.posts);
        return (<div className="ui relaxed divided list">{this.renderList()}</div>)
        
    }
}

const mapStateToProps = (state) => {
    return {posts: state.post};
}

export default connect(mapStateToProps, {fetchPost})(PostList);