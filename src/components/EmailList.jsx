import { useSelector } from "react-redux";
import EmailCard from "./EmailCard";

export default function EmailList() {
  const emails = useSelector((state) => state.emails.filterEmails);

  return (
    <div className='flex flex-col gap-4'>
      {emails &&
        emails.map((email) => {
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
