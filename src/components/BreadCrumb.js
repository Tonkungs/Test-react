import React from "react";

// class BreadCrumb extends React.Component {
//   render() {
//     return (
      // <nav className="breadcrumb" aria-label="breadcrumbs">
      //   <ul>
      //     <li>
      //       <a href="#">Bulma</a>
      //     </li>
      //     <li>
      //       <a href="#">Documentation</a>
      //     </li>
      //     <li>
      //       <a href="#">Components</a>
      //     </li>
      //     <li className="is-active">
      //       <a href="#" aria-current="page">
      //         Breadcrumb
      //       </a>
      //     </li>
      //   </ul>
      // </nav>
//     );
//   }
// }props 
const BreadCrumb = () =>(
<React.Fragment> 
<nav className="breadcrumb" aria-label="breadcrumbs">
        <ul>
          <li>
            <a href>Bulma</a>
          </li>
          <li>
            <a href>Documentation</a>
          </li>
          <li>
            <a href>Components</a>
          </li>
          <li className="is-active">
            <a href aria-current="page">
              Breadcrumb
            </a>
          </li>
        </ul>
      </nav>
</React.Fragment>
)



export default BreadCrumb;
