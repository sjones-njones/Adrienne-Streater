import ParticlesBg from 'particles-bg';
import '../../App.css'
const Background = () => {
  const color1 = ["#F9943B", "#F9728C", "#F9728C"]
  const color2 = ["#298C9B", "#A159F4"]

  


  return (


    <div className=''>
      <ParticlesBg className='' style={{ position: "fixed" }} color={color1} num={12} type='circle'
        bg={{
          position: "fixed",
          zIndex: -1,
          top: 0,
          left: 0
        }} />


      <ParticlesBg color={color2} num={4} type='circle' bg={{
        position: "fixed",
        zIndex: -1,
        top: 0,
        left: 0
      }} /> 


    </div>
  );
};

export default Background;
