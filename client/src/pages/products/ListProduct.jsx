import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import UpdateModal from "../../components/Layout/UpdateModal";
import Menu from "../../components/Layout/Menu";
import toast from "react-hot-toast";
import axios from "axios";
import Layout from "../../components/Layout/Layout";

const ListProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  // Listar todos os produtos cadastrados
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`/api/product/get-all-product`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao listar os produtos");
    }
  };

  const data = products;

  const columns = [
    {
      name: "Nome",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Quant",
      selector: (row) => row.quantity,
      sortable: true,
      maxWidth: "150px",
    },
    {
      name: "Preço",
      selector: (row) => row.price,
      sortable: true,
      cell: (row) => formatPrice(row.price),
      maxWidth: "150px",
    },
    {
      name: "Ações",
      cell: (row) => (
        <>
          <div className="btn btn-primary">
            <UpdateModal
              slug={row.slug}
              onClose={() => {
                getAllProducts();
              }}
            />
          </div>
          <div
            className="btn btn-danger mx-4"
            onClick={() => handleDelete(row.slug)}
          >
            Apagar
          </div>
        </>
      ),
    },
  ];

  // Deletar um produto
  const handleDelete = async (slug) => {
    let answer = window.confirm("Deseja deletar o produto?");
    if (!answer) return;
    try {
      const { data } = await axios.delete(
        `/api/product/delete-product/${slug}`
      );
      if (data?.success) {
        toast.success("Produto deletado com sucesso");
        getAllProducts();
      } else {
        toast.error("Erro ao deletar o produto");
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar o produto");
    }
  };

  const formatPrice = (price) => {
    return price.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Layout title={"Vendinha da Vó | Lista"}>
      <div className="container-fluid m-3">
        <div className="row">
          <div className="col-md-3">
            <Menu products={products} />
          </div>
          <div className="col-md-8" style={{ textTransform: "uppercase" }}>
            <div className="text-center w-100">
              <h4>Lista de Produtos</h4>
              <div>
                <DataTable
                  columns={columns}
                  data={data}
                  pagination
                  paginationPerPage={5}
                  paginationRowsPerPageOptions={[5, 10, 15, 20, 25]}
                  highlightOnHover
                  striped
                  noHeader
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListProduct;
