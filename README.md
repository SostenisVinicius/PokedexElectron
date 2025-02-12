# Pokédex Electron 🚀

A aplicação é uma **Pokédex** que consome dados da **PokéAPI**, exibindo Pokémon em **cards** de forma responsiva.

## 🛠️ Tecnologias Utilizadas

- **ReactJS + Vite** → Para um ambiente de desenvolvimento rápido e eficiente.
- **TypeScript** → Para garantir tipagem estática e melhor manutenção do código.
- **TailwindCSS** → Para estilização eficiente e responsiva.
- **Electron (Opcional)** → Para possibilitar execução como aplicativo desktop.
- **PokéAPI** → API pública usada para buscar os dados dos Pokémon.
- **React Context API** → Para gerenciamento de estado global (tema Dark/Light).
- **React Testing Library + Vitest** → Para garantir a qualidade do código com testes automatizados.

---

## 🔧 **Instalação e Execução**

### **1️⃣ Clonar o Repositório**

```sh
git clone https://github.com/SostenisVinicius/PokedexElectron.git
cd pokedex-electron
```

### **2️⃣ Instalar as Dependências**

```sh
npm install
```

### **3️⃣ Rodar a Aplicação em Desenvolvimento**

```sh
npm run dev
```

A aplicação estará disponível em **http://localhost:5173/**.

### **4️⃣ Rodar a Versão com Electron (Opcional)**

```sh
npm run electron-dev
```

### **5️⃣ Rodar Testes**

```sh
npm run test
```

---

## 🎨 **Funcionalidades Implementadas**

✅ **Consumo da PokéAPI** para listar Pokémon.  
✅ **Exibição dos Pokémon em cards responsivos**.  
✅ **Pesquisa por nome de Pokémon**.  
✅ **Scroll infinito para carregamento dinâmico**.  
✅ **Modo Dark/Light com Context API e persistência no `localStorage`**.  
✅ **Testes unitários e de acessibilidade com Vitest + React Testing Library**.

---

## 📌 **Escolhas Técnicas**

### **🖥️ React + Vite**

Escolhi **Vite** em vez de Create React App devido à sua **rapidez** no build e **suporte nativo ao TypeScript**.

### **🎨 TailwindCSS**

Facilitou a **responsividade** e reduziu o uso de arquivos CSS, tornando o código mais limpo.

### **⚡ Electron (Opcional)**

A inclusão do **Electron** permite rodar a aplicação como um **app desktop**, mas mantendo a estrutura React.

### **🌃 Context API para o Tema**

Usei o **React Context API** para alternância entre **modo Dark e Light**, garantindo uma experiência mais agradável ao usuário.

### **🧩 Testes Automatizados**

Implementei **testes com Vitest e React Testing Library** para:

- **Testar a renderização e funcionamento dos componentes.**
- **Garantir acessibilidade nos elementos interativos.**

---

## 🐝 **Licença**

Este projeto é de uso livre para aprendizado e melhorias. Sinta-se à vontade para contribuir! 🚀

---

### 💡 **Contato**

Caso tenha dúvidas ou sugestões, entre em contato:  
📧 **Email:** [Socratis\_\_@hotmail.com](mailto:Socratis__@hotmail.com)  
🔗 **GitHub:** [github.com/SostenisVinicius](https://github.com/SostenisVinicius)
