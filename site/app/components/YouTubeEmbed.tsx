const YoutubeEmbed = ({src}: {src:string}) => {
  return (
    <div className="relative w-full pb-[56.25%] overflow-hidden ">
      <iframe 
        src={src} 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute top-10 left-1/2 -translate-x-1/2 w-4/5 h-4/5 border rounded border-gray-600 shadow-md">
      </iframe>
    </div>
  );
}

export default YoutubeEmbed;