import React, {Component} from 'react';

class Friends extends Component {
    render() {
        const friendItems = this.props.allFriends.map((friend, index) => {
            return <li key={index}>{friend.name}</li>
        })

        return (
            <div>
                <ul>
                    {friendItems}
                </ul>
            </div>
        )
    }
}

export default Friends;