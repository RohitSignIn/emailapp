import { useSelector } from "react-redux";
import EmailCard from "./EmailCard";

export default function EmailList() {
  const emailState = useSelector((state) => state.emails);

  const { filterEmails } = emailState;
  console.log("Hello from Email Card", filterEmails);

  return (
    <div className='flex flex-col gap-4'>
      {filterEmails &&
        filterEmails.map((email) => {
          return (
            <EmailCard
              key={email.id}
              id={email.id}
              email={email.email}
              name={email.name}
              subject={email.subject}
              short_desc={email.short_desc}
              date={email.date}
              read={email.read}
              favorite={email.favorite}
            />
          );
        })}
    </div>
  );
}
