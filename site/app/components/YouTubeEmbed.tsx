const YoutubeEmbed = ({src}: {src:string}) => {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden">
      <iframe 
        src={src} 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0">
      </iframe>
    </div>
  );
}

export default YoutubeEmbed;