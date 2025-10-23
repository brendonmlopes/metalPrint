export default function LiveView(props){
  return (
    <div>
      <video 
        width="600" 
        height="400" 
        controls 
        autoPlay 
        muted 
        loop
        style={{borderRadius: '10px', border: '2px solid #333'}}
      >
        <source src={props.source} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
