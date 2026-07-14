function FeatureCard({ title, description }) {
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <h3 className="text-cyan-400 text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;