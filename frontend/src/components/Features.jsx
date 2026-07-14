import FeatureCard from "./FeatureCard";

function Features() {

    const features = [

        {
            title:"PDF Parsing",
            description:"Extract text while maintaining formatting."
        },

        {
            title:"OCR",
            description:"Read scanned images using AI OCR."
        },

        {
            title:"AI Suggestions",
            description:"Improve engagement using Gemini AI."
        }

    ]

    return (

        <section className="max-w-6xl mx-auto mt-24">

            <h2 className="text-4xl text-center font-bold text-white mb-10">

                Features

            </h2>

            <div className="grid md:grid-cols-3 gap-8">

                {features.map((feature,index)=>

                    <FeatureCard
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    />

                )}

            </div>

        </section>

    )

}

export default Features;