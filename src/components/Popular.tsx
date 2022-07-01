import  { useEffect, useState } from "@wordpress/element";

type Recipe = {
  id: number;
  title: string;
  image: string;
};

function Popular() {
  const [popular, setPopular] = useState<Recipe[] | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPopular = async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL +
          "/recipes/random?apiKey=" +
          process.env.REACT_APP_API_KEY +
          "&number=10"
      );

      const data = await response.json();
      setPopular(data.recipes);
      setLoading(false);
    };
    getPopular();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {popular &&
        popular.map((recipe) => {
          return (
            <div key={recipe.id}>
              <img src={recipe.image} width={150} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default Popular;
