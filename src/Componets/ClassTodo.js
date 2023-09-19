import React, { Component } from "react";

export class ClassTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameObj: { name: "" },
      nameList: [],
      isEdit: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      nameObj: { ...this.state.nameObj, name: e.target.value },
    });
  };
  addItem = () => {
    this.state.isEdit
      ? this.setState({
          nameList: this.state.nameList.map((list) =>
            list.id === this.state.nameObj.id
              ? { ...list, name: this.state.nameObj.name }
              : list
          ),
        })
      : 
        this.setState({
          isEdit: false,
          nameList: [
            ...this.state.nameList,
            {
              id: Date.now(),
              name: this.state.nameObj.name,
            },
          ],
          nameObj: { name: " " },
        });
  };
  deleteItem = (id) => {
    this.setState({
      nameList: this.state.nameList.filter((list) => list.id !== id),
    });
  };
  handleEdit = (list) => {
    this.setState({
        isEdit: true,
      nameObj: { id: list.id, name: list.name },
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          value={this.state.nameObj.name}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.addItem}>
          {this.state.isEdit ? "EDIT" : "ADD"}
        </button>
        {this.state.nameList.map((list) => {
          return (
            <li key={list.id}>
              {list.name}
              <i
                className="fa-solid fa-edit "
                onClick={() => this.handleEdit(list)}
                style={{ marginLeft: "160px" }}
              ></i>
              <i
                className="fa-solid fa-trash "
                onClick={() => this.deleteItem(list.id)}
                style={{ marginLeft: "16px" }}
              ></i>
            </li>
          );
        })}
      </div>
    );
  }
}

export default ClassTodo;
