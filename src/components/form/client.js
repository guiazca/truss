import React from "react";
import {  Row, Col } from "react-bootstrap";

function Client(props) {
  return (
    <>
      <Row>
        <Col sm="8">
          <label for="codigo">Código:</label>
          <input
            className="codigo"
            type="number"
            pattern="\d*"
            name="codigo"
            placeholder="codigo"
            value={this.state.dados.codigo}
            onChange={console.log(1)}
          ></input>
        </Col>
      </Row>
      <Row>
        <Col sm="8">
          <label for="name">Nome:</label>
          <input
            className="nome"
            type="text"
            name="nome"
            placeholder="Nome"
          ></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="codigoPostal" for="codigoPostal">
            Código Postal:
          </label>
          <input
            className="codigoPostal"
            type="number"
            pattern="\d*"
            name="codigoPortal"
            placeholder="Código Postal"
          ></input>
        </Col>
        <Col>
          <label for="morada">Morada:</label>
          <input
            className="morada"
            name="morada"
            type="text"
            placeholder="morada"
          ></input>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="contribuinte" for="contribuinte">
            Contribuinte:
          </label>
          <input
            className="contribuinte"
            name="contribuinte"
            type="number"
            pattern="\d*"
            placeholder="contribuinte"
          ></input>
        </Col>
        <Col>
          <label className="contato" for="contato">
            Contato:
          </label>
          <input
            className="contato"
            name="contato"
            type="number"
            pattern="\d*"
            placeholder="contato"
          ></input>
        </Col>
      </Row>
    </>
  );
}

export default Client;
