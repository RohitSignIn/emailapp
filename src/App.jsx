import { useDispatch } from "react-redux";
import { useEffect, useState, lazy, Suspense } from "react";

import { fetchEmails } from "./redux/slices/EmailSlice";

const TopRow = lazy(() => import("./components/TopRow"));
const EmailList = lazy(() => import("./components/EmailList"));
const MailBody = lazy(() => import("./components/MailBody"));
const Pagination = lazy(() => import("./components/Pagination"));

function App() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchEmails(page));
  }, [page]);

  return (
    <>
      <div className='p-6 bg-Background'>
        <Suspense
          fallback={
            <div class='w-full h-8 bg-Loading animate-pulse rounded'></div>
          }
        >
          <TopRow />
          <div className='flex gap-2 min-w-[300px] min-h-[70vh] items-start justify-center'>
            <div>
              <EmailList />
            </div>
            <MailBody />
          </div>
        </Suspense>
        <Suspense
          fallback={
            <div class='w-full h-8 bg-Loading animate-pulse rounded'></div>
          }
        >
          <Pagination page={page} setPage={setPage} />
        </Suspense>
      </div>
    </>
  );
}

export default App;
