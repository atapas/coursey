const YoutubeEmbed = ({src}: {src:string}) => {
  return (
    <div className="relative left-1/2 -translate-x-1/2 w-3/4 pb-[56.25%] mb-4 overflow-hidden ">
      <iframe 
        src={src} 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="absolute w-full h-full border rounded border-gray-600 shadow-md">
      </iframe>
    </div>
  );
}

export default YoutubeEmbed;