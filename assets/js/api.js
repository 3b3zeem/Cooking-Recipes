"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "35de44a7";
const APP_KEY = "741ffc341860cc1dae89b29b7325d052";
const TYPE = "public";

export const fetchData = async function (queries, successCAllback) {
  const query = queries
    ?.map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
    query ? `&${query}` : ""
  }`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    successCAllback(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// export const fetchData = async function (queries, successCAllback) {
//   const query = queries
    // ?.join("&")
//     .replace(/,/g, "=")
//     .replace(/ /g, "%20")
//     .replace(/\+/g, "%2B");

//   const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${APP_KEY}&type=${TYPE}${
//     query ? `&${query}` : ""
//   }`;

//   const response = await fetch(url);

//   if (response.ok) {
//     const data = await response.json();
//     successCAllback(data);
//   }
// };
