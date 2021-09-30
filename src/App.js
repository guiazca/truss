import "./App.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { MyDocument } from "../src/components/form/form.js";

class App extends React.Component {

  
  state = {
    codigo: '',
    nome: '',
    codigoPostal: '',
    morada: '',
    contribuinte: '',
    contato: '',
    products: [
      {
        codigo: "101 001",
        count: 0,
        nome: "Equilibrium Sh. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 001",
        count: 0,
        nome: "Equilibrium Cond. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "101 003",
        count: 0,
        nome: "Blond Sh. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 003",
        count: 0,
        nome: "Blond Cond. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "101 006",
        count: 0,
        nome: "Miracle Sh. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 006",
        count: 0,
        nome: "Miracle Cond. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "101 007",
        count: 0,
        nome: "Sh. Therapy 300ml",
        price: 10.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "101 038",
        count: 0,
        nome: "Curly Sh. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 036",
        count: 0,
        nome: "Curly Cond. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "101 038",
        count: 0,
        nome: "Infusion Sh. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 036",
        count: 0,
        nome: "Infusion Cond. 300ml",
        price: 8.5,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "102 035",
        count: 0,
        nome: "Miracle Summer Cond. 300ml",
        price: 9.0,
        linha: "HOMECARE",
        subLinha: "DAILY CARE",
      },
      {
        codigo: "103 010",
        count: 0,
        nome: "Blond Mask 180g",
        price: 13.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "103 003",
        count: 0,
        nome: "Miracle Mask 180g",
        price: 13.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "103 016",
        count: 0,
        nome: "Net Mask 550g",
        price: 19.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "104 012",
        count: 0,
        nome: "Night Spa Serum 250ml",
        price: 24.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "104 002",
        count: 0,
        nome: "Deluxe Prime 260ml",
        price: 17.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "104 028",
        count: 0,
        nome: "Deluxe Prime Blond 260ml",
        price: 19.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "104 040",
        count: 0,
        nome: "Deluxe Prime Summer 260ml",
        price: 19.0,
        linha: "HOMECARE",
        subLinha: "WEEKLY CARE",
      },
      {
        codigo: "305 024",
        count: 0,
        nome: "Hair Protector 250ml",
        price: 12.0,
        linha: "HOMECARE",
        subLinha: "FINISH",
      },
      {
        codigo: "305 032",
        count: 0,
        nome: "Curly Fix 250ml",
        price: 12.0,
        linha: "HOMECARE",
        subLinha: "FINISH",
      },
      {
        codigo: "313 012",
        count: 0,
        nome: "Fluid Fix 250ml",
        price: 12.0,
        linha: "HOMECARE",
        subLinha: "FINISH",
      },
      {
        codigo: "305 023",
        count: 0,
        nome: "Instant Repair 45ml",
        price: 12.0,
        linha: "HOMECARE",
        subLinha: "FINISH",
      },
      {
        codigo: "211 044",
        count: 0,
        nome: "Kit Fast Repair",
        price: 101.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "201 011",
        count: 0,
        nome: "Bidimensional Sh. 1000ml",
        price: 33.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "204 006",
        count: 0,
        nome: "Lipidic 650ml",
        price: 28.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "203 006",
        count: 0,
        nome: "Intensive Nutrition 1000ml",
        price: 33.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "201 012",
        count: 0,
        nome: "Clarifying Sh. 1000ml",
        price: 33.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "205 011",
        count: 0,
        nome: "Amino Miracle 225ml",
        price: 20.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "201 027",
        count: 0,
        nome: "Therapy Sh.",
        price: 28.0,
        linha: "PROFISSIONAL",
        subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      },
      {
        codigo: "204 022",
        count: 0,
        nome: "8x Powder 200g",
        price: 59.0,
        linha: "PROFISSIONAL",
        subLinha: "PERFECT BLOND",
      },
      {
        codigo: "409 006",
        count: 0,
        nome: "Air Libre 500g",
        price: 23.0,
        linha: "PROFISSIONAL",
        subLinha: "PERFECT BLOND",
      },
      {
        codigo: "409 007",
        count: 0,
        nome: "Blanc Blond 500g",
        price: 23.0,
        linha: "PROFISSIONAL",
        subLinha: "PERFECT BLOND",
      },
      {
        codigo: "k.415000",
        count: 0,
        nome: "Papel Laminado Longo 50 x 11",
        price: 28.0,
        linha: "PROFISSIONAL",
        subLinha: "PERFECT BLOND",
      },
      {
        codigo: "k.416000",
        count: 0,
        nome: "Papel Laminado Curto 25 x 11",
        price: 28.0,
        linha: "PROFISSIONAL",
        subLinha: "PERFECT BLOND",
      },
      {
        codigo: "204 025",
        count: 0,
        nome: "K. Recovery 650ml",
        price: 59.0,
        linha: "PROFISSIONAL",
        subLinha: "RECOVERY ESSENTIALS",
      },
      {
        codigo: "203 008",
        count: 0,
        nome: "Infusion 650ml",
        price: 51.0,
        linha: "PROFISSIONAL",
        subLinha: "RECOVERY ESSENTIALS",
      },
      {
        codigo: "210 010",
        count: 0,
        nome: "High Liss 650ml",
        price: 70.0,
        linha: "PROFISSIONAL",
        subLinha: "SMOOTHING TREATMENT",
      },
      {
        codigo: "210 011",
        count: 0,
        nome: "High Liss Blond 650ml",
        price: 75.0,
        linha: "PROFISSIONAL",
        subLinha: "SMOOTHING TREATMENT",
      },
    ],
    dados: [
      {
        codigo: 1234,
        nome: "",
        codigoPostal: "",
        morada: "",
        contribuinte: "",
        contato: "",
        comercial: "",
      },
    ],
  };

  updateInputValue(evt) {
    this.setState({
      codigo: evt.target.value
    });
  }
  updateInputValueNome(evt) {
    this.setState({
      nome: evt.target.value
    });
  }
  updateInputValueCP(evt) {
    this.setState({
      codigoPostal: evt.target.value
    });
  }
  updateInputValueMorada(evt) {
    this.setState({
      morada: evt.target.value
    });
  }
  updateInputValueContribuinte(evt) {
    this.setState({
      contribuinte: evt.target.value
    });
  }
  updateInputValueContato(evt) {
    this.setState({
      contato: evt.target.value
    });
  }
 

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
                onChange={evt => this.updateInputValue(evt)}
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
                onChange={evt => this.updateInputValueNome(evt)}
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
                onChange={evt => this.updateInputValueCP(evt)}
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
                onChange={evt => this.updateInputValueMorada(evt)}
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
                onChange={evt => this.updateInputValueContribuinte(evt)}
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
                onChange={evt => this.updateInputValueContato(evt)}
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
          style={{ width: 20, height: 8 }}
          className="inputQTD"
          type="number"
          pattern="\d*"
          value={product.count}
          min="0"
          oninput="this.value = Math.abs(this.value)"
          onChange={(e) => onChange(i, parseInt(e.target.value) || 0)}
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
