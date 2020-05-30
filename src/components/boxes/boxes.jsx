import React from "react";
import { connect } from "react-redux";

import Box from "../box/box";

import {
  changeBox1Color,
  changeBox2Color,
  changeBox3Color,
} from "../../redux/box/box.actions";

const Boxes = ({
  changeBox1Color,
  changeBox2Color,
  changeBox3Color,
  box1_index_color,
  box2_index_color,
  box3_index_color,
}) => {
  return (
    <>
      <Box
        changeBoxColor={changeBox1Color}
        boxColors={["red", "green", "blue"]}
        colorIndex={box1_index_color}
      />
      <Box
        changeBoxColor={changeBox2Color}
        boxColors={["blue", "purple", "black"]}
        colorIndex={box2_index_color}
      />
      <Box
        changeBoxColor={changeBox3Color}
        boxColors={["green", "blue", "yellow"]}
        colorIndex={box3_index_color}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  box1_index_color: state.box.box1_index_color,
  box2_index_color: state.box.box2_index_color,
  box3_index_color: state.box.box3_index_color,
});

const mapDispatchToProps = (dispatch) => ({
  changeBox1Color: () => dispatch(changeBox1Color()),
  changeBox2Color: () => dispatch(changeBox2Color()),
  changeBox3Color: () => dispatch(changeBox3Color()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Boxes);
