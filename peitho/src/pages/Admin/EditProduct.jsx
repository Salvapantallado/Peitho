import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { createBrowserHistory } from "history";
import { useNavigate, useParams } from "react-router-dom";
import {
  clearproductToEdit,
  editProduct,
  getAllProducts,
  getproductToEdit,
  postProduct,
} from "../../actions";
import ImageUploading from "react-images-uploading";

import "../../styles/addProduct.css";

import Ticker from "../../components/shared-components/Ticker";
import Navbar from "../../components/shared-components/Navbar";

export default function EditProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.allProducts)
  const productToEdit = products.find(item => item.id === parseInt(id))
  const [loadScreen, setLoadScreen] = useState(false);

  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList) => {
    // data for submit
    console.log(imageList);
    setImages(imageList);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    description: "",
    price: 0,
    image: [],
    price2: 0,
    description2: "",
    // category: []
  });
  
  const [Category, setCategory] = useState([]);

  useEffect(() => {
    if (productToEdit) {
      setInput({
        name: productToEdit.name,
        description: productToEdit.description,
        price: productToEdit.price,
        // image: productToEdit.image?.map(x => ({data_url: x})),
        price2: productToEdit.price2,
        description2: productToEdit.description2,
        // category: productToEdit.categories
      });
      setImages(productToEdit.image?.map((x) => ({data_url: x})))
      setCategory(productToEdit.categories[0].name)
      console.log(input, "input");
    }
  }, [productToEdit]);


  useEffect(() => {
    console.log(input, "refresh");
    console.log(Category);
    setInput({
      ...input,
      category: Category,
      image: images?.map((x) => x.data_url),
    });
  }, [Category, images]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
      category: Category,
      image: images.map((x) => x.data_url),
      //   image: images,
    });
  };

  const handleCategories = (e) => { 
    if(Category === "") return
    console.log(e.target.value);
    setCategory(e.target.value);
  };

  async function handleFormSubmit(e) {
    try {
      e.preventDefault();
      dispatch(editProduct({...input, input, id: parseInt(id)} ));
      console.log(input);

      alert("Producto editado!");

      navigate("/inicio");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Ticker />
      <Navbar loadScreen={loadScreen} setLoadScreen={setLoadScreen} />
      <div className="container-add-product">
        <div className="add-form">
          <button className="go-back-btn" onClick={() => navigate("/admin")}>
            Volver
          </button>
          <form className="form" onSubmit={(e) => handleFormSubmit(e)}>
            <div>
              <label>Nombre:</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={input.name || ""}
              />
            </div>
            <div>
              <label>Descripcion:</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                value={input.description || ""}
              />
            </div>
            <div>
              <label>Precio:</label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                value={input.price || ""}
              />
            </div>
            <div>
              <label>Precio 2:</label>
              <input
                type="text"
                name="price2"
                onChange={handleChange}
                value={input.price2 || ""}
              />
            </div>
            <div>
              <label>Descripcion 2:</label>
              <input
                type="text"
                name="description2"
                onChange={handleChange}
                value={input.description2 || ""}
              />
            </div>
            <div>
              <select onChange={handleCategories}>
                <option value="tops">Tops</option>
                <option value="polleras">Polleras</option>
                <option value="vestidos">Vestidos</option>
                <option value="pantalones">Pantalones</option>
                <option value="abrigos">Abrigos</option>
                <option value="camisas">Camisas</option>
              </select>
            </div>
            <div>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg"]}
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    <button
                      type="button"
                      style={isDragging ? { color: "red" } : null}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                    &nbsp;
                    <button onClick={onImageRemoveAll} type="button">
                      Remove all images
                    </button>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image.data_url} alt="" width="100" />
                        <div className="image-item__btn-wrapper">
                          <button
                            onClick={() => onImageUpdate(index)}
                            type="button"
                          >
                            Update
                          </button>
                          <button
                            onClick={() => onImageRemove(index)}
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            <div>
              <button type="submit">Agregar producto</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
