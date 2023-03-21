import React from "react";
import styles from "./Produtos.module.css";
import { Link } from "react-router-dom";
import Head from "./Head";

const Produtos = () => {
  const [produtos, setprodutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((r) => r.json())
      .then((json) => setprodutos(json));
  }, []);

  if (produtos === null) return null;
  return (
    <section>
      <Head title="Ranek" description="Descricao do site Ranek" />
      <h1 className={styles.produtos + " animeLeft"}>
        {produtos.map((produto) => (
          <Link to={`produto/${produto.id}`} key={produto.id}>
            <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h1 className={styles.nome}>{produto.nome}</h1>
          </Link>
        ))}
      </h1>
    </section>
  );
};

export default Produtos;
