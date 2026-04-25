 export const netLOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

 export const USER_AVTAR = "https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6";

 export const MAIN_PAGE = "https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_large.jpg";

const TMDB_BEARER_TOKEN = process.env.REACT_APP_TMDB_BEARER_TOKEN;

if (!TMDB_BEARER_TOKEN) {
  console.warn("Missing REACT_APP_TMDB_BEARER_TOKEN. TMDB requests will fail until it is set in your environment.");
}

 export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${TMDB_BEARER_TOKEN || ""}`
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANGUAGES = [
  {identifier : "en", name :"English"},
  {identifier : "hindi", name :"Hindi"},
  {identifier : "japanese",name :"Japenese"},
  {identifier : "spanish", name :"Spanish"}
];

const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY;