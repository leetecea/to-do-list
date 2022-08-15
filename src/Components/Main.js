import React, { Component } from "react";
import * as S from "../Style/MainStyle.js";

export default class Main extends Component {
  state = {
    tarefa: "",
    listaTarefas: [],
  };

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value,
    });
  };

  enter = (e) => {
    if (this.state.tarefa.length > 0 && e.key === "Enter") {
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now(),
        }),
        tarefa: "",
      });
    }
  };

  addTarefas = () => {
    if (this.state.tarefa.length > 0) {
      this.setState({
        listaTarefas: this.state.listaTarefas.concat({
          tarefa: this.state.tarefa,
          id: Date.now(),
        }),
        tarefa: "",
      });
    }
  };

  removerTarefa = (id) => {
    this.setState({
      listaTarefas: this.state.listaTarefas.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  limparTarefa = () => {
    this.setState({
      tarefa: "",
    });
  };

  render() {
    return (
      <S.Container>
        <S.H1>Lista de Tarefas</S.H1>
        <S.Box>
          <input
            type="text"
            onChange={this.handleChange}
            onKeyPress={this.enter}
            value={this.state.tarefa}
          />
          <div>
            <button onClick={() => this.addTarefas()}>Adicionar</button>
            <button onClick={() => this.limparTarefa()}>Limpar</button>
          </div>
        </S.Box>
        <S.Contain>
          {this.state.listaTarefas.map((item) => (
            <div key={item.id}>
              <input type="checkbox" id="check" title="Tarefa concluída"/>
              <label for="check">{item.tarefa}</label>
              <button onClick={() => this.removerTarefa(item.id)}title="Excluir"> </button>
            </div>
          ))}
        </S.Contain>
      </S.Container>
    );
  }
}
