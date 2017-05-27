import React, { Component } from 'react';
import { PhonebookItemEntity }  from './PhonebookEntity.js'
import { PhonebookEntity }  from './PhonebookEntity.js'

class Phonebook extends Component {

  constructor() {
    super();

    this.state = {
      phonebook: new PhonebookEntity(),
      item: new PhonebookItemEntity()
    }
  }

  handleNameChange(e) {
    this.state.item.name = e.target.value;
    this.setState({item: this.state.item})
  }

  handlePhoneChange(e) {
    this.state.item.phone = e.target.value;
    this.setState({item: this.state.item})
  }

  addItem = () => {
    this.state.phonebook.addItem(this.state.item.name, this.state.item.phone)

    this.setState({
      phonebook: this.state.phonebook,
      item: new PhonebookItemEntity()
    });

    this.refs.nameInput.value = "";
    this.refs.phoneInput.value = "";
    this.refs.nameInput.focus = true;
    this.refs.nameInput.focus();
  }

  componentDidMount() {
    this.refs.nameInput.focus();
  }

  render() {
    const tableStyle = {
      margin: "0 auto"
    }; 
    const tableHeadStyle = {
      textAlign: "center"
    }; 

    let localThis = this;
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={tableHeadStyle} >#</th>
              <th style={tableHeadStyle} >Nome</th>
              <th style={tableHeadStyle} >Telefone</th>
              <th style={tableHeadStyle} >Deletar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.phonebook.list.map(function(val, idx){
                return <tr>
                          <td> {idx + 1} </td>
                          <td>{ val.name }</td>
                          <td>{ val.phone }</td>
                          <td>
                            <button name={val.name}
                              className="btn btn-danger"
                              onClick={() => {
                                let toDelete = val.name;

                                localThis.state.phonebook.removeItem(toDelete);

                                localThis.setState({
                                  phonebook: localThis.state.phonebook,
                                  item: new PhonebookItemEntity()
                                });
                              }}> 
                              X 
                            </button></td>
                        </tr>;
              }
            )}
          </tbody>
        </table>
        
        <p> Nome: <input ref="nameInput" type="text" onChange={this.handleNameChange.bind(this)} /> </p> 
        <p> Telefone: <input ref="phoneInput" type="number" onChange={this.handlePhoneChange.bind(this)} /> </p> 
        <p> <button className="btn btn-primary" onClick={this.addItem}> Adicionar </button> </p>
      
      </div>
    );
  }
} 

class PhonebookItem extends Component {
  render() {
    return (
      <div>
      	<div>{this.props.person} </div>
      </div>
    );
  }
}

export default Phonebook; 