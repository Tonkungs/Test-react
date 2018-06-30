import React from "react";
import { Control, Form, actions } from "react-redux-form";
import MenuNav from "./../../components/MenuNav";
import BreadCrumb from "./../../components/BreadCrumb";
import { connect } from "react-redux";
import PropTypes from 'prop-types'; 
import { getFetchPost, postAddCount, postSubCount } from "../../actions/index";
class About extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };

    this.addCount = this.addCount.bind(this)
    this.subTractCount = this.subTractCount.bind(this)
    
  }
  componentDidMount() {
    console.log("componentDidMount");
    const { dispatch, fooReducers } = this.props;
    dispatch(getFetchPost(fooReducers));

    dispatch(postAddCount(fooReducers));
  }

  // handleChange = nextSubreddit => {
  //   this.props.dispatch(selectSubreddit(nextSubreddit));
  // };
  addCount() {
    console.log(2222);
    // console.log(this.props.dispatch);
    const { dispatch, fooReducers } = this.props;
    // dispatch(postAddCount(fooReducers))
    this.props.dispatch(postAddCount({}));
  }
  subTractCount() {
    // console.log(this.props.dispatch);
    const { dispatch, fooReducers } = this.props;
    // dispatch(postSubCount(fooReducers))
    this.props.dispatch(postSubCount({}));
  }
  render() {
    let foo = this.props.foo;
    return (
      <React.Fragment>
        <BreadCrumb />
        <h2>About</h2>
        <a className="button" onClick={this.addCount}>
          เพิ่มค่า
        </a>
        <a className="button" onClick={this.subTractCount}>
          ลบค่า
        </a>
        {foo.fooReducers.count} || {foo.fooReducers.clicked}
        <input className="input" type="text" placeholder="Text input" />
        <table className="table">
          <thead>
            <tr>
              <th>ลำดับ</th>
              <th>ชื่อ user</th>
            </tr>
          </thead>
          <tbody>
            {foo.fooReducers.data.data.map(function(object, index) {
              return (
                <tr key={object.id}>
                  <td>{index + 1}</td>
                  <td>{object.ig_user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
// MyComponent.propTypes = {
About.propTypes = {
  // selectedSubreddit: PropTypes.string.isRequired,
  // posts: PropTypes.array.isRequired,
  // isFetching: PropTypes.bool.isRequired,
  // lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

const mapStatetoProps = state => {
  return {
    foo: state.foo
  };
};
// const mapDispatchtoProps = dispatch => {
//   return {
//     click: clicked => {
//       dispatch({
//         type: "ADD",
//         payload: 1
//       });
//     },
//     clickSub: () => {
//       dispatch({
//         type: "SUBTRACT",
//         payload: 1
//       });
//     },
//     getDataI: payload => {
//       //   fetch("https://murmuring-citadel-13024.herokuapp.com/api/v1/iguser", {
//       //     mode: "cors"
//       //   })
//       //     .then(response => response.json())
//       //     .then(function(res) {
//       //       //   console.log(res);
//       //       return
//       dispatch({
//         type: "DATASET",
//         payload: payload
//       });
//       // });
//     }
//   };
// };

// export default About;
export default connect(
  mapStatetoProps
  // mapDispatchtoProps
)(About);