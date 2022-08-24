import "../../styles/mainImage.css";

export default function MainImage() {
  return (
    <div className="main-img">
      <img
        src="https://i.pinimg.com/originals/47/4f/f3/474ff3319df17354e29327d37d37fc2d.png"
        alt="fondo"
      />
      <div className="main-img_text">
        <h1>Bienvenido a Peitho!</h1>
        <h2>Ropa hecha a mano, a tu medida!</h2>
        <h3>Con amor y dedicación </h3>
      </div>
    </div>
  );
}
