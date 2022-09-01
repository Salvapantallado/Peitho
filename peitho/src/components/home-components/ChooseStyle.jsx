// import SanValentin from "/ProductImages/Vestido-SanValentin.jpeg"

export default function ChooseYourStyle() {
    return (
        <div className="style-container">
            <div className="section-title">
                <h1>Elegí tu estilo!</h1>
            </div>
            <div className="peitho-style">
                <div className="peitho-cute">
                    <img src="/ProductImages/Vestido-SanValentin.jpeg" alt="" />
                    <h2>Peitho cute</h2>
                </div>
                <div className="peitho-alternativo">
                    <img src="/ProductImages/test.jpg" alt="" />
                    <h2>Peitho alternativo</h2>
                </div>
            </div>
        </div>
    )
}