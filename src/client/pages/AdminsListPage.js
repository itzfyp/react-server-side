import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

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

const hocWrapped = requireAuth(AdminsListPage);

export default {
    loadData,
    component: connect(mapStateToProps, { fetchAdmins })(hocWrapped)
};
