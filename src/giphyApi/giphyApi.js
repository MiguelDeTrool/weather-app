const apiKey1 = "DBBTWHuNLiktqITm";
const apiKey2 = "hc4mYQe5C1SPlrca";
const apiKey = apiKey1 + apiKey2;

const giphyApi = (() => {
  const getNewUrl = async (txt) => {
    try {
      let search = "";

      if (txt === "") {
        search = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
      } else {
        search = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=Weather ${txt}&rating=g&offset=4`;
      }

      const response = await fetch(search, { mode: "cors" });

      const responseData = await response.json();

      return responseData.data.images.fixed_height.url;
    } catch (err) {
      return "https://kidsownpublishing.com/wp-content/uploads/2012/09/no-img.jpg";
    }
  };

  return {
    getNewUrl,
  };
})();

export default giphyApi;
