import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";

class AdminsListPage extends Component {
    componentDidMount() {
        this.props.fetchAdmins();
    }

    renderUsers() {
        return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
    }

    render() {
        return (
            <div>
                Producted list of Admins
                <ul>
                    {this.renderUsers()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    admins: state.admins
});

const loadData = (store) => {
    return store.dispatch(fetchAdmins());
};

export default {
    loadData,
    component: connect(mapStateToProps, { fetchAdmins })(AdminsListPage)
};
