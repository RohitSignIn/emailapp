import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

const EmailCard = lazy(() => import("./EmailCard"));

export default function EmailList() {
  const emailState = useSelector((state) => state.emails);

  const { filterEmails } = emailState;

  return (
    <div className='flex flex-col gap-4'>
      {filterEmails &&
        filterEmails.map((email) => {
          return (
            <div key={email.id} className='w-full'>
              <Suspense
                fallback={
                  <div className='shadow rounded-md p-4 w-[300px] mx-auto'>
                    <div className='animate-pulse flex space-x-4'>
                      <div className='rounded-full bg-Loading h-10 w-10'></div>
                      <div className='flex-1 space-y-6 py-1'>
                        <div className='h-2 bg-Loading rounded'></div>
                        <div className='space-y-3'>
                          <div className='grid grid-cols-3 gap-4'>
                            <div className='h-2 bg-Loading rounded col-span-2'></div>
                            <div className='h-2 bg-Loading rounded col-span-1'></div>
                          </div>
                          <div className='h-2 bg-Loading rounded'></div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              >
                <EmailCard
                  id={email.id}
                  email={email.email}
                  name={email.name}
                  subject={email.subject}
                  short_desc={email.short_desc}
                  date={email.date}
                  read={email.read}
                  favorite={email.favorite}
                />
              </Suspense>
            </div>
          );
        })}
    </div>
  );
}
