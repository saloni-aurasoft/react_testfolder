import React from "react";
export default function Alert(props) {
  return (
    // fixing alertbox height so that it cannot affect responsive
    <div style={{height:'100px'}}>
      {props.alert && <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alert.typ}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>}
    </div>
  );
}

//if  props.alert null hoti hai to uske aage ka syntax run hoga i nahi

