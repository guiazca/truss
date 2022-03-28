const state = {
  codigo: "",
  nome: "",
  codigoPostal: "",
  morada: "",
  contribuinte: "",
  contato: "",
  products: [
    {
      codigo: "101 001",
      count: "",
      nome: "Equilibrium Sh. 300ml",
      price: 8.5,
      linha: "HOMECARE",
      subLinha: "DAILY CARE",
      estoque: true,
    },
    {
      codigo: "102 001",
      count: "",
      nome: "Equilibrium Cond. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "101 003",
      count: "",
      nome: "Blond Sh. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "102 003",
      count: "",
      nome: "Blond Cond. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "101 006",
      count: "",
      nome: "Miracle Sh. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "102 006",
      count: "",
      nome: "Miracle Cond. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "101 007",
      count: "",
      nome: "Sh. Therapy 300ml",
      price: 10.5,
      estoque: true,
    },
    {
      codigo: "101 038",
      count: "",
      nome: "Curly Sh. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "102 036",
      count: "",
      nome: "Curly Cond. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "101 038",
      count: "",
      nome: "Infusion Sh. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "102 036",
      count: "",
      nome: "Infusion Cond. 300ml",
      price: 8.5,
      estoque: true,
    },
    {
      codigo: "102 037",
      count: "",
      nome: "Miracle Summer Shampoo. 300ml",
      price: 9.0,
      estoque: true,
    },
    {
      codigo: "102 035",
      count: "",
      nome: "Miracle Summer Cond. 300ml",
      price: 9.0,
      estoque: true,
    },
    {
      codigo: "103 010",
      count: "",
      nome: "Blond Mask 180g",
      price: 13.0,
      subLinha: "WEEKLY CARE",
      estoque: true,
    },
    {
      codigo: "103 003",
      count: "",
      nome: "Miracle Mask 180g",
      price: 13.0,
      estoque: true,
    },
    {
      codigo: "103 016",
      count: "",
      nome: "Net Mask 550g",
      price: 19.0,
      estoque: true,
    },
    {
      codigo: "104 012",
      count: "",
      nome: "Night Spa Serum 250ml",
      price: 24.0,
      estoque: true,
    },
    {
      codigo: "104 002",
      count: "",
      nome: "Deluxe Prime 260ml",
      price: 17.0,
      estoque: true,
    },
    {
      codigo: "104 028",
      count: "",
      nome: "Deluxe Prime Champagne Blond 260ml",
      price: 19.0,
      estoque: true,
    },
    {
      codigo: "104 040",
      count: "",
      nome: "Deluxe Prime Summer 260ml",
      price: 19.0,
      estoque: true,
    },
    {
      codigo: "305 024",
      count: "",
      nome: "Hair Protector 250ml",
      price: 12.0,
      subLinha: "FINISH",
      estoque: true,
    },
    {
      codigo: "305 032",
      count: "",
      nome: "Curly Fix 250ml",
      price: 12.0,
      estoque: true,
    },
    {
      codigo: "313 012",
      count: "",
      nome: "Fluid Fix 250ml",
      price: 12.0,
      estoque: true,
    },
    {
      codigo: "305 023",
      count: "",
      nome: "Instant Repair 45ml",
      price: 12.0,
      estoque: true,
    },
    {
      codigo: "305 034",
      count: "",
      nome: "Curly Twist 650ml",
      price: 40.8,
      estoque: true,
    },
    {
      codigo: "313 013",
      count: "",
      nome: "Beach Waves 260ml",
      price: 26.2,
      estoque: true,
    },
    {
      codigo: "211 044",
      count: "",
      nome: "Kit Fast Repair",
      price: 101.0,
      linha: "PROFISSIONAL",
      subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      estoque: true,
    },
    {
      codigo: "201 011",
      count: "",
      nome: "Bidimensional Sh. 1000ml",
      price: 33.0,
      estoque: true,
    },
    {
      codigo: "201 028",
      count: "",
      nome: "No Metal Equalizer Shampoo 1000ml",
      price: 58.8,
      estoque: true,
    },
    {
      codigo: "204 006",
      count: "",
      nome: "Lipidic 650ml",
      price: 28.0,
      estoque: true,
    },
    {
      codigo: "203 006",
      count: "",
      nome: "Intensive Nutrition 1000ml",
      price: 33.0,
      estoque: true,
    },
    {
      codigo: "201 012",
      count: "",
      nome: "Clarifying Sh. 1000ml",
      price: 33.0,
      estoque: true,
    },
    {
      codigo: "205 011",
      count: "",
      nome: "Amino Miracle 225ml",
      price: 20.0,
      estoque: true,
    },
    {
      codigo: "201 015",
      count: "",
      nome: "Basic Shampoo 2400ml",
      subLinha: "BACK BAR ESSENTIALS",
      price: 71.8,
      estoque: true,
    },
    {
      codigo: "202 014",
      count: "",
      nome: "Basic Conditioner 2400ml",
      price: 78.4,
      estoque: true,
    },
    {
      codigo: "201 027",
      count: "",
      nome: "Therapy Shampoo 1000ml.",
      price: 28.0,
      estoque: true,
    },
    {
      codigo: "204 022",
      count: "",
      nome: "8x Powder 200g",
      price: 59.0,
      subLinha: "PERFECT BLOND",
      estoque: true,
    },
    {
      codigo: "409 006",
      count: "",
      nome: "Air Libre 500g",
      price: 23.0,
      estoque: true,
    },
    {
      codigo: "409 007",
      count: "",
      nome: "Blanc Blond 500g",
      price: 23.0,
      estoque: true,
    },
    {
      codigo: "k.415000",
      count: "",
      nome: "Papel Laminado Longo 50 x 11",
      price: 28.0,
      estoque: true,
    },
    {
      codigo: "k.416000",
      count: "",
      nome: "Papel Laminado Curto 25 x 11",
      price: 28.0,
      estoque: true,
    },
    {
      codigo: "204 025",
      count: "",
      nome: "K. Recovery 650ml",
      price: 59.0,
      subLinha: "RECOVERY ESSENTIALS",
      estoque: true,
    },
    {
      codigo: "203 008",
      count: "",
      nome: "Infusion 650ml",
      price: 51.0,
      estoque: true,
    },
    {
      codigo: "210 010",
      count: "",
      nome: "High Liss 650ml",
      price: 70.0,
      subLinha: "SMOOTHING TREATMENT",
      estoque: true,
    },
    {
      codigo: "210 011",
      count: "",
      nome: "High Liss Blond 650ml",
      price: 75.0,
      estoque: true,
    },
    {
      codigo: "414 001",
      count: "",
      nome: "Natural Copper Golden 0.43 60g",
      price: 9.8,
      subLinha: "TONNERS",
      estoque: true,
    },
    {
      codigo: "414 002",
      count: "",
      nome: "Natural Golden 0.03 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 003",
      count: "",
      nome: "Natural Golden Copper 0.034 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 004",
      count: "",
      nome: "Natural Golden Copper 0.34 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 005",
      count: "",
      nome: "Lightest Golden Blonde 10.3 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 006",
      count: "",
      nome: "Lightest Burgandy Blonde 10.72 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 008",
      count: "",
      nome: "Light Brown Golden Blonde 8.73 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 009",
      count: "",
      nome: "Super High Light Platinum Blonde 11.2 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "414 010",
      count: "",
      nome: "Super High Lift Violet Ash Blonde 11.21 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "407 031",
      count: "",
      nome: "Light Brown 5.0 60g",
      price: 9.8,
      subLinha: "PERMANENT",
      estoque: true,
    },
    {
      codigo: "407 032",
      count: "",
      nome: "Dark Blonde 6.0 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "407 033",
      count: "",
      nome: "Medium Blonde 7.0 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "407 034",
      count: "",
      nome: "Light Blonde 8.0 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "407 063",
      count: "",
      nome: "Very Light Pearl Blonde 9.89 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 016",
      count: "",
      nome: "Light Brown 5.0 S/P 60g",
      price: 9.8,
      subLinha: "SEMI PERMANENT",
      estoque: true,
    },
    {
      codigo: "406 017",
      count: "",
      nome: "Dark Blonde 6.0 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 018",
      count: "",
      nome: "Medium Blonde 7.0 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 019",
      count: "",
      nome: "Light Blonde 8.0 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 006",
      count: "",
      nome: "Dark Golden Blonde 6.3 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 026",
      count: "",
      nome: "Very Light Golden Beige Blonde 9.31 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 010",
      count: "",
      nome: "Medium Chestnut Blonde 7.7 S/P 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 004",
      count: "",
      nome: "Dark Ash Blonde 6.1 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 008",
      count: "",
      nome: "Dark Chestnut Blonde 6.7 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 009",
      count: "",
      nome: "Medium Ash Blonde 7.1 60g",
      price: 9.8,
      estoque: true,
    },
    {
      codigo: "406 025",
      count: "",
      nome: "Medium Pearl Blonde 7.89 S/P 60g",
      price: 9.8,
      estoque: true,
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
}

module.exports = state
