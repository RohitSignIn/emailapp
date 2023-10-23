import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { fetchEmails } from "./redux/slices/EmailSlice";

import "./App.css";
import TopRow from "./components/TopRow";
import EmailList from "./components/EmailList";

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEmails(page));
  }, [page]);

  return (
    <>
      <div className='m-6'>
        <TopRow />
        <div className='flex gap-2 items-center justify-center'>
          <EmailList />
          {/* <MailBody /> */}
        </div>

        {/* Pagination Start  */}
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
        {/* Pagination End  */}
      </div>
    </>
  );
}

export default App;
