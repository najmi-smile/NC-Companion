import React from 'react';
import Moment from 'moment';
import CommentVoter from './Comment-voter';
import DeleteComment from './Delete-comment';
import PT from "prop-types";



class Comments extends React.Component {


    render() {
        return (
            < article className="media" >
                <figure className="media-left">
                    <p className="image is-64x64">
                        <img src={this.props.comment.user.avatarUrl} alt="user" />
                    </p>
                </figure>
                <section class="media-content" style={{ overflow: 'hidden' }}>
                    <section class="content">
                        <p>
                            {!this.props.comment.user.name ? <strong>{this.haseebHandler(this.props.comment.user.handle)}</strong> : <strong>{this.props.comment.user.name}</strong>}
                            {/* <strong>{this.props.comment.user.name}</strong>
                            <small>{this.props.comment.user.handle}</small> */}
                            <small>   {Moment(this.props.comment.comment.creationDate).fromNow()}</small>
                            <section className='is-size-6'>{this.props.comment.comment.body}</section>
                        </p>

                    <CommentVoter comment={this.props.comment} authUser={this.props.authUser}/>

                    </section>
                </section>
                {this.props.comment.user.id === this.props.authUser.uid ? <DeleteComment deleteUserComment={this.props.deleteUserComment} index={this.props.index} /> : null}
            </article >
        )
    }


    haseebHandler = (handle) => {
        if (handle === '@null') return handle = 'Haseeb The Educator';
        else return handle;
    }
}

Comments.propTypes = {
    deleteUserComment: PT.func,
    key: PT.number,
    index: PT.number,
    ownComment: PT.bool,
    comment: PT.object,
    authUser: PT.object
};


export default Comments;