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
      price: 10.9,
      linha: "HOMECARE",
      subLinha: "DAILY CARE",
      estoque: true,
    },
    {
      codigo: "102 001",
      count: "",
      nome: "Equilibrium Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "101 003",
      count: "",
      nome: "Blond Sh. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 003",
      count: "",
      nome: "Blond Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "101 006",
      count: "",
      nome: "Miracle Sh. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 006",
      count: "",
      nome: "Miracle Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "101 007",
      count: "",
      nome: "Sh. Therapy 300ml",
      price: 12.9,
      estoque: true,
    },
    {
      codigo: "101 038",
      count: "",
      nome: "Curly Sh. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 036",
      count: "",
      nome: "Curly Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "101 038",
      count: "",
      nome: "Infusion Sh. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 036",
      count: "",
      nome: "Infusion Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 037",
      count: "",
      nome: "Miracle Summer Shampoo. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "102 035",
      count: "",
      nome: "Miracle Summer Cond. 300ml",
      price: 10.9,
      estoque: true,
    },
    {
      codigo: "103 010",
      count: "",
      nome: "Blond Mask 180g",
      price: 15.9,
      subLinha: "WEEKLY CARE",
      estoque: true,
    },
    {
      codigo: "103 003",
      count: "",
      nome: "Miracle Mask 180g",
      price: 15.9,
      estoque: true,
    },
    {
      codigo: "103 016",
      count: "",
      nome: "Net Mask 550g",
      price: 22.9,
      estoque: true,
    },
    {
      codigo: "104 012",
      count: "",
      nome: "Night Spa Serum 250ml",
      price: 30.9,
      estoque: true,
    },
    {
      codigo: "104 002",
      count: "",
      nome: "Deluxe Prime 260ml",
      price: 20.9,
      estoque: true,
    },
    {
      codigo: "104 028",
      count: "",
      nome: "Deluxe Prime Champagne Blond 260ml",
      price: 23.9,
      estoque: true,
    },
    {
      codigo: "104 040",
      count: "",
      nome: "Deluxe Prime Summer 260ml",
      price: 23.9,
      estoque: true,
    },
    {
      codigo: "305 024",
      count: "",
      nome: "Hair Protector 250ml",
      price: 14.9,
      subLinha: "FINISH",
      estoque: true,
    },
    {
      codigo: "305 032",
      count: "",
      nome: "Curly Fix 250ml",
      price: 14.9,
      estoque: true,
    },
    {
      codigo: "313 012",
      count: "",
      nome: "Fluid Fix 250ml",
      price: 14.9,
      estoque: true,
    },
    {
      codigo: "305 023",
      count: "",
      nome: "Instant Repair 45ml",
      price: 14.9,
      estoque: true,
    },
    {
      codigo: "305 034",
      count: "",
      nome: "Curly Twist 650ml",
      price: 38.9,
      estoque: true,
    },
    {
      codigo: "313 013",
      count: "",
      nome: "Beach Waves 260ml",
      price: 24.9,
      estoque: true,
    },
    {
      codigo: "211 044",
      count: "",
      nome: "Kit Fast Repair (3 Produtos)",
      price: 122.9,
      linha: "PROFISSIONAL",
      subLinha: "BACK BAR ESSENTIALS - MIRACLE",
      estoque: true,
    },
    {
      codigo: "710",
      count: "",
      nome: "Kit Perfect Balayage (3 Produtos)",
      price: 182.9,
      estoque: true,
    },
    {
      codigo: "201 011",
      count: "",
      nome: "Bidimensional Sh. 1000ml",
      price: 40.9,
      estoque: true,
    },
    {
      codigo: "201 028",
      count: "",
      nome: "No Metal Equalizer Shampoo 1000ml",
      price: 58.9,
      estoque: true,
    },
    {
      codigo: "204 006",
      count: "",
      nome: "Lipidic 650ml",
      price: 35.9,
      estoque: true,
    },
    {
      codigo: "203 006",
      count: "",
      nome: "Intensive Nutrition 1000ml",
      price: 40.9,
      estoque: true,
    },
    {
      codigo: "201 012",
      count: "",
      nome: "Clarifying Sh. 1000ml",
      price: 40.9,
      estoque: true,
    },
    {
      codigo: "205 011",
      count: "",
      nome: "Amino Miracle 225ml",
      price: 24.9,
      estoque: true,
    },
    {
      codigo: "201 015",
      count: "",
      nome: "Basic Shampoo 2400ml",
      subLinha: "BACK BAR ESSENTIALS",
      price: 70.9,
      estoque: true,
    },
    {
      codigo: "202 014",
      count: "",
      nome: "Basic Conditioner 2400ml",
      price: 77.9,
      estoque: true,
    },
    {
      codigo: "201 027",
      count: "",
      nome: "Therapy Shampoo 1000ml.",
      price: 40.9,
      estoque: true,
    },
    {
      codigo: "204 022",
      count: "",
      nome: "8x Powder 200g",
      price: 71.9,
      subLinha: "PERFECT BLOND",
      estoque: true,
    },
    {
      codigo: "409 006",
      count: "",
      nome: "Air Libre 500g",
      price: 25.9,
      estoque: true,
    },
    {
      codigo: "409 007",
      count: "",
      nome: "Blanc Blond 500g",
      price: 25.9,
      estoque: true,
    },
    {
      codigo: "k.415000",
      count: "",
      nome: "Papel Laminado Longo 50 x 11",
      price: 34.9,
      estoque: true,
    },
    {
      codigo: "k.416000",
      count: "",
      nome: "Papel Laminado Curto 25 x 11",
      price: 34.9,
      estoque: true,
    },
    {
      codigo: "k.418000",
      count: "",
      nome: "Papel Eco Mechas Personalizado (MINIMO 50KG)",
      price: 12.9,
      estoque: true,
    },
    {
      codigo: "k.419000",
      count: "",
      nome: "Papel Eco Mechas Normal (1KG)",
      price: 14.9,
      estoque: true,
    },

    {
      codigo: "204 025",
      count: "",
      nome: "K. Recovery 650ml",
      price: 73.9,
      subLinha: "RECOVERY ESSENTIALS",
      estoque: true,
    },
    {
      codigo: "211 045",
      count: "",
      nome: "Fluid Deep Reconstruction 500ml",
      price: 82.2,
      subLinha: "RECOVERY ESSENTIALS",
      estoque: true,
    },
    {
      codigo: "203 008",
      count: "",
      nome: "Infusion 650ml",
      price: 64.9,
      estoque: true,
    },
    {
      codigo: "210 010",
      count: "",
      nome: "High Liss 650ml",
      price: 85.9,
      subLinha: "SMOOTHING TREATMENT",
      estoque: true,
    },
    {
      codigo: "210 011",
      count: "",
      nome: "High Liss Blond 650ml",
      price: 91.9,
      estoque: true,
    },
    {
      codigo: "414 001",
      count: "",
      nome: "Natural Copper Golden 0.43 60g",
      price: 9.9,
      subLinha: "TONNERS",
      estoque: true,
    },
    {
      codigo: "414 002",
      count: "",
      nome: "Natural Golden 0.03 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 003",
      count: "",
      nome: "Natural Golden Copper 0.034 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 004",
      count: "",
      nome: "Lightest Golden Blond 10.3 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 005",
      count: "",
      nome: "Lightest Burgandy Blonde 10.72 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 006",
      count: "",
      nome: "Lightest Pearl Blond 10.89 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 008",
      count: "",
      nome: "Light Brown Golden Blonde 8.73 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 009",
      count: "",
      nome: "Super High Light Platinum Blonde 11.2 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "414 010",
      count: "",
      nome: "Super High Lift Violet Ash Blonde 11.21 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "407 031",
      count: "",
      nome: "Light Brown 5.0 60g",
      price: 9.9,
      subLinha: "PERMANENT",
      estoque: true,
    },
    {
      codigo: "407 032",
      count: "",
      nome: "Dark Blonde 6.0 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "407 033",
      count: "",
      nome: "Medium Blonde 7.0 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "407 034",
      count: "",
      nome: "Light Blonde 8.0 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "407 063",
      count: "",
      nome: "Very Light Pearl Blonde 9.99 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 016",
      count: "",
      nome: "Light Brown 5.0 S/P 60g",
      price: 9.9,
      subLinha: "SEMI PERMANENT",
      estoque: true,
    },
    {
      codigo: "406 017",
      count: "",
      nome: "Dark Blonde 6.0 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 018",
      count: "",
      nome: "Medium Blonde 7.0 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 019",
      count: "",
      nome: "Light Blonde 8.0 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 006",
      count: "",
      nome: "Dark Golden Blonde 6.3 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 026",
      count: "",
      nome: "Very Light Golden Beige Blonde 9.31 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 010",
      count: "",
      nome: "Medium Chestnut Blonde 7.7 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 004",
      count: "",
      nome: "Dark Ash Blonde 6.1 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 008",
      count: "",
      nome: "Dark Chestnut Blonde 6.7 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 009",
      count: "",
      nome: "Medium Ash Blonde 7.1 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "406 025",
      count: "",
      nome: "Medium Pearl Blonde 7.89 S/P 60g",
      price: 9.9,
      estoque: true,
    },
    {
      codigo: "85163200",
      count: "",
      nome: "PRO 480 GREY BIVOLT 127V-220V - MQ",
      subLinha: "MQ",
      price: 175,
      estoque: true,
    },
    {
      codigo: "85163200.32",
      count: "",
      nome: "MODELADOR GOLD 32MM (PINÇA) 220V",
      price: 170,
      estoque: true,
    },
    {
      codigo: "85163200.25",
      count: "",
      nome: "MODELADOR GOLD 25MM (PINÇA) 220V",
      price: 170,
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
