const FeatureCards = () => {
    const features = [
      { title: "Photo Editor", imageUrl: "https://source.unsplash.com/400x300/?landscape" },
      { title: "VSCO Canvas", imageUrl: "https://source.unsplash.com/400x300/?abstract" },
      { title: "VSCO Sites", imageUrl: "https://source.unsplash.com/400x300/?city" },
      { title: "Photo Presets", imageUrl: "https://source.unsplash.com/400x300/?nature" },
    ];
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
            <img src={feature.imageUrl} alt={feature.title} className="w-full h-32 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold">{feature.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default FeatureCards;
  