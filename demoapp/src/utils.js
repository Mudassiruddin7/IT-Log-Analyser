// import { campLocation } from "./data";

// const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

// export const randomElementFromArray = (arr) => {
//   return arr[Math.floor(Math.random() * arr.length)];
// };
// export const randomInteger = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1)) + min;

// export const replaceVariable = (str, logData) => {
//   let str2 = str;
//   if (!str2) return "";
//   str2 = str2.replace("{username}", logData.user);
//   str2 = str2.replace("{source_ip}", logData.source);
//   str2 = str2.replace("{device}", logData.device);
//   str2 = str2.replace("{port}", randomInteger(1, 65535));
//   str2 = str2.replace("{domain}", `example${randomInteger(1, 1000)}.com`);
//   str2 = str2.replace("{filename}", `file${randomInteger(1, 1000)}.txt`);
//   str2 = str2.replace("{reason}", `Reason${randomInteger(1, 10)}`);
//   str2 = str2.replace(
//     "{error_message}",
//     `Error message: ${randomInteger(1, 100)}`
//   );
//   str2 = str2.replace("{app_name}", `App${randomInteger(1, 10)}`);
//   str2 = str2.replace("{api_name}", `API${randomInteger(1, 5)}`);
//   str2 = str2.replace(
//     "{access_type}",
//     randomElementFromArray(["Read", "Write", "Delete"])
//   );
//   str2 = str2.replace(
//     "{file_path}",
//     `/path/to/file${randomInteger(1, 1000)}.txt`
//   );
//   str2 = str2.replace("{software_name}", `Software${randomInteger(1, 10)}`);
//   str2 = str2.replace("{version}", `v${randomInteger(1, 5)}`);

//   return str2;
// };

// export const randomIP = () => {
//   return `${randomInteger(1, 255)}.${randomInteger(1, 255)}.${randomInteger(
//     1,
//     255
//   )}.${randomInteger(1, 255)}`;
// };
// export const addLogEntrytoDatabase = async (logData) => {
//   try {
//     const response = await fetch(`${BACKEND_BASE_URL}/addLog`, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({ logData }),
//     });
//     const res = await response.json();
//     if (res.message == "Success") alert("Log Added");
//     else throw "Error";
//   } catch (e) {
//     alert("Something Went Wrong Here");
//     console.log(e);
//   }
// };
// export const addNumberofLogstoDatabase = async (number, campLocation) => {
//   try {
//     const response = await fetch(`${BACKEND_BASE_URL}/addLogs`, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify({
//         numberoflogs: number,
//         campLocation: campLocation,
//       }),
//     });
//     const res = await response.json();
//     if (res.message == "Success") alert("Logs Added");
//     else throw "Error";
//   } catch (e) {
//     alert("Something Went Wrong Here");
//     console.log(e);
//   }
// };
// export const addLogsToIPFSandBlockchain = async () => {
//   console.log("HI Booss!!")
//   try {
//     const response = await fetch(`${BACKEND_BASE_URL}/triggerIPFSBlockChain`, {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//     });
//     const res = await response.json();
//     if (res.message == "Success") alert("Logs Added");
//     else throw "Error";
//   } catch (e) {
//     alert("Something Went Wrong Here");
//     console.log(e);
//   }
// };

import { campLocation } from "./data";

const BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL;

export const randomElementFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const randomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const replaceVariable = (str, logData) => {
  let str2 = str;
  if (!str2) return "";
  const replacements = {
    "{username}": logData.user,
    "{source_ip}": logData.source,
    "{device}": logData.device,
    "{port}": randomInteger(1, 65535),
    "{domain}": `example${randomInteger(1, 1000)}.com`,
    "{filename}": `file${randomInteger(1, 1000)}.txt`,
    "{reason}": `Reason${randomInteger(1, 10)}`,
    "{error_message}": `Error message: ${randomInteger(1, 100)}`,
    "{app_name}": `App${randomInteger(1, 10)}`,
    "{api_name}": `API${randomInteger(1, 5)}`,
    "{access_type}": randomElementFromArray(["Read", "Write", "Delete"]),
    "{file_path}": `/path/to/file${randomInteger(1, 1000)}.txt`,
    "{software_name}": `Software${randomInteger(1, 10)}`,
    "{version}": `v${randomInteger(1, 5)}`
  };

  Object.keys(replacements).forEach(key => {
    str2 = str2.replace(new RegExp(key, 'g'), replacements[key]);
  });

  return str2;
};

export const randomIP = () => {
  return `${randomInteger(1, 255)}.${randomInteger(1, 255)}.${randomInteger(
    1,
    255
  )}.${randomInteger(1, 255)}`;
};

const handleFetchResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    return { message: "Error", error: error.message || "Unknown error" };
  }
  return response.json();
};

export const addLogEntrytoDatabase = async (logData) => {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/addLog`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logData }),
    });
    return await handleFetchResponse(response);
  } catch (e) {
    console.log("Network error:", e);
    return { message: "Error", error: e.message || "Network error" };
  }
};

export const addNumberofLogstoDatabase = async (number, campLocation) => {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/addLogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        numberoflogs: number,
        campLocation: campLocation,
      }),
    });
    return await handleFetchResponse(response);
  } catch (e) {
    console.log("Network error:", e);
    return { message: "Error", error: e.message || "Network error" };
  }
};

export const addLogsToIPFSandBlockchain = async () => {
  try {
    const response = await fetch(`${BACKEND_BASE_URL}/triggerIPFSBlockChain`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await handleFetchResponse(response);
  } catch (e) {
    console.log("Network error:", e);
    return { message: "Error", error: e.message || "Network error" };
  }
};

