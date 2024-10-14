import { SITE_DATA } from "../models/siteData";
import { IContactList } from "../models/types";

export const ContactBanner = () => {
  const contactList: IContactList[] = SITE_DATA.navbarLinks;
  return (
    <span>
      {contactList.map((contact, index) => (
        <span key={index}>
          <a className="underline" href={contact.url} target="_blank">
            {contact.label}
          </a>
          {index < contactList.length - 1 && " | "}
        </span>
      ))}
    </span>
  );
};
