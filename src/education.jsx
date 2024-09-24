import CentColl from './CentColl.png'
export default function Education() {
    return (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            <h1 id="centcoll">Education</h1>
            <p>Education</p>
            <p>I have done a year in the game programming course at centennial college</p>
            <p>I have also completed one semester in the biomedical engineering technologies course in the same college</p>
            <img src={CentColl} alt="Centennial college banner" height="200" width ="800" />
        </div>
    );
}