import "./App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../src/components/form/form.js";


class App extends React.Component {
state = require('../src/components/state')

  handleUpdate = (evt) => this.setState({
    codigo: evt.target.value,
    nome: evt.target.value,
    codigoPostal: evt.target.value,
    morada: evt.target.value,
    contribuinte: evt.target.value,
    email: evt.target.value,
    contato: evt.target.value
  })
  
  
  onChange = (index, val) => {
    this.setState({
      products: this.state.products.map((product, i) =>
        i === index ? { ...product, count: val } : product
      ),
    });
  };

  render() {
    return (
      <Container>
        <text>Vendedor: Márcia e Angélica</text>
        <div className="Produto">
          <Row>
            <Col sm="8">
              <label for="codigo">Código:</label>
              <input
                className="codigo"
                type="number"
                pattern="\d*"
                name="codigo"
                placeholder="codigo"
                value={this.state.codigo}
                onChange={evt => this.setState({codigo : evt.target.value})}
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
                value={this.state.nome}
                onChange={evt => this.setState({nome : evt.target.value})}
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
                name="codigoPostal"
                placeholder="Código Postal"
                value={this.state.codigoPostal}
                onChange={evt => this.setState({codigoPostal : evt.target.value})}
              ></input>
            </Col>
            <Col>
              <label for="morada">Morada:</label>
              <input
                className="morada"
                name="morada"
                type="text"
                placeholder="morada"
                value={this.state.morada}
                onChange={evt => this.setState({morada : evt.target.value})}
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
                value={this.state.contribuinte}
                onChange={evt => this.setState({contribuinte : evt.target.value})}
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
                value={this.state.contato}
                onChange={evt => this.setState({contato : evt.target.value})}
              ></input>
            </Col>
            <Col>
              <label className="email" for="email">
                email:
              </label>
              <input
                className="email"
                name="email"
                type="email"
                placeholder="email"
                value={this.state.email}
                onChange={evt => this.setState({email : evt.target.value})}
              ></input>
            </Col>
          </Row>
        </div>
        <ProductList products={this.state.products} onChange={this.onChange} />
        <Total products={this.state.products} />
        {/* <Iva products={this.state.products} /> */}
        <TotalComIva products={this.state.products} />
        <PDFDownloadLink
          document={<MyDocument data={this.state} />}
          fileName={`Orçamento Nome-${this.state.nome} Código-${this.state.codigo}.pdf`}
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      </Container>
    );
  }
}

const ProductList = ({ products, onChange }) => (
  <div>
    {products.map((product, i) => (
      <div key={i} className="Produto">
        <input
          style={{ width: 25, height: 14 }}
          className="inputQTD"
          type="number"
          pattern="\d*"
          value={product.count}
          min="0"
          oninput="this.value = Math.abs(this.value)"
          onChange={(e) => onChange(i, parseInt(e.target.value) || "")}
        />
        <text>{product.nome}</text>
      </div>
    ))}
  </div>
);


const Total = ({ products }) => (
  <h3>
    Total:
    {products.reduce(function (sum, i) {
      sum = Math.round((sum + i.count * i.price) * 100) / 100;
      return sum;
    }, 0)}{" "}
    €
  </h3>
);

const TotalComIva = ({ products }) => (
  <h3>
    + Iva:
    {products.reduce(function (sum, i) {
      sum = Math.round((sum + i.count * (i.price * 1.23)) * 100) / 100;
      return sum;
    }, 0)}{" "}
    €
  </h3>
);

export default App;
