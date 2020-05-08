import React, { useEffect, useState } from "react";

export default function Test(db) {
  const [fpItems, fpUpdateItems] = useState([]);
  useEffect(async () => {
    const all = db.db.ref("fresh");
    const data = await all.once("value");
    fpUpdateItems(data.val());
  }, [db]);

  return (
    <div>
      {
        fpItems.map((item, index) => (
          <div key={index}>
            <span>{index}</span>
            <span>{JSON.stringify(item)}</span>
          </div>
        ))
      }
    </div>
  );
}