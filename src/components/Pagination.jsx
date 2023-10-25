import React from "react";

export default function Pagination({ page, setPage }) {
  return (
    <div className='flex justify-center my-4 gap-8'>
      <div>
        {page > 1 ? (
          <button onClick={() => setPage(page - 1)}>PREV</button>
        ) : (
          <button disabled>PREV</button>
        )}
      </div>
      <div>
        <p>{page}</p>
      </div>
      <div>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
    </div>
  );
}
