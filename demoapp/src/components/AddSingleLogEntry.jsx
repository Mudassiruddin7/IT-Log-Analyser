// import React from "react";
// import { Button, Input, Tooltip, Select, SelectItem } from "@nextui-org/react";
// import { DicesIcon } from "lucide-react";
// import { useState } from "react";
// import {
//   randomElementFromArray,
//   randomIP,
//   replaceVariable,
//   addLogEntrytoDatabase,
// } from "../utils";
// import * as data from "../data";

// export default function Inputs() {
//   const [logData, setlogData] = useState({
//     timestamp: "",
//     source: "",
//     destination: "",
//     user: "",
//     device: "",
//     eventType: "",
//     eventDescription: "",
//     eventSeverity: "",
//     campLocation: "",
//   });

//   return (
//     <div className="max-w-[800px] mx-auto">
//       <div className="flex justify-center text-2xl mb-8 underline uppercase">
//         Demo Application to Add Fake Logs
//       </div>
//       <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">TimeStamp : </span>
//           <div className="max-w-[400px] w-full">
//             <Input
//               className=""
//               type="datetime-local"
//               value={logData.timestamp}
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return { ...prev, timestamp: e.target.value };
//                 })
//               }
//             />
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Source IP : </span>
//           <div className="flex items-center gap-2 max-w-[400px] w-full">
//             <Input
//               className=""
//               type="text"
//               readOnly
//               value={logData.source}
//               label="Source IP Address"
//             />
//             <Tooltip
//               className="min-w-fit w-fit"
//               content={<div>Random Safe IP</div>}
//             >
//               <Button
//                 className="max-w-fit"
//                 color="success"
//                 onClick={() => {
//                   setlogData((prev) => {
//                     return {
//                       ...prev,
//                       source: randomElementFromArray(data.safe_ips),
//                     };
//                   });
//                 }}
//               >
//                 <DicesIcon />
//               </Button>
//             </Tooltip>
//             <Tooltip
//               className="min-w-fit w-fit"
//               content={<div>Random Unsafe IP</div>}
//             >
//               <Button
//                 className="max-w-fit"
//                 color="danger"
//                 onClick={() => {
//                   setlogData((prev) => {
//                     return {
//                       ...prev,
//                       source: randomIP(),
//                     };
//                   });
//                 }}
//               >
//                 <DicesIcon />
//               </Button>
//             </Tooltip>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Destination IP : </span>
//           <div className="flex items-center gap-2 max-w-[400px] w-full">
//             <Input
//               className=""
//               type="text"
//               readOnly
//               value={logData.destination}
//               label="Destination IP Address"
//             />
//             <Tooltip
//               className="min-w-fit w-fit"
//               content={<div>Random Safe IP</div>}
//             >
//               <Button
//                 className="max-w-fit"
//                 color="success"
//                 onClick={() => {
//                   setlogData((prev) => {
//                     return {
//                       ...prev,
//                       destination: randomElementFromArray(
//                         data.safe_destination_ips
//                       ),
//                     };
//                   });
//                 }}
//               >
//                 <DicesIcon />
//               </Button>
//             </Tooltip>
//             <Tooltip
//               className="min-w-fit w-fit"
//               content={<div>Random Unsafe IP</div>}
//             >
//               <Button
//                 className="max-w-fit"
//                 color="danger"
//                 onClick={() => {
//                   setlogData((prev) => {
//                     return {
//                       ...prev,
//                       destination: randomIP(),
//                     };
//                   });
//                 }}
//               >
//                 <DicesIcon />
//               </Button>
//             </Tooltip>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">User : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Select
//               label="Select a User"
//               className="w-full"
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return { ...prev, user: e.target.value };
//                 })
//               }
//             >
//               {data.users.map((user) => (
//                 <SelectItem key={user} value={user}>
//                   {user}
//                 </SelectItem>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Device : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Select
//               label="Select a Device"
//               className="w-full"
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return { ...prev, device: e.target.value };
//                 })
//               }
//             >
//               {data.device.map((device) => (
//                 <SelectItem key={device} value={device}>
//                   {device}
//                 </SelectItem>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Event Type : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Select
//               label="Select an Event Type"
//               className="w-full"
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return {
//                     ...prev,
//                     eventType: e.target.value,
//                     eventDescription: replaceVariable(
//                       data.event_description_templates[e.target.value],
//                       logData
//                     ),
//                   };
//                 })
//               }
//             >
//               {data.event_types.map((event_type) => (
//                 <SelectItem key={event_type} value={event_type}>
//                   {event_type}
//                 </SelectItem>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Event Description : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Input
//               className=""
//               type="text"
//               readOnly
//               label="Event Description"
//               value={logData.eventDescription}
//             />
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Event Severity : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Select
//               label="Select event severity"
//               className="w-full"
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return { ...prev, eventSeverity: e.target.value };
//                 })
//               }
//             >
//               {data.event_severity.map((severity) => (
//                 <SelectItem key={severity} value={severity}>
//                   {severity}
//                 </SelectItem>
//               ))}
//             </Select>
//           </div>
//         </div>
//         <div className="flex gap-8 items-center justify-between">
//           <span className="min-w-fit">Camp Location : </span>
//           <div className="flex max-w-[400px] w-full">
//             <Select
//               label="Select Camp Location"
//               className="w-full"
//               onChange={(e) =>
//                 setlogData((prev) => {
//                   return { ...prev, campLocation: e.target.value };
//                 })
//               }
//             >
//               {data.campLocation.map((location) => (
//                 <SelectItem key={location} value={location}>
//                   {location}
//                 </SelectItem>
//               ))}
//             </Select>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center pt-8">
//         <Button color="primary" onClick={() => addLogEntrytoDatabase(logData)}>
//           Add Log Entry
//         </Button>
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Button, Input, Tooltip, Select, SelectItem } from "@nextui-org/react";
import { DicesIcon } from "lucide-react";
import { useState } from "react";
import {
  randomElementFromArray,
  randomIP,
  replaceVariable,
  addLogEntrytoDatabase,
} from "../utils";
import * as data from "../data";

export default function Inputs() {
  const [logData, setlogData] = useState({
    timestamp: "",
    source: "",
    destination: "",
    user: "",
    device: "",
    eventType: "",
    eventDescription: "",
    eventSeverity: "",
    campLocation: "",
  });

  const handleAddLogEntry = async () => {
    const response = await addLogEntrytoDatabase(logData);
    if (response && response.message === "Success") {
      alert("Log Added Successfully");
    } else {
      alert("Error adding log: " + (response.error || "Unknown error"));
    }
  };

  return (
    <div className="max-w-[800px] mx-auto">
      <div className="flex justify-center text-2xl mb-8 underline uppercase">
        Demo Application to Add Fake Logs
      </div>
      <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
        {/* Timestamp Input */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">TimeStamp : </span>
          <div className="max-w-[400px] w-full">
            <Input
              type="datetime-local"
              value={logData.timestamp}
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  timestamp: e.target.value,
                }))
              }
            />
          </div>
        </div>
        
        {/* Source IP Input */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Source IP : </span>
          <div className="flex items-center gap-2 max-w-[400px] w-full">
            <Input
              type="text"
              readOnly
              value={logData.source}
              label="Source IP Address"
            />
            <Tooltip content={<div>Random Safe IP</div>}>
              <Button
                color="success"
                onClick={() =>
                  setlogData((prev) => ({
                    ...prev,
                    source: randomElementFromArray(data.safe_ips),
                  }))
                }
              >
                <DicesIcon />
              </Button>
            </Tooltip>
            <Tooltip content={<div>Random Unsafe IP</div>}>
              <Button
                color="danger"
                onClick={() =>
                  setlogData((prev) => ({
                    ...prev,
                    source: randomIP(),
                  }))
                }
              >
                <DicesIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
        
        {/* Destination IP Input */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Destination IP : </span>
          <div className="flex items-center gap-2 max-w-[400px] w-full">
            <Input
              type="text"
              readOnly
              value={logData.destination}
              label="Destination IP Address"
            />
            <Tooltip content={<div>Random Safe IP</div>}>
              <Button
                color="success"
                onClick={() =>
                  setlogData((prev) => ({
                    ...prev,
                    destination: randomElementFromArray(data.safe_destination_ips),
                  }))
                }
              >
                <DicesIcon />
              </Button>
            </Tooltip>
            <Tooltip content={<div>Random Unsafe IP</div>}>
              <Button
                color="danger"
                onClick={() =>
                  setlogData((prev) => ({
                    ...prev,
                    destination: randomIP(),
                  }))
                }
              >
                <DicesIcon />
              </Button>
            </Tooltip>
          </div>
        </div>
        
        {/* User Selection */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">User : </span>
          <div className="flex max-w-[400px] w-full">
            <Select
              label="Select a User"
              className="w-full"
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  user: e.target.value,
                }))
              }
            >
              {data.users.map((user) => (
                <SelectItem key={user} value={user}>
                  {user}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {/* Device Selection */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Device : </span>
          <div className="flex max-w-[400px] w-full">
            <Select
              label="Select a Device"
              className="w-full"
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  device: e.target.value,
                }))
              }
            >
              {data.device.map((device) => (
                <SelectItem key={device} value={device}>
                  {device}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {/* Event Type Selection */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Event Type : </span>
          <div className="flex max-w-[400px] w-full">
            <Select
              label="Select an Event Type"
              className="w-full"
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  eventType: e.target.value,
                  eventDescription: replaceVariable(
                    data.event_description_templates[e.target.value],
                    logData
                  ),
                }))
              }
            >
              {data.event_types.map((event_type) => (
                <SelectItem key={event_type} value={event_type}>
                  {event_type}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {/* Event Description */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Event Description : </span>
          <div className="flex max-w-[400px] w-full">
            <Input
              type="text"
              readOnly
              label="Event Description"
              value={logData.eventDescription}
            />
          </div>
        </div>
        
        {/* Event Severity Selection */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Event Severity : </span>
          <div className="flex max-w-[400px] w-full">
            <Select
              label="Select event severity"
              className="w-full"
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  eventSeverity: e.target.value,
                }))
              }
            >
              {data.event_severity.map((severity) => (
                <SelectItem key={severity} value={severity}>
                  {severity}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
        
        {/* Camp Location Selection */}
        <div className="flex gap-8 items-center justify-between">
          <span className="min-w-fit">Camp Location : </span>
          <div className="flex max-w-[400px] w-full">
            <Select
              label="Select Camp Location"
              className="w-full"
              onChange={(e) =>
                setlogData((prev) => ({
                  ...prev,
                  campLocation: e.target.value,
                }))
              }
            >
              {data.campLocation.map((location) => (
                <SelectItem key={location} value={location}>
                  {location}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-8">
        <Button color="primary" onClick={handleAddLogEntry}>
          Add Log Entry
        </Button>
      </div>
    </div>
  );
}
